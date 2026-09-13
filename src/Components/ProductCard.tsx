import { Link } from "react-router-dom";
import type { Product } from "../types/products";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <div className="h-72 w-full bg-stone-100 p-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Information */}
      <div className="p-5">

        <h2 className="text-xl font-semibold tracking-tight text-stone-900">
          {product.name}
        </h2>

        <p className="mt-2 min-h-12 text-sm leading-6 text-stone-500">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">

          <span className="text-lg font-bold">
            ₹{product.price}
          </span>

          <Link
            to={`/products/${product.id}`}
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-500"
          >
            View Product
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;
