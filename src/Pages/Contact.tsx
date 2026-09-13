import { useState } from "react";
import type { FormEvent } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <section>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500">Contact us</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">We’d love to hear from you.</h1>
          <p className="mt-5 max-w-md leading-7 text-stone-600">Have a question about an order or a product? Send us a note and our small team will get back to you soon.</p>
          <div className="mt-10 space-y-5 text-sm">
            <div><p className="font-semibold text-stone-900">Email</p><a className="mt-1 inline-block text-stone-600 hover:text-rose-500" href="mailto:hello@fangruik.com">hello@fangruik.com</a></div>
            <div><p className="font-semibold text-stone-900">Based in</p><p className="mt-1 text-stone-600">India</p></div>
          </div>
        </section>
        <section className="rounded-3xl bg-stone-100 p-6 sm:p-10">
          {submitted ? (
            <div className="flex min-h-80 flex-col items-center justify-center text-center"><p className="text-4xl text-rose-500">♡</p><h2 className="mt-4 text-2xl font-bold">Message received!</h2><p className="mt-2 max-w-sm text-stone-600">Thanks for reaching out. We’ll be in touch soon.</p><button onClick={() => setSubmitted(false)} className="mt-7 text-sm font-semibold underline underline-offset-4">Send another message</button></div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div><label htmlFor="name" className="text-sm font-semibold">Name</label><input id="name" required className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-rose-400" placeholder="Your name" /></div>
              <div><label htmlFor="email" className="text-sm font-semibold">Email</label><input id="email" type="email" required className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-rose-400" placeholder="you@example.com" /></div>
              <div><label htmlFor="message" className="text-sm font-semibold">Message</label><textarea id="message" required rows={5} className="mt-2 w-full resize-none rounded-xl border border-stone-200 bg-white px-4 py-3 outline-none transition focus:border-rose-400" placeholder="How can we help?" /></div>
              <button className="rounded-full bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-rose-500">Send message</button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}

export default Contact;
