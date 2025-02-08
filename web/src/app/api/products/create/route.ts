import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    // Check if user is authenticated and is an admin
    if (!session?.user?.isAdmin) {
      return NextResponse.json(
        { error: "Unauthorized. Admin access required." },
        { status: 403 }
      );
    }

    console.log("hello there");
    const body = await request.json();
    console.log(body);

    // Validate the required fields
    if (!body.name || !body.productType) {
      return NextResponse.json(
        { error: "Name and productType are required" },
        { status: 400 }
      );
    }
    const validProductTypes = ["PAPER", "BOARD"];

    if (!validProductTypes.includes(body.productType)) {
      return NextResponse.json(
        { error: "Invalid productType. Must be one of PAPER or BOARD." },
        { status: 400 }
      );
    }

    // Create the product
    const product = await prisma.product.create({
      data: {
        name: body.name,
        image: body.image || "unknown",
        productType: body.productType,
        available: body.available || "INSTOCK",
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product. Please try again later." },
      { status: 500 }
    );
  }
}
