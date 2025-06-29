"use client";
import { ShoppingCart, Search } from "lucide-react";
import Link from "next/link";
// import SearchBar from "../ui/SearchBar";

function SearchBar() {
  return (
    <div className="w-1/2 flex items-center gap-2 border-2 border-[#5a189a] rounded-lg px-2 py-1 bg-[#f8f9fa]">
      <Search className="h-5 w-5 text-[#000000]" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full outline-none bg-transparent text-black"
      />
    </div>
  );
}

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#5a189a] px-4 py-3 shadow sticky top-0 z-50">
        {/* Desktop navbar */}
        <div className="hidden md:flex justify-evenly items-center">
          <Link href="/">
            <h1 className="text-2xl hover:text-blue-600 text-[#ffffff] italic font-semibold">
              OnlineGro
            </h1>
          </Link>

          <SearchBar />

          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/signin" className="hover:text-[#3a86ff] text-white">
                Sign In
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <ShoppingCart className="h-6 w-6 text-white hover:text-blue-600" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile navbar */}
        <div className="flex justify-between items-center md:hidden">
          <Link href="/">
            <h1 className="text-2xl hover:text-blue-600 text-[#ffffff] italic font-semibold">
              OnlineGro
            </h1>
          </Link>
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/signin" className="hover:text-[#6b5b95] text-white">
                Sign In
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <ShoppingCart className="h-6 w-6 text-white hover:text-blue-600" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Search Bar Below Navbar */}
      {/* <div className="flex px-4 mt-2 justify-center align-middle md:hidden">
        <SearchBar />
      </div> */}
    </>
  );
}
