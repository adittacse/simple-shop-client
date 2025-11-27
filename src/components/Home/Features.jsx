import React from "react";

const Features = () => {
    return (
        <section id="features" className="max-w-6xl mx-auto px-4 space-y-8">
            <div className="text-center space-y-3">
                <h2 className="text-3xl font-bold">Why SimpleShop?</h2>
                <p className="opacity-80 max-w-2xl mx-auto">
                    The goal is not complex business logic – just clean UI, good
                    responsiveness and clear protected routes for your task.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="card bg-base-100 border border-base-200 shadow-sm">
                    <div className="card-body">
                        <h3 className="font-semibold text-lg">Polished layout</h3>
                        <p className="text-sm opacity-80">
                            Consistent spacing, typography and modern card design across all
                            pages.
                        </p>
                    </div>
                </div>
                <div className="card bg-base-100 border border-base-200 shadow-sm">
                    <div className="card-body">
                        <h3 className="font-semibold text-lg">
                            Auth + Protected pages
                        </h3>
                        <p className="text-sm opacity-80">
                            Add & manage products only when logged in with NextAuth.
                        </p>
                    </div>
                </div>
                <div className="card bg-base-100 border border-base-200 shadow-sm">
                    <div className="card-body">
                        <h3 className="font-semibold text-lg">MongoDB backend</h3>
                        <p className="text-sm opacity-80">
                            Real CRUD operations with an Express + Mongo API instead of
                            static data.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;