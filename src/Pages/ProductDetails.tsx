import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold">
          Product Not Found
        </h1>

        <p className="mt-4 text-gray-500">
          The product you are looking for does not exist.
        </p>

        <Link
          to="/products"
          className="mt-8 inline-block rounded-lg bg-black px-6 py-3 text-white"
        >
          Back to Products
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      <div className="grid gap-12 md:grid-cols-2">

        {/* Product Image */}
        <div className="flex h-[500px] items-center justify-center rounded-3xl bg-stone-100 p-8">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">
            Fangruik edit
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            {product.name}
          </h1>

          <p className="mt-5 text-2xl font-semibold text-stone-800">
            ₹{product.price}
          </p>

          <p className="mt-6 leading-7 text-stone-600">
            {product.description}
          </p>

          <div className="mt-8 flex gap-4">

            <button
              onClick={() => window.alert(`${product.name} has been added to your shopping list.`)}
              className="rounded-full bg-stone-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-rose-500"
            >
              Buy Now
            </button>

            <Link
              to="/products"
              className="rounded-full border border-stone-300 px-8 py-3 text-sm font-semibold transition hover:bg-stone-100"
            >
              Back
            </Link>

          </div>
          <div className="mt-9 border-t border-stone-200 pt-6 text-sm text-stone-500">
            Free shipping on orders over ₹999 · Carefully packed for your doorstep
          </div>

        </div>

      </div>

    </main>
  );
}

export default ProductDetails;
