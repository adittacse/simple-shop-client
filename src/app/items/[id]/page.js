import Link from "next/link";
import { notFound } from "next/navigation";

const API_BASE_URL = process.env.API_BASE_URL || "https://simple-shop-server.onrender.com";

async function getProduct(id) {
    return await fetch(`${API_BASE_URL}/products/${id}`).then(res => res.json());
}

export default async function ItemDetailsPage({ params }) {
    const param = await params;
    const product = await getProduct(param.id);

    if (!product) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
            <Link href="/items" className="btn btn-ghost btn-sm">
                ← Back to Products
            </Link>

            <div className="flex justify-center w-full h-64 md:h-80 relative rounded-xl">
                <img
                    src={product.imageURL}
                    alt={product?.title}
                    className="object-cover border-2"
                />
            </div>

            <div className="space-y-3">
                <h1 className="text-3xl font-bold">{product.title}</h1>

                <p className="mt-4 leading-relaxed w-full text-center">
                    <span className="font-bold text-xl">
                        Price: ${product?.price}
                    </span>
                </p>

                <p className="mt-4 leading-relaxed">
                    <span className="font-bold">Short Description: </span>
                    {product?.shortDescription}
                </p>

                <p className="mt-4 leading-relaxed">
                    <span className="font-bold">Full Description: </span>
                    {product?.fullDescription}
                </p>
            </div>
        </div>
    );
}
