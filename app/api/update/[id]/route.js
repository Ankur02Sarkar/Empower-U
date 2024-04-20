import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Project from "@/lib/models/project";
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { price } = await request.json();
    const newBody = {
      totalFunding: price,
    };
    console.log("newBody : ", newBody);
    await connectMongoDB();
    console.log("Connected to MongoDB.");
    const updatedProject = await Project.findByIdAndUpdate(id, newBody);
    console.log("updatedProject : ", updatedProject);
    return NextResponse.json({ message: "Project Updated" }, { status: 201 });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ message: error.toString() }, { status: 500 });
  }
}
