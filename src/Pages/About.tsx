import { Link } from "react-router-dom";

function About() {
  return (
    <main>
      <section className="bg-stone-100">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">About Fangruik</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-stone-900 md:text-6xl">The little things that make a day feel better.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-600">Fangruik is a considered collection of everyday self-care essentials. We believe the best routines are simple, personal, and easy to return to.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="rounded-3xl bg-rose-100 p-10 md:p-16"><p className="text-6xl text-rose-500">✦</p><p className="mt-8 text-3xl font-semibold leading-tight tracking-tight text-stone-800">A softer approach to everyday care.</p></div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">Our promise</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Good products should feel uncomplicated.</h2>
          <p className="mt-5 leading-7 text-stone-600">We select useful, approachable products that turn everyday care into a small moment of pause. No overthinking, just the essentials that help you feel like yourself.</p>
          <Link to="/products" className="mt-7 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-500">Explore the collection</Link>
        </div>
      </section>
    </main>
  );
}

export default About;
