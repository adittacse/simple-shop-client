import Link from "next/link";

export default function ProductCard({ product }) {
    return (
        <div className="card bg-base-100 shadow-md hover:shadow-2xl transition rounded-xl border border-base-200">
            <figure className="h-40 overflow-hidden">
                <img
                    src={product?.imageURL}
                    alt={product?.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body gap-2">
                <h3 className="card-title text-base md:text-lg">
                    {product?.title}
                </h3>
                <p className="text-sm opacity-80">
                    {
                        product?.shortDescription?.length > 70
                            ? product.shortDescription.slice(0, 70) + "..."
                            : product.shortDescription
                    }
                </p>
                <div className="flex justify-between items-center text-sm mt-1">
                    <span className="font-semibold text-primary">
                        ${Number(product?.price).toFixed(2)}
                    </span>
                    <div className="card-actions justify-end mt-3">
                        <Link href={`/items/${product._id}`} className="btn btn-sm btn-primary text-white">
                            Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
