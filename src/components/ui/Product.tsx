// components/ProductCard.tsx
import Image from "next/image";

interface ProductProps {
  productId: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  stock: number;
}

export default function ProductCard({
  name,
  price,
  description,
  images,
  stock,
}: ProductProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 max-w-sm mx-auto">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md">
        <Image
          src={images[0]}
          alt={name}
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
      <div className="mt-2">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <p className="text-lg font-bold mt-1">₹{price}</p>
        <p className="text-sm text-green-600 mt-1">
          {stock > 0 ? `In Stock (${stock})` : "Out of Stock"}
        </p>
      </div>
    </div>
  );
}
