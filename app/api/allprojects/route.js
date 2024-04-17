import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Project from "@/lib/models/project";
export async function GET() {
  try {
    console.log("Connecting to MongoDB...");
    await connectMongoDB();
    console.log("Connected to MongoDB.");

    const allProjects = await Project.find();
    console.log("Executed Query:", Project.find().getQuery()); // Log the Mongoose query
    console.log("Number of projects found:", allProjects.length);
    console.log("allProjects : ", allProjects);

    return NextResponse.json({ allProjects }, { status: 201 });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ message: error.toString() }, { status: 500 });
  }
}
