import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";

let items = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/92242855-3ef3-4e49-a741-98f7c13952a1/dfwu48h-ea5c2a4a-4c6c-40f3-af03-f9ae5c3e5853.png/v1/fill/w_1280,h_1721,q_80,strp/korean_girl_by_tunha_dfwu48h-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcyMSIsInBhdGgiOiJcL2ZcLzkyMjQyODU1LTNlZjMtNGU0OS1hNzQxLTk4ZjdjMTM5NTJhMVwvZGZ3dTQ4aC1lYTVjMmE0YS00YzZjLTQwZjMtYWYwMy1mOWFlNWMzZTU4NTMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0y-JzO5o0VHnqSvKPvDFUJlaNvMa73X9e74clql7YYI",
  },
  {
    id: 2,
    name: "Jane Doe",
    designation: "Product Manager",
    image:
      "https://letdream.ap-south-1.linodeobjects.com/opendream.ori/8775064fc904199504_0.jpg",
  },
  {
    id: 3,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/92242855-3ef3-4e49-a741-98f7c13952a1/dfwu48h-ea5c2a4a-4c6c-40f3-af03-f9ae5c3e5853.png/v1/fill/w_1280,h_1721,q_80,strp/korean_girl_by_tunha_dfwu48h-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcyMSIsInBhdGgiOiJcL2ZcLzkyMjQyODU1LTNlZjMtNGU0OS1hNzQxLTk4ZjdjMTM5NTJhMVwvZGZ3dTQ4aC1lYTVjMmE0YS00YzZjLTQwZjMtYWYwMy1mOWFlNWMzZTU4NTMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0y-JzO5o0VHnqSvKPvDFUJlaNvMa73X9e74clql7YYI",
  },
  {
    id: 4,
    name: "Jane Doe",
    designation: "Product Manager",
    image:
      "https://letdream.ap-south-1.linodeobjects.com/opendream.ori/8775064fc904199504_0.jpg",
  },
  {
    id: 5,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/92242855-3ef3-4e49-a741-98f7c13952a1/dfwu48h-ea5c2a4a-4c6c-40f3-af03-f9ae5c3e5853.png/v1/fill/w_1280,h_1721,q_80,strp/korean_girl_by_tunha_dfwu48h-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcyMSIsInBhdGgiOiJcL2ZcLzkyMjQyODU1LTNlZjMtNGU0OS1hNzQxLTk4ZjdjMTM5NTJhMVwvZGZ3dTQ4aC1lYTVjMmE0YS00YzZjLTQwZjMtYWYwMy1mOWFlNWMzZTU4NTMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0y-JzO5o0VHnqSvKPvDFUJlaNvMa73X9e74clql7YYI",
  },
  {
    id: 6,
    name: "Jane Doe",
    designation: "Product Manager",
    image:
      "https://letdream.ap-south-1.linodeobjects.com/opendream.ori/8775064fc904199504_0.jpg",
  },
];

const Testimonials = () => {
  return (
    <div>
      <h1 className="text-center text-6xl">Testimonials</h1>
      <AnimatedTooltip items={items} />
    </div>
  );
};

export default Testimonials;
