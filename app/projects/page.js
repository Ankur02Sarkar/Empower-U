import SidebarComp from "@/components/Sidebar";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";

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
  {
    title: "Lorem",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices",
    link: "https://example.com",
    img: "https://res.cloudinary.com/ankur02sarkar/image/upload/v1695997373/solar_vccnm5.png",
  },
];

const page = () => {
  return (
    <div className="flex flex-row">
      <HoverEffect items={projects} />
    </div>
  );
};

export default page;
