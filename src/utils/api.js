export const getDummyJson = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const { products } = await res.json();
   
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };
  