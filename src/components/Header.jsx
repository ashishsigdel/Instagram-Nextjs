import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="p-3 sticky border-b top-0 shadow-md">
      <div className="flex gap-2 justify-between items-center">
        <Link href="/">
          <div className="flex gap-2 items-center">
            <img
              src="/800px-Instagram_logo_2016.webp"
              alt=""
              className="h-8 inline-block sm:hidden"
            />
            <img
              src="/Instagram_logo_black.webp"
              alt=""
              className="ml-16 h-8 hidden sm:inline-block"
            />
          </div>
        </Link>
        <div>
          <form>
            <input
              type="text"
              name=""
              id="search"
              placeholder="Search..."
              className="p-2 border rounded-md"
            />
          </form>
        </div>
        <div>
          <button className="py-2 px-5 rounded-md bg-blue-500 text-white hover:opacity-95">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
