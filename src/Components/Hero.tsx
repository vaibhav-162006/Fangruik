import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="overflow-hidden bg-stone-100">
      <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.05fr_.95fr]">

        <div className="max-w-2xl">

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-rose-500">
            One Store. Endless Possiblities.
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-stone-900 md:text-6xl">
            Everyday essentials.
            <br />
            Made for you.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">
            Beauty, skincare and everyday care—thoughtfully chosen
            to fit into your routine.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-block rounded-full bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-rose-500"
          >
            Explore Products
          </Link>

        </div>
        <div className="relative flex min-h-[280px] items-center justify-center sm:min-h-[350px] lg:min-h-[400px]">
          <div className="absolute h-56 w-56 rounded-full bg-rose-200/70 sm:h-72 sm:w-72 lg:h-80 lg:w-80" />
          <img src="/images/highlighter.png" alt="Fangruik beauty collection" className="relative h-[270px] w-full object-contain drop-shadow-2xl sm:h-[340px] lg:h-[390px]" />
          <div className="absolute bottom-1 right-0 rounded-2xl bg-white px-4 py-2 shadow-lg sm:bottom-4 sm:right-3 sm:px-5 sm:py-3">
            <p className="text-xs font-bold uppercase tracking-widest text-rose-500">Made for you</p>
            <p className="mt-1 text-sm font-semibold text-stone-800">Simple self-care, daily.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
