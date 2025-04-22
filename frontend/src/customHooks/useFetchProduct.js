import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/products");
      if (!response.ok) throw new Error(`HTTP error !: ${response.status}`);
      const jsonData = await response.json();
      setProducts(jsonData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { products, loading, error };
};
