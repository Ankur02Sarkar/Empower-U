"use client";
import SidebarComp from "@/components/Sidebar";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const projects = [
  {
    title: "Lorem",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices",
    link: "https://example.com",
    img: "https://res.cloudinary.com/ankur02sarkar/image/upload/v1695997373/solar_vccnm5.png",
  },
  {
    title: "Lorem",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices",
    link: "https://example.com",
    img: "https://res.cloudinary.com/ankur02sarkar/image/upload/v1695997373/solar_vccnm5.png",
  },
];

const page = () => {
  const [allProjects, setAllProjects] = useState();
  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const res = await fetch("api/allprojects");
        const projects = await res.json();
        if (projects) {
          const newProjects = projects?.allProjects?.map((project) => ({
            title: project.name,
            description: project.description,
            link: `/view/${project._id}`,
            img: project.thumbnailLink,
          }));
          setAllProjects(newProjects);
          toast.success("Fetched All Projects");
        } else {
          toast.error("Could not Fetch Projects");
        }
      } catch (error) {
        toast.error("Error Occured");
      }
    };
    fetchAllProjects();
  }, []);

  return (
    <div className="flex flex-row">
      {allProjects && <HoverEffect items={allProjects} />}
    </div>
  );
};

export default page;
