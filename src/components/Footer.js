import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-10">
            <div>
                <span className="footer-title">SimpleShop</span>
                <p className="max-w-xs">
                    Minimal product management demo with authentication and protected
                    routes.
                </p>
            </div>
            <div>
                <span className="footer-title">Links</span>
                <Link href="/">Home</Link>
                <Link href="/items">Products</Link>
                <a href="#features">Features</a>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <a>Facebook</a>
                <a>Twitter</a>
                <a>GitHub</a>
            </div>
            <div className="mt-4 col-span-full">
                <p className="text-xs opacity-70">
                    © {new Date().getFullYear()} SimpleShop. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
