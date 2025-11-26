"use client";

import { useState } from "react";
import ProtectedClient from "../../../components/ProtectedClient";

const API_BASE_URL =
    typeof window === "undefined"
        ? process.env.NEXT_PUBLIC_API_BASE_URL
        : process.env.NEXT_PUBLIC_API_BASE_URL;

export default function AddProductPage() {
    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [fullDescription, setFullDescription] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [imageUrl, setImageUrl] = useState("");
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setMessage(null);
        setLoading(true);

        try {
            const res = await fetch(`${API_BASE_URL}/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    shortDescription,
                    fullDescription,
                    price,
                    date,
                    priority,
                    imageUrl
                })
            });

            if (!res.ok) {
                throw new Error("Failed");
            }

            setMessage("Product added successfully!");
            setTitle("");
            setShortDescription("");
            setFullDescription("");
            setPrice("");
            setDate("");
            setPriority("Medium");
            setImageUrl("");
        } catch (error) {
            setMessage("Failed to add product.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <ProtectedClient>
            <div className="max-w-3xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold mb-4">Add Product</h1>
                <p className="opacity-80 mb-6">
                    Only logged-in users can access this page. Fill in the fields below
                    and submit to add a new product.
                </p>

                {message && (
                    <div className="alert alert-info mb-4">
                        <span>{message}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                            className="input input-bordered"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input
                            className="input input-bordered"
                            value={shortDescription}
                            onChange={(e) => setShortDescription(e.target.value)}
                            required
                            maxLength={120}
                        />
                        <span className="text-xs opacity-60 mt-1">
              1–2 short lines. Max 120 characters.
            </span>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Description</span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered min-h-[120px]"
                            value={fullDescription}
                            onChange={(e) => setFullDescription(e.target.value)}
                            required
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                className="input input-bordered"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                                min="0"
                                step="0.01"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input
                                type="date"
                                className="input input-bordered"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Priority</span>
                            </label>
                            <select
                                className="select select-bordered"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL (optional)</span>
                        </label>
                        <input
                            className="input input-bordered"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className={`btn btn-primary mt-4 ${loading ? "btn-disabled" : ""}`}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </ProtectedClient>
    );
}
