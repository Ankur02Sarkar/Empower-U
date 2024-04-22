"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";
const ProductPage = () => {
  const [currItem, setCurrItem] = useState();
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
        if (projects) {
          const foundItem = projects.find((item) => item._id === itemId);
          console.log("foundItem : ", foundItem);
          setCurrItem(foundItem);
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

  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [updatedItem, setUpdatedItem] = useState();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    const options = {
      key: "rzp_test_wn2QHL9zuNGbGx", // Enter the Key ID generated from the Dashboard
      amount: amount * 100,
      currency: "INR",
      name: "EmpowerU",
      description: "Thankyou for your Contribution",
      image:
        "https://pbs.twimg.com/profile_images/1097556482353025025/9qBkSBQW_400x400.png",
      email: email,
      handler: function (response) {
        const newItem = currItem;
        currItem.totalFunding = currItem.totalFunding - amount;
        newItem.totalFunding = newItem.totalFunding - amount;
        setUpdatedItem(newItem);
      },
      prefill: {
        email: email,
        contact: "9876543210",
      },
      notes: {
        address: "Test Address",
      },
      theme: {
        color: "#3399cc",
      },
    };
    console.log("options : ", options);
    const rzp = new window.Razorpay(options);
    rzp.open();
    setEmail("");
    setAmount("");
  };

  useEffect(() => {
    const updateProject = async (id) => {
      if (id) {
        console.log("updateProject id : ", id);
        try {
          const res = await fetch(
            `${window.location.origin}/api/update/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                price: updatedItem.totalFunding,
              }),
            }
          );
          console.log("res : ", res);
          if (res.ok) {
            toast.success("Project Updated");
          } else {
            toast.error("Could not Update Project");
          }
        } catch (error) {
          toast.error("Error Occured");
        }
      }
    };
    updateProject(currItem?._id);
  }, [updatedItem]);

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center bg-gray-900 text-white">
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
          <span className="text-violet-600 font-semibold">Technology</span>
          <h1 className="text-3xl font-bold">{currItem?.name}</h1>
        </div>
        <p className="text-gray-300">{currItem?.description}</p>
        <h6 className="text-2xl font-semibold">
          Target Fund to raise - ₹ {currItem?.totalFunding}
        </h6>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-800 text-white p-3 rounded"
          />
          <input
            type="number"
            placeholder="Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-gray-800 text-white p-3 rounded"
          />
          <div className="flex flex-row items-center gap-12">
            <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full">
              <a href={`${currItem?.gitLink}`} target="_blank">
                Problem Statement
              </a>
            </button>
            <button
              onClick={handlePayment}
              className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full"
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
