import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Project from "@/lib/models/project";
export async function GET() {
  try {
    await connectMongoDB();
    console.log("Connected to MongoDB.");

    const allProjects = await Project.find();

    return NextResponse.json({ allProjects }, { status: 201 });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ message: error.toString() }, { status: 500 });
  }
}
