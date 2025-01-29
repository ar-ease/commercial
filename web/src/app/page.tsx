"use client";
import { useAppContext } from "@/context";
import Tagline from "@/components/tagline";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  const { state, name, surname } = useAppContext();

  return (
    <div className="">
      {" "}
      <Tagline />
      <div className="flex justify-center pt-32">
        <Link href="/product-option">
          <Button
            size="lg"
            className="relative bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]"
          >
            Browse products
          </Button>
        </Link>
        {state.hello}

        {name}
        {surname}
      </div>
    </div>
  );
}
