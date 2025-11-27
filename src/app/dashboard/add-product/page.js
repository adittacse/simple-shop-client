"use client";

import { useState } from "react";
import ProtectedClient from "../../../components/ProtectedClient";
import Swal from "sweetalert2";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function AddProductPage() {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const title = e.target.title.value;
        const shortDescription = e.target.shortDescription.value;
        const fullDescription = e.target.fullDescription.value;
        const price = e.target.price.value;
        const date = new Date();
        const imageURL = e.target.imageURL.value;

        const newProduct = {
            title,
            shortDescription,
            fullDescription,
            price,
            date,
            imageURL
        };

        await fetch(`${API_BASE_URL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product added successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    e.target.reset();
                    setLoading(false);
                }
            });
    }

    return (
        <ProtectedClient>
            <div className="max-w-3xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold mb-4">Add Product</h1>

                <form onSubmit={handleSubmit} className="grid gap-4">
                    {/* title */}
                    <div className="form-control w-full">
                        <legend className="fieldset-legend mb-1">Product Title</legend>
                        <input name="title" type="text" className="input w-full" placeholder="Apple MacBook pro" required />
                    </div>

                    {/* short description */}
                    <div className="form-control w-full mb-5">
                        <legend className="fieldset-legend mb-1">Short Description</legend>
                        <textarea name="shortDescription" className="textarea w-full h-24" placeholder="Short description of the product" required ></textarea>
                    </div>

                    {/* full description */}
                    <div className="form-control w-full mb-5">
                        <legend className="fieldset-legend mb-1">Full Description</legend>
                        <textarea name="fullDescription" className="textarea w-full h-24" placeholder="Full description of the product" required ></textarea>
                    </div>

                    {/* price, date and priority */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* price */}
                        <div className="form-control">
                            <legend className="fieldset-legend mb-1">Price</legend>
                            <input name="price" type="text" min="0" className="input input-bordered w-full" placeholder="Price" required />
                        </div>

                        {/* product image url */}
                        <div className="form-control">
                            <legend className="fieldset-legend mb-1">Product Image URL</legend>
                            <input name="imageURL" type="text" className="input input-bordered w-full" placeholder="https://..." required />
                        </div>
                    </div>

                    <button type="submit"
                        className={`btn btn-primary mt-4 ${loading ? "btn-disabled" : ""}`}
                    >
                        {
                            loading ? "Adding..." : "Add Product"
                        }
                    </button>
                </form>
            </div>
        </ProtectedClient>
    );
}
