import React from 'react';
import Link from "next/link";

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="bg-base-200/60 border-y border-base-200 px-4 py-16"
        >
            <div className="max-w-5xl mx-auto space-y-8">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold">What developers say</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="card bg-base-100 shadow-sm border border-base-200">
                        <div className="card-body">
                            <p className="text-sm">
                                “For my assignment I just needed a clean Next.js app with
                                login and a protected dashboard. SimpleShop did exactly that.”
                            </p>
                            <span className="mt-3 text-sm font-semibold">
                  – Frontend Student
                </span>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm border border-base-200">
                        <div className="card-body">
                            <p className="text-sm">
                                “Easy to extend – I swapped the in-memory data for MongoDB in
                                minutes and kept the same UI.”
                            </p>
                            <span className="mt-3 text-sm font-semibold">
                  – Junior Full Stack Dev
                </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;