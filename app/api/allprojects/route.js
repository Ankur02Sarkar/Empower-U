import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Project from "@/lib/models/project";
export async function GET() {
  try {
    await connectMongoDB();
    const allProjects = await Project.find();
    return NextResponse.json({ allProjects }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
