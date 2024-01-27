import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-10 w-full rounded-lg bg-white shadow dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024
          <Link href="/" className="hover:underline">
            Experimental
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
          <li>
            <Link href="/about" className="me-4 hover:underline md:me-6">
              About
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="me-4 hover:underline md:me-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
