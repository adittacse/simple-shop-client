import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-base-200 bg-base-100">
            <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-3">
                <div>
                    <h3 className="font-semibold text-lg">SimpleShop</h3>
                    <p className="text-sm opacity-80 mt-2">
                        A minimal product demo with authentication, protected pages and
                        clean UI.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-sm">Navigation</h4>
                    <div className="flex flex-col gap-1 text-sm">
                        <Link href="/">Home</Link>
                        <Link href="/items">Products</Link>
                        <a href="#features">Features</a>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-sm">Social</h4>
                    <div className="flex flex-col gap-1 text-sm">
                        <a>Facebook</a>
                        <a>Twitter</a>
                        <a>GitHub</a>
                    </div>
                </div>
            </div>
            <div className="text-center text-xs opacity-60 pb-4">
                © {new Date().getFullYear()} SimpleShop. All rights reserved.
            </div>
        </footer>
    );
}
