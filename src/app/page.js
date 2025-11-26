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
      <div className="space-y-16">
          {/* 1. Hero Section */}
          <section className="hero min-h-[60vh] bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                  <div className="flex-1 text-center lg:text-left">
                      <h1 className="text-4xl md:text-5xl font-bold">
                          Manage Your Products in One Simple Place
                      </h1>
                      <p className="py-6 max-w-md">
                          SimpleShop lets you browse, add and manage products with a clean,
                          minimal interface. Perfect for assignments and quick demos.
                      </p>
                      <div className="flex gap-3 justify-center lg:justify-start">
                          <Link href="/items" className="btn btn-primary">
                              Browse Products
                          </Link>
                          <Link href="/dashboard/add-product" className="btn btn-outline">
                              Add Product
                          </Link>
                      </div>
                  </div>
                  <div className="flex-1">
                      <div className="mockup-window border bg-base-300">
                          <div className="flex justify-center px-4 py-10">
                              <p className="text-sm md:text-base">
                                  Clean, responsive UI powered by Next.js, Tailwind & DaisyUI.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* 2. Features Section */}
          <section id="features" className="max-w-6xl mx-auto px-4 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center">
                  Why SimpleShop?
              </h2>
              <p className="text-center max-w-2xl mx-auto opacity-80">
                  Focused on layout consistency, responsiveness and a pleasant
                  experience. Functionality is minimal but meaningful.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                  <div className="card bg-base-100 shadow hover:shadow-md">
                      <div className="card-body">
                          <h3 className="card-title text-lg">Clean Layout</h3>
                          <p>Consistent spacing, typography and card layouts.</p>
                      </div>
                  </div>
                  <div className="card bg-base-100 shadow hover:shadow-md">
                      <div className="card-body">
                          <h3 className="card-title text-lg">Protected Routes</h3>
                          <p>Add & manage products only when logged in.</p>
                      </div>
                  </div>
                  <div className="card bg-base-100 shadow hover:shadow-md">
                      <div className="card-body">
                          <h3 className="card-title text-lg">Simple Auth</h3>
                          <p>Login via Google or demo credentials in seconds.</p>
                      </div>
                  </div>
              </div>
          </section>

          {/* 3. Highlight Products Section */}
          <section id="items" className="max-w-6xl mx-auto px-4 space-y-6">
              <div className="flex justify-between items-center">
                  <div>
                      <h2 className="text-2xl md:text-3xl font-bold">
                          Featured Products
                      </h2>
                      <p className="opacity-80">
                          A quick preview of items you can browse and manage.
                      </p>
                  </div>
                  <Link href="/items" className="btn btn-sm btn-outline">
                      View All
                  </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                  {demoProducts.map((p) => (
                      <ProductCard key={p.id} product={p} />
                  ))}
              </div>
          </section>

          {/* 4. Testimonials Section */}
          <section id="testimonials" className="bg-base-200 py-12 px-4">
              <div className="max-w-4xl mx-auto space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-center">
                      Simple Experience Developers Love
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                      <div className="card bg-base-100 shadow">
                          <div className="card-body">
                              <p>
                                  “Exactly what I needed for my assignment—clean, easy and
                                  focused on UI.”
                              </p>
                              <span className="mt-3 font-semibold">– Frontend Student</span>
                          </div>
                      </div>
                      <div className="card bg-base-100 shadow">
                          <div className="card-body">
                              <p>
                                  “Protected routes and NextAuth are set up in a minimal,
                                  understandable way.”
                              </p>
                              <span className="mt-3 font-semibold">
                  – Junior Full Stack Dev
                </span>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* 5. Banner / CTA Section */}
          <section className="max-w-5xl mx-auto px-4">
              <div className="hero bg-primary text-primary-content rounded-xl">
                  <div className="hero-content flex-col lg:flex-row gap-8">
                      <div>
                          <h2 className="text-2xl md:text-3xl font-bold">
                              Ready to try the protected pages?
                          </h2>
                          <p className="py-4 max-w-md">
                              Use Google login or the demo credentials to access Add Product
                              and Manage Products dashboards.
                          </p>
                          <p className="text-sm">
                              Demo credentials: <b>demo@demo.com</b> / <b>demo123</b>
                          </p>
                      </div>
                      <div className="flex gap-3">
                          <Link href="/login" className="btn">
                              Login
                          </Link>
                          <Link href="/dashboard/manage-products" className="btn btn-outline">
                              Manage Products
                          </Link>
                      </div>
                  </div>
              </div>
          </section>

          {/* 6. FAQ Section */}
          <section className="max-w-5xl mx-auto px-4 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center">
                  Frequently Asked Questions
              </h2>
              <div className="join join-vertical w-full">
                  <div className="collapse collapse-arrow join-item border border-base-300">
                      <input type="radio" name="faq" defaultChecked />
                      <div className="collapse-title text-lg font-medium">
                          Is this production ready?
                      </div>
                      <div className="collapse-content">
                          <p>
                              No, this is a simple demo focused on UI, routing and basic
                              authentication.
                          </p>
                      </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border border-base-300">
                      <input type="radio" name="faq" />
                      <div className="collapse-title text-lg font-medium">
                          Do I need a database?
                      </div>
                      <div className="collapse-content">
                          <p>
                              For the assignment, products are stored in MongoDB via an
                              Express API.
                          </p>
                      </div>
                  </div>
              </div>
          </section>

          {/* 7. Contact Section */}
          <section id="contact" className="max-w-4xl mx-auto px-4 pb-16 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center">
                  Need to extend this project?
              </h2>
              <p className="text-center opacity-80 max-w-xl mx-auto">
                  You can easily plug in a real database, add more pages, or customize
                  the theme using DaisyUI.
              </p>
              <form className="card bg-base-100 shadow max-w-xl mx-auto p-6 space-y-4">
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
                      Send (UI Only)
                  </button>
              </form>
          </section>
      </div>
  );
}
