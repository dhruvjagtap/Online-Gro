"use client";
import SearchBar from "@/components/ui/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/heroVideo3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-white text-center px-4 sm:px-8 md:px-16 lg:px-24 max-w-4xl mx-auto">
            <div className="flex px-4 mt-2 mb-2 justify-center align-middle md:hidden">
              <SearchBar />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Glow Naturally, Live Clean
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              Beauty & Household Essentials, Delivered
            </p>
            <button
              onClick={() => {
                document
                  .querySelector("#products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-6 px-6 py-3 bg-white text-black rounded hover:bg-[#5a189a] hover:text-white"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <section
        id="products"
        className="min-h-screen bg-white text-black px-4 sm:px-8 py-20"
      >
        <h2 className="text-3xl font-semibold text-center mb-10">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { title: "Skincare", img: "/images/skincare.webp" },
            { title: "Cleaning", img: "/images/cleaning.webp" },
            { title: "Haircare", img: "/images/haircare.webp" },
            { title: "Kitchen", img: "/images/kitchen.jpeg" },
          ].map((category) => (
            <div
              key={category.title}
              className="bg-gray-100 hover:shadow-lg rounded-lg overflow-hidden cursor-pointer transition"
            >
              <Image
                src={category.img}
                alt={category.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center font-medium text-lg">
                {category.title}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
