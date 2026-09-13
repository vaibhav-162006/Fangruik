import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./Components/Navbar";
import Hero from "./Components/Hero";
import ProductCard from "./Components/ProductCard";
import ProductDetails from "./Pages/ProductDetails";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";

import { products } from "./data/products";

function Home() {
  return (
    <>
      <Hero />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">
              Our Collection
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Featured Products
            </h2>
          </div>

          <a
            href="/products"
            className="text-sm font-semibold text-stone-700 underline-offset-4 hover:underline"
          >
            View All
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="mt-9 text-center">
          <a href="/products" className="inline-block rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-rose-500 hover:bg-rose-50">
            View all products
          </a>
        </div>

        <section className="mt-20 grid gap-5 rounded-3xl bg-stone-900 px-7 py-10 text-white sm:grid-cols-3 sm:px-10">
          <div><p className="text-2xl">✦</p><h3 className="mt-3 font-semibold">Thoughtfully chosen</h3><p className="mt-1 text-sm leading-6 text-stone-300">Every product earns a place in our edit.</p></div>
          <div><p className="text-2xl">♡</p><h3 className="mt-3 font-semibold">Easy self-care</h3><p className="mt-1 text-sm leading-6 text-stone-300">Simple essentials for your everyday ritual.</p></div>
          <div><p className="text-2xl">↗</p><h3 className="mt-3 font-semibold">Delivered with care</h3><p className="mt-1 text-sm leading-6 text-stone-300">A smooth, dependable experience from us to you.</p></div>
        </section>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
