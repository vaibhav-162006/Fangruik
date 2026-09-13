import { Link } from "react-router-dom";

type BrandLogoProps = { className?: string };

export function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Fangruik home">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-rose-500 text-lg font-semibold leading-none text-white shadow-sm" aria-hidden="true">✦</span>
      <span className="font-bold tracking-[0.08em] text-stone-900">FANG<span className="text-rose-500">RUIK</span></span>
    </Link>
  );
}
