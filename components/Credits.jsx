import React from "react";
import { PinContainer } from "./ui/3d-pin";

const redirectToSite =(href) => {
  console.log(href);
  window.open(href, '_blank');
};

const ChildComponent = ({ name, description, imgUrl, href }) => {
  return (
    <div className="relative z-50">
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          {name}
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500 ">{description} </span>
        </div>

{/* <div className='flex flex-row items-center gap-12'>
                    <button onClick={() => handleButtonClick("https://my-first-workers-ai.geniusabhisheksingh2000.workers.dev/")} className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>ASK AI</button>
                    
                </div> */}
        
        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
        <img src={imgUrl} />

        </div>
      </div>
    </div>
  );
};

const Credits = () => {
  const data = [
    {
      title: "Ankur Sarkar",
      href: "https://github.com/mozilla-mobile/firefox-ios",
      name: "Ankur Sarkar",
      description: "Full Stack Web Developer",
      imgUrl: "https://res.cloudinary.com/ankur02sarkar/image/upload/v1709941051/Ankur_fzogyv.png",
    },
    {
      title: "Vimal Anand",
      href: "https://www.linkedin.com/in/vimal-anand-9917a1212",
      name: "Vimal Anand",
      description: "Full Stack Web Developer",
      imgUrl: "https://res.cloudinary.com/ankur02sarkar/image/upload/v1711217520/IMG-20240323-WA0058-h-aWe-B_M-transformed_dzde7y.png",
    },
    {
      title: "Ujjwal Kumar",
      href: "https://www.linkedin.com/in/ujjwal-kumar-6538a8243",
      name: "Ujjwal Kumar",
      description: "Content Writer",
      imgUrl: "https://res.cloudinary.com/ankur02sarkar/image/upload/v1711217519/IMG-20240323-WA0055-ie84Pdj5s-transformed_aptkr7.png",
    },
    {
      title: "Zia Tasneem",
      href: "https://www.linkedin.com/in/zia-tasneem-a05ba8212",
      name: "Zia Tasneem",
      description: "Content Writer",
      imgUrl: "https://res.cloudinary.com/ankur02sarkar/image/upload/v1711217524/IMG-20240323-WA0057-AmH1q0M_3-transformed_x3pebf.png",
    },
    {
      title: "Raj Shaw",
      href: "https://www.linkedin.com/in/raj-shaw-𝕏-67890224a",
      name: "Raj Shaw",
      description: "Content Writer",
      imgUrl: "https://res.cloudinary.com/ankur02sarkar/image/upload/v1711217518/IMG-20240323-WA0065-szG9cV6ys-transformed_rn2gzr.png",
    },
    {
      title: "Sachin Kumar Dhuriya",
      href: "https://www.linkedin.com/in/sachin-dhuriya-b2a171213",
      name: "Sachin Kumar Dhuriya",
      description: "Content Writer",
      imgUrl: "https://res.cloudinary.com/ankur02sarkar/image/upload/v1711217521/IMG-20240323-WA0062-1Z5e2y1jz-transformed_z051se.png",
    },
  ];

  return (
    <div className="flex flex-col gap-10 my-12">
      <div className="flex flex-row">
        {data.slice(0, 3).map((item, index) => (
          <PinContainer
            key={index}
            title={item.title}
            href={item.href}
          >
            <ChildComponent
              name={item.name}
              description={item.description}
              imgUrl={item.imgUrl}
            />
          </PinContainer>
        ))}
      </div>
      <div className="flex flex-row">
        {data.slice(3).map((item, index) => (
          <PinContainer
            key={index}
            title={item.title}
            href={item.href}
          >
            <ChildComponent
  name={item.name}
  description={item.description}
  imgUrl={item.imgUrl}
  href={item.href} // Pass href prop here
/>

          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default Credits;
