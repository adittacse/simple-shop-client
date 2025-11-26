"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedClient from "../../../components/ProtectedClient";

const API_BASE_URL =
    typeof window === "undefined"
        ? process.env.NEXT_PUBLIC_API_BASE_URL
        : process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ManageProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);

    async function fetchProducts() {
        try {
            const res = await fetch(`${API_BASE_URL}/products`);
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            setMessage("Failed to load products.");
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(id) {
        setMessage(null);
        try {
            const res = await fetch(`${API_BASE_URL}/products/${id}`, {
                method: "DELETE"
            });
            if (!res.ok) {
                throw new Error("Failed");
            }
            setProducts((prev) => prev.filter((p) => p.id !== id));
            setMessage("Product deleted successfully.");
        } catch (error) {
            setMessage("Failed to delete product.");
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProtectedClient>
            <div className="max-w-5xl mx-auto px-4 py-10 space-y-4">
                <h1 className="text-3xl font-bold">Manage Products</h1>
                <p className="opacity-80">
                    A simple overview of all products with options to view or delete.
                </p>

                {message && (
                    <div className="alert alert-info">
                        <span>{message}</span>
                    </div>
                )}

                {loading ? (
                    <div className="flex justify-center items-center min-h-[40vh]">
                        <span className="loading loading-spinner loading-lg" />
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th className="hidden md:table-cell">Price</th>
                                <th className="hidden md:table-cell">Date</th>
                                <th className="hidden md:table-cell">Priority</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {products.map((p) => (
                                <tr key={p.id}>
                                    <td>{p.title}</td>
                                    <td className="hidden md:table-cell">
                                        ${Number(p.price).toFixed(2)}
                                    </td>
                                    <td className="hidden md:table-cell">
                                        {p.date || "-"}
                                    </td>
                                    <td className="hidden md:table-cell">
                                        {p.priority || "-"}
                                    </td>
                                    <td className="flex gap-2">
                                        <Link
                                            href={`/items/${p.id}`}
                                            className="btn btn-xs btn-outline"
                                        >
                                            View
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(p.id)}
                                            className="btn btn-xs btn-error text-white"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {products.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="text-center py-6">
                                        No products found.
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </ProtectedClient>
    );
}
