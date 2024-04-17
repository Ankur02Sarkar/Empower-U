"use client";
// import SidebarComp from "@/components/Sidebar";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const ProjectsPage = () => {
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

export default ProjectsPage;
