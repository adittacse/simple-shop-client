"use client";

import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";

const API_BASE_URL = process.env.API_BASE_URL || "https://simple-shop-server.onrender.com";

export default function ItemsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_BASE_URL}/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <span className="loading loading-spinner loading-lg" />
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
            <h1 className="text-3xl font-bold text-center ">All Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products.map((product) => <ProductCard key={product._id}
                                                           product={product} />)
                }
            </div>
        </div>
    );
}
