import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the required fields
    if (!body.name || !body.productType) {
      return NextResponse.json(
        { error: "Name and productType are required" },
        { status: 400 },
      );
    }

    // Create the product
    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        image: body.image || "unknown",
        productType: body.productType,
        available: body.available || "INSTOCK",
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Error creating product" },
      { status: 500 },
    );
  }
}
