import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
    return (
        <div className="card bg-base-100 shadow hover:shadow-lg transition">
            <figure className="h-40 overflow-hidden">
                {product?.imageUrl && (
                    <Image
                        src={product?.imageUrl}
                        alt={product?.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                    />
                )}
            </figure>
            <div className="card-body">
                <h2 className="card-title text-base md:text-lg">
                    {product?.title}
                </h2>
                <p className="text-sm line-clamp-2">
                    {product?.shortDescription}
                </p>
                <div className="flex justify-between items-center mt-2">
          <span className="font-semibold text-primary">
            ${Number(product?.price).toFixed(2)}
          </span>
                    {product?.priority && (
                        <span className="badge badge-outline badge-sm capitalize">
              {product?.priority}
            </span>
                    )}
                </div>
                <div className="card-actions justify-end mt-3">
                    <Link href={`/items/${product?.id}`} className="btn btn-sm btn-primary">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
}
