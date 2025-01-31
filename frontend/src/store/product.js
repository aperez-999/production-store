import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,

  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill in all fields." };
    }
  
    try {
      const res = await fetch("/api/products", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
  
      if (!res.ok) {
        const errorText = await res.text();
        return { success: false, message: `Error: ${res.status} - ${errorText}` };
      }
  
      await res.json(); // Consume the response to prevent errors
  
      // Refetch all products to get the latest data
      await useProductStore.getState().fetchProducts();
  
      return { success: true, message: "Product created successfully" };
    } catch (error) {
      return { success: false, message: "Network error: " + error.message };
    }
  },

  fetchProducts: async () => {
    set({ loading: true, error: null });
  
    try {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
  
      const data = await res.json();
    
      if (!Array.isArray(data)) {  
        throw new Error("Invalid response format: Expected an array");
      }
  
      set({ products: data, loading: false }); 
  
    } catch (error) {
      set({ error: error.message, loading: false });
      console.error("Error fetching products:", error);
    }
  },

  deleteProduct: async (pid) => {
    try {
      const res = await fetch(`/api/products/${pid}`, { method: "DELETE" });
      const data = await res.json();

      if (!data.success) return { success: false, message: data.message };

      set((state) => ({ products: state.products.filter((product) => product._id !== pid) }));
      return { success: true, message: data.message };
    } catch (error) {
      return { success: false, message: "Error deleting product: " + error.message };
    }
  },

  updateProduct: async (pid, updatedProduct) => {
    try {
      const res = await fetch(`/api/products/${pid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      const data = await res.json();
      if (!data.success) return { success: false, message: data.message };

      set((state) => ({
        products: state.products.map((product) => (product._id === pid ? data.data : product)),
      }));

      return { success: true, message: data.message };
    } catch (error) {
      return { success: false, message: "Error updating product: " + error.message };
    }
  },
}));