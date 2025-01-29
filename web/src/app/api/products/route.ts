import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { ProductType } from "@prisma/client";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const category = url.searchParams.get("category");
    const whereCondition = category
      ? { productType: category.toUpperCase() as "PAPER" | "BOARD" } // Ensure it's cast to the enum type
      : {}; // No filtering if no category is provided

    const allProducts = await prisma.product.findMany({
      where: whereCondition,
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
