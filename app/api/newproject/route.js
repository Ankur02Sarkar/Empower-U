import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Project from "@/lib/models/project";
export async function POST(req) {
  try {
    const { name, description, price, imgLink,gitLink } = await req.json();
    console.log("details : ", name, description, price, imgLink,gitLink);
    await connectMongoDB();
    await Project.create({
      name,
      description,
      totalFunding: price,
      thumbnailLink: imgLink,
      gitLink
    });
    return NextResponse.json({ message: "Project Added" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
