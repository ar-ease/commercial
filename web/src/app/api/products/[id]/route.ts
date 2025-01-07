// src/app/api/products/[id]/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Get single product
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log("hey");
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(params.id) },
    });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching product" },
      { status: 500 }
    );
  }
}

// Update product
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const product = await prisma.product.update({
      where: { id: parseInt(params.id) },
      data: body,
    });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating product" },
      { status: 500 }
    );
  }
}

// Delete product
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.product.delete({
      where: { id: parseInt(params.id) },
    });
    return NextResponse.json({ message: "Product deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting product" },
      { status: 500 }
    );
  }
}
