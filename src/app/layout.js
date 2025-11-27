import "./globals.css";
import AuthProvider from "@/app/contexts/AuthProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Simple Shop",
    description: "Simple shop with Next.js, Firebase Auth, Tailwind & DaisyUI"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
            <body>
                <AuthProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
}
