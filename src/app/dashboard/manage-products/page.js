"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedClient from "../../../components/ProtectedClient";
import Swal from "sweetalert2";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ManageProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch(`${API_BASE_URL}/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    async function handleDeleteProduct(id) {
        setMessage("");

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await fetch(`${API_BASE_URL}/products/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remainingProducts = products.filter(p => p._id !== id);
                            setProducts(remainingProducts);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your product has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    }

    return (
        <ProtectedClient>
            <div className="max-w-5xl mx-auto px-4 py-10 space-y-4">
                <h1 className="text-3xl font-bold text-center mb-10">Manage Products</h1>

                {
                    message && <div className="alert alert-info">
                            <span>{message}</span>
                        </div>
                }

                {
                    loading ? (
                        <div className="flex justify-center items-center min-h-[40vh]">
                            <span className="loading loading-spinner loading-lg" />
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                <thead>
                                    <tr>
                                        <th>Sl.</th>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((p, index) => (
                                            <tr key={p._id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-20 w-20">
                                                            <img src={p?.imageURL} alt={p?.title} />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{p?.title}</td>
                                                <td>{p?.price}</td>
                                                <th>
                                                    <Link href={`/items/${p._id}`} className="btn btn-xs btn-outline mr-2">
                                                        View
                                                    </Link>
                                                    <Link href={`/dashboard/edit-product/${p._id}`} className="btn btn-xs btn-outline mr-2">
                                                        Edit
                                                    </Link>
                                                    <button onClick={() => handleDeleteProduct(p._id)} className="btn btn-xs btn-outline font-medium text-red-500">
                                                        Delete
                                                    </button>
                                                </th>
                                            </tr>
                                        ))
                                    }
                                    {
                                        products.length === 0 && (
                                            <tr>
                                                <td colSpan={5} className="text-center py-6">
                                                    No products found.
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }
            </div>
        </ProtectedClient>
    );
}
