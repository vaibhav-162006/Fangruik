import { Link, NavLink } from "react-router-dom";
import { BrandLogo } from "./BrandLogo";

const links = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function NavBar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-stone-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <BrandLogo className="text-lg" />

        <div className="hidden items-center gap-7 text-sm font-medium text-stone-600 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"}
              className={({ isActive }) => isActive ? "text-stone-950" : "transition hover:text-stone-950"}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link to="/products" className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-500">
          Shop now
        </Link>
      </div>
    </nav>
  );
}
