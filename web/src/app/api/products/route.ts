import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const allProducts = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!allProducts.length) {
      return NextResponse.json(
        { message: "No products found" },
        { status: 404 },
      );
    }
    return NextResponse.json(
      {
        products: allProducts,
        count: allProducts.length,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "not able to fetch products" },
      { status: 500 },
    );
  }
}
