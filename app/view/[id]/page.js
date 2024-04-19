"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";
const ProductPage = () => {
  const [currItem, setCurrItem] = useState()
    const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  });
  const params = useParams();
  const itemId = params.id;
  const [activeImg, setActiveImage] = useState(images.img1);

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const res = await fetch(`${window.location.origin}/api/allprojects`);
        const projectsObj = await res.json();
        const projects = projectsObj.allProjects;
        console.log("projects : ", projects);
        if (projects) {
          const foundItem = projects.find((item) => item._id === itemId);
          console.log("foundItem : ", foundItem);
          setCurrItem(foundItem)
          toast.success("Fetched All Projects");
        } else {
          toast.error("Could not Fetch Projects");
        }
      } catch (error) {
        toast.error("Error Occured");
      }
    };
    fetchAllProjects();
  }, [itemId]);

  const [amount, setAmount] = useState(1);

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={currItem?.thumbnailLink}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className=" text-violet-600 font-semibold">Technology</span>
          <h1 className="text-3xl font-bold">{currItem?.name}</h1>
        </div>
        <p className="text-gray-700">
          {currItem?.description}
        </p>
        <h6 className="text-2xl font-semibold">
          Target Fund to raise - $ {currItem?.totalFunding}
        </h6>
        <div className="flex flex-row items-center gap-12">
          <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full">
            Problem Statement
          </button>
          <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
