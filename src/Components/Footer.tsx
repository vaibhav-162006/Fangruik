import { Link } from "react-router-dom";
import { BrandLogo } from "./BrandLogo";

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <BrandLogo className="text-xl" />

            <p className="mt-4 max-w-xs text-sm leading-6 text-stone-500">
              One Store. Endless Possiblities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-stone-500">
              <Link
                to="/"
                className="hover:text-black"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="hover:text-black"
              >
                Products
              </Link>
            </div>
          </div>

          {/* Customer */}
          <div>
            <h3 className="font-semibold">
              Customer
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-stone-500">
              <Link
                to="/about"
                className="hover:text-black"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="hover:text-black"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">
              Contact
            </h3>

            <div className="mt-4 text-sm leading-6 text-stone-500">
              <p>Email: hello@fangruik.com</p>
              <p>India</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-stone-200 pt-6 text-center text-sm text-stone-500">
          © 2026 Fangruik. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
