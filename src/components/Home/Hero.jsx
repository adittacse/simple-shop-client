import Link from "next/link";

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-sky-50 via-white to-blue-50 border-b border-base-200">
            <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24 grid gap-10 lg:grid-cols-2 items-center">
                <div className="space-y-5">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Manage your products with a{" "}
                        <span className="text-primary">simple, clean</span> interface.
                    </h1>
                    <p className="text-base opacity-80 max-w-xl">
                        SimpleShop is a minimal product app built with Next.js, Tailwind,
                        and DaisyUI.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/items" className="btn btn-primary text-white">
                            Browse Products
                        </Link>
                        <Link href="/dashboard/add-product" className="btn btn-outline">
                            Add Product
                        </Link>
                    </div>
                </div>
                <div className="rounded-2xl border border-base-200 bg-base-100 shadow-sm p-6">
                    <p className="text-sm font-medium mb-2 text-primary">
                        Tech stack
                    </p>
                    <ul className="text-sm space-y-1">
                        <li>• Next.js (App Router)</li>
                        <li>• Tailwind CSS + DaisyUI</li>
                        <li>• Firebase Auth (Google + Email Credentials)</li>
                        <li>• Express + MongoDB backend</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Hero;