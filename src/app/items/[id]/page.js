import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";

async function getProduct(id) {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
        next: { revalidate: 0 }
    });
    if (!res.ok) {
        return null;
    }
    return res.json();
}

export default async function ItemDetailsPage({ params }) {
    const product = await getProduct(params.id);

    if (!product) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
            <Link href="/items" className="btn btn-ghost btn-sm">
                ← Back to Products
            </Link>

            {product.imageUrl && (
                <div className="w-full h-64 md:h-80 relative rounded-xl overflow-hidden">
                    <Image
                        src={product.imageUrl}
                        alt={product.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <div className="space-y-3">
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <div className="flex flex-wrap gap-3 items-center text-sm">
          <span className="badge badge-outline">
            Price: ${Number(product.price).toFixed(2)}
          </span>
                    {product.date && (
                        <span className="badge badge-outline">
              Date: {product.date}
            </span>
                    )}
                    {product.priority && (
                        <span className="badge badge-outline">
              Priority: {product.priority}
            </span>
                    )}
                </div>

                <p className="mt-4 leading-relaxed">
                    {product.fullDescription || product.shortDescription}
                </p>
            </div>
        </div>
    );
}
