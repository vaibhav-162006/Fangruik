import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">

      <div className="text-center">

        <p className="text-7xl font-bold">
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold">
          Page Not Found
        </h1>

        <p className="mt-3 text-gray-500">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
        >
          Go Home
        </Link>

      </div>

    </main>
  );
}

export default NotFound;
