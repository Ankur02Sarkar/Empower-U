import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Project from "@/lib/models/project";
export async function POST(req) {
  try {
    const { name, description, price, imgLink } = await req.json();
    await connectMongoDB();
    await Project.create({
      name,
      description,
      totalFunding: price,
      thumbnailLink: imgLink,
    });
    return NextResponse.json({ message: "Project Added" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
