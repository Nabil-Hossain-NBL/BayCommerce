import { useEffect, useState } from "react";
import ProductCard from "../Shared/ProductCard/ProductCard";
import './Products.css';


const Products = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    console.log(product);
    return (
        <>
            <div className="container">
                {
                    product?.map(item => <ProductCard key={item.id} item={item}></ProductCard>)
                }
            </div>
        </>
    );
};

export default Products;