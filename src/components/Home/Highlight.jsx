import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const API_BASE_URL = process.env.API_BASE_URL || "https://simple-shop-server.onrender.com";

async function getProducts() {
    return await fetch(`${API_BASE_URL}/products`).then(res => res.json());
}

const Highlight = async () => {
    const productsData = await getProducts();
    const data = productsData.slice(0, 3);

    return (
        <section id="highlight" className="max-w-6xl mx-auto px-4 space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold">Featured products</h2>
                </div>
                <Link href="/items" className="btn btn-sm btn-outline">
                    View all
                </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    data.map((p) => (
                        <ProductCard key={p._id} product={p} />
                    ))
                }
            </div>
        </section>
    );
};

export default Highlight;