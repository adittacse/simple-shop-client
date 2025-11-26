const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";

async function getProducts() {
    const res = await fetch(`${API_BASE_URL}/products`, {
        next: { revalidate: 0 }
    });
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
}

import ProductCard from "../../components/ProductCard";

export default async function ItemsPage() {
    const products = await getProducts();

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">All Products</h1>
                <p className="opacity-80 max-w-xl">
                    Browse all available products. Use the search bar or category filter
                    (UI only) to quickly find what you need.
                </p>
            </div>

            {/* Search + Filter UI only */}
            <div className="flex flex-col md:flex-row gap-3">
                <input
                    className="input input-bordered w-full md:flex-1"
                    placeholder="Search products (UI only)"
                />
                <select className="select select-bordered md:w-52">
                    <option>All priorities</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
}
