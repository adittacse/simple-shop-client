import Link from "next/link";
import ProductCard from "../components/ProductCard";

const demoProducts = [
    {

        id: "demo1",
        title: "Minimalist Desk Lamp",
        shortDescription: "Soft warm light for your workspace.",
        price: 29.99,
        priority: "High",
        imageUrl:
            "https://images.pexels.com/photos/7130488/pexels-photo-7130488.jpeg"
    },
    {
        id: "demo2",
        title: "Wireless Keyboard",
        shortDescription: "Compact and quiet keys for smooth typing.",
        price: 39.99,
        priority: "Medium",
        imageUrl:
            "https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg"
    },
    {
        id: "demo3",
        title: "Ergonomic Chair",
        shortDescription: "Supportive mesh chair for long hours.",
        price: 129.0,
        priority: "High",
        imageUrl:
            "https://images.pexels.com/photos/37347/office-chair-chair-desk-leather-37347.jpeg"
    }
];

export default function Home() {
  return (
      <div className="space-y-20">
          {/* Hero */}
          <section className="bg-gradient-to-r from-sky-50 via-white to-blue-50 border-b border-base-200">
              <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24 grid gap-10 lg:grid-cols-2 items-center">
                  <div className="space-y-5">
                      <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                          Manage your products with a{" "}
                          <span className="text-primary">simple, clean</span> interface.
                      </h1>
                      <p className="text-base opacity-80 max-w-xl">
                          SimpleShop is a minimal product app built with Next.js, Tailwind,
                          DaisyUI and NextAuth. Perfect for assignments, demos and early
                          portfolio projects.
                      </p>
                      <div className="flex flex-wrap gap-3">
                          <Link href="/items" className="btn btn-primary">
                              Browse Products
                          </Link>
                          <Link href="/dashboard/add-product" className="btn btn-outline">
                              Add Product
                          </Link>
                      </div>
                  </div>
                  <div className="rounded-2xl border border-base-200 bg-base-100 shadow-sm p-6">
                      <p className="text-sm font-medium mb-2 text-primary">
                          Tech stack
                      </p>
                      <ul className="text-sm space-y-1">
                          <li>• Next.js (App Router)</li>
                          <li>• Tailwind CSS + DaisyUI</li>
                          <li>• NextAuth (Google + Credentials)</li>
                          <li>• Express + MongoDB backend</li>
                      </ul>
                  </div>
              </div>
          </section>

          {/* Features */}
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

          {/* Highlight Products */}
          <section id="highlight" className="max-w-6xl mx-auto px-4 space-y-6">
              <div className="flex justify-between items-center">
                  <div>
                      <h2 className="text-2xl font-bold">Featured products</h2>
                      <p className="opacity-80 text-sm">
                          Example cards showing the layout before your own data.
                      </p>
                  </div>
                  <Link href="/items" className="btn btn-sm btn-outline">
                      View all
                  </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {demoProducts.map((p) => (
                      <ProductCard key={p.id} product={p} />
                  ))}
              </div>
          </section>

          {/* Testimonials */}
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

          {/* CTA banner */}
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
                          <p className="text-xs">
                              Demo: <b>demo@demo.com</b> / <b>demo123</b>
                          </p>
                      </div>
                      <div className="flex gap-3">
                          <Link href="/login" className="btn btn-sm md:btn-md">
                              Login
                          </Link>
                          <Link
                              href="/dashboard/manage-products"
                              className="btn btn-sm md:btn-md btn-outline"
                          >
                              Manage products
                          </Link>
                      </div>
                  </div>
              </div>
          </section>

          {/* FAQ */}
          <section className="max-w-5xl mx-auto px-4 space-y-6">
              <h2 className="text-2xl font-bold text-center">FAQ</h2>
              <div className="join join-vertical w-full">
                  <div className="collapse collapse-arrow join-item border border-base-300">
                      <input type="radio" name="faq" defaultChecked />
                      <div className="collapse-title text-base font-medium">
                          Is this production ready?
                      </div>
                      <div className="collapse-content text-sm opacity-80">
                          <p>
                              No, this is a simple educational project focusing on good UI and
                              basic auth & CRUD.
                          </p>
                      </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border border-base-300">
                      <input type="radio" name="faq" />
                      <div className="collapse-title text-base font-medium">
                          Can I connect a real DB?
                      </div>
                      <div className="collapse-content text-sm opacity-80">
                          <p>
                              Yes. It already uses MongoDB via Express; you can easily swap to
                              your own cluster or schema.
                          </p>
                      </div>
                  </div>
              </div>
          </section>

          {/* Contact */}
          <section
              id="contact"
              className="max-w-4xl mx-auto px-4 pb-16 space-y-6"
          >
              <h2 className="text-2xl font-bold text-center">Contact (UI only)</h2>
              <p className="text-center opacity-80 text-sm max-w-xl mx-auto">
                  Simple contact form to show form styling. No backend submission is
                  wired – perfect for the assignment.
              </p>
              <form className="card bg-base-100 border border-base-200 shadow-sm max-w-xl mx-auto p-6 space-y-4">
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Your email</span>
                      </label>
                      <input
                          type="email"
                          className="input input-bordered"
                          placeholder="you@example.com"
                      />
                  </div>
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Message</span>
                      </label>
                      <textarea
                          className="textarea textarea-bordered"
                          placeholder="Write your message"
                      ></textarea>
                  </div>
                  <button type="button" className="btn btn-primary w-full">
                      Send (UI only)
                  </button>
              </form>
          </section>
      </div>
  );
}
