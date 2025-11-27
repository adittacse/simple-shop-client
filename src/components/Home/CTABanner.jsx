import React from 'react';
import Link from "next/link";

const CtaBanner = () => {
    return (
        <section className="max-w-5xl mx-auto px-4">
            <div className="hero rounded-2xl bg-primary text-primary-content">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <div className="space-y-3">
                        <h2 className="text-2xl lg:text-3xl font-bold">
                            Try the protected dashboard
                        </h2>
                        <p className="text-sm lg:text-base opacity-90">
                            Login with Google or use the demo credentials to access Add
                            Product and Manage Products.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Link href="/login" className="btn btn-sm md:btn-md text-black">
                            Login
                        </Link>
                        <Link
                            href="/dashboard/manage-products"
                            className="btn btn-sm md:btn-md btn-outline hover:text-black"
                        >
                            Manage products
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaBanner;