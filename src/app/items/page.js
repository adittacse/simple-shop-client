import { use } from "react";
import ProductCard from "../../components/ProductCard";

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";

const productsPromise = fetch(`${API_BASE_URL}/products`).then(res => res.json());

export default function ItemsPage() {
    const products = use(productsPromise);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
            <h1 className="text-3xl font-bold text-center ">All Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    products.map((product) => <ProductCard key={product._id}
                                                           product={product} />)
                }
            </div>
        </div>
    );
}
