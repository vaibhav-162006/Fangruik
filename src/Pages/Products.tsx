import ProductCard from "../Components/ProductCard";
import { products } from "../data/products";

function Products() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      <div className="mb-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">
          Our Collection
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          All Products
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-stone-600">
          Explore our complete collection of carefully selected products.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </main>
  );
}

export default Products;
