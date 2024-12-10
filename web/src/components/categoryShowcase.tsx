// components/CategoryShowcase.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Dummy Images Array
const images = [
  "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80", // Kraft paper rolls
  "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80", // Textured paper
  "https://images.unsplash.com/photo-1603484477859-abe6a73f9366?q=80", // Premium paper
];

// Dummy Category Data
const paperCategoryData = {
  name: "Premium Paper Collection",
  description: `Discover our extensive range of premium papers crafted for every need. 
                performance and environmental consciousness.`,
  features: ["Acid-free composition", "Sustainable sourcing"],
  subcategories: [
    {
      name: "Writing Paper",
      description: "Premium stationery for professional correspondence",
    },
    {
      name: "Art Paper",
      description: "Specially textured for various artistic mediums",
    },
  ],
};

export function CategoryShowcase() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="max-w-md mx-auto overflow-hidden bg-white">
      <div className="relative h-[250px] overflow-hidden">
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`Paper showcase ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="p-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          {paperCategoryData.name}
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed">
          {paperCategoryData.description}
        </p>

        <div className="grid grid-cols-2 gap-4 my-6">
          {paperCategoryData.subcategories.map((subcat) => (
            <div key={subcat.name} className="p-3 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">{subcat.name}</h3>
              <p className="text-sm text-gray-600">{subcat.description}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-center">
          <Link href="/category/products?category=paper">
            <Button
              size="lg"
              className="relative bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] 
                         transition-all duration-300 
                         hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]"
            >
              View Paper Products
            </Button>
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            Key Features:
          </h4>
          <ul className="grid grid-cols-2 gap-2">
            {paperCategoryData.features.map((feature) => (
              <li
                key={feature}
                className="text-sm text-gray-600 flex items-center"
              >
                <span className="mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}

export default function CategoryPage() {
  return (
    <div className="container mx-auto p-6">
      <CategoryShowcase />
    </div>
  );
}
