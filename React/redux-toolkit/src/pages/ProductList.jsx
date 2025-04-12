import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../components/Product/ProductCard";
import { addProducts } from "../store/slice/ProductSlice";

export const ProductList = () => {
  const products = useSelector((store) => store.product.products);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    let response = await data.json();
    dispatch(addProducts(response?.products));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            return <ProductCard key={product?.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};
