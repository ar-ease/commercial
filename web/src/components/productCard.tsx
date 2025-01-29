// components/ProductCard.tsx
import Image from "next/image";
import { Button } from "./ui/button";

interface ProductCardProps {
  name: string;
  image?: string;
  description?: string | null;
  productType: string;
  available: "INSTOCK" | "OUTOFSTOCK";
}

const ProductCard = ({
  name,
  image,
  productType,
  description,
  available,
}: ProductCardProps) => {
  return (
    <div className=" relative bg-black text-white rounded-lg shadow-lg overflow-hidden group">
      {/* Image */}
      <div className="relative h-40 w-full overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-800">
            <svg
              className="h-12 w-12 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-400">{productType}</p>
        <p className="mt-2 text-md">
          {available === "INSTOCK" ? (
            <span className="text-green-400">In Stock</span>
          ) : (
            <span className="text-red-400">Out of Stock</span>
          )}
        </p>
        {description && (
          <p className="mt-2 text-sm text-gray-300">{description}</p>
        )}
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
        <div className="text-center">
          <button className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
