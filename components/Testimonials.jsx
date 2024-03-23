import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

let items = [
  {
    id: 1,
    name: "Ankur Sarkar",
    designation: "Team Member",
    image: "https://res.cloudinary.com/ankur02sarkar/image/upload/v1709941051/Ankur_fzogyv.png"
  },
  {
    id: 2,
    name: "Vimal Anand",
    designation: "Team Member",
    image:
      "https://res.cloudinary.com/ankur02sarkar/image/upload/v1711217520/IMG-20240323-WA0058-h-aWe-B_M-transformed_dzde7y.png"
  },
  {
    id: 3,
    name: "Ujjwal Kumar",
    designation: "Team Member",
    image: "https://res.cloudinary.com/ankur02sarkar/image/upload/v1711217519/IMG-20240323-WA0055-ie84Pdj5s-transformed_aptkr7.png"
  },
  {
    id: 4,
    name: "Zia Tasneem",
    designation: "Team Member",
    image:
      "https://res.cloudinary.com/ankur02sarkar/image/upload/v1711217524/IMG-20240323-WA0057-AmH1q0M_3-transformed_x3pebf.png"
  },
  {
    id: 5,
    name: "Raj Shaw",
    designation: "Team Member",
    image:
      "https://res.cloudinary.com/ankur02sarkar/image/upload/v1711217518/IMG-20240323-WA0065-szG9cV6ys-transformed_rn2gzr.png"
  },
  {
    id: 6,
    name: "Sachin Kumar Dhuriya",
    designation: "Team Member",
    image:
      "https://res.cloudinary.com/ankur02sarkar/image/upload/v1711217521/IMG-20240323-WA0062-1Z5e2y1jz-transformed_z051se.png"
  },
];

const Testimonials = () => {
  return (
    <div className="mt-8">
      <AnimatedTooltip items={items} />
    </div>
  );
};

export default Testimonials;
