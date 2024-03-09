import React from "react";
import { PinContainer } from "./ui/3d-pin";

const ChildComponent = ({ name, description, imgUrl }) => {
  return (
    <div className="relative z-50">
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          {name}
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500 ">{description} </span>
        </div>
        <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
          <img src={imgUrl} />
        </div>
      </div>
    </div>
  );
};

const Credits = () => {
  return (
    <div className="flex flex-col gap-10 my-12">
      <div className="flex flex-row">
        <PinContainer
          title={"Ankur Sarkar"}
          href={"https://ankursarkar.tech/"}
          key={"key1"}
        >
          <ChildComponent
            name={"Ankur Sarkar"}
            description={"Sabka Papa"}
            imgUrl={
              "https://res.cloudinary.com/ankur02sarkar/image/upload/v1709941051/Ankur_fzogyv.png"
            }
          />
        </PinContainer>

        <PinContainer
          title={"Vimal Sarkar"}
          href={"https://ankursarkar.tech/"}
          key={"key1"}
        >
          <ChildComponent
            name={"Vimal Sarkar"}
            description={"Ankur ka Beti"}
            imgUrl={
              "https://res.cloudinary.com/ankur02sarkar/image/upload/v1709941051/Ankur_fzogyv.png"
            }
          />
        </PinContainer>

        <PinContainer
          title={"Ujjwal Sarkar"}
          href={"https://ankursarkar.tech/"}
          key={"key1"}
        >
          <ChildComponent
            name={"Ujjwal Sarkar"}
            description={"Ankur ka Beti"}
            imgUrl={
              "https://res.cloudinary.com/ankur02sarkar/image/upload/v1709941051/Ankur_fzogyv.png"
            }
          />
        </PinContainer>
      </div>
      <div className="flex flex-row">
        <PinContainer
          title={"Zia Tasneem"}
          href={"https://ankursarkar.tech/"}
          key={"key1"}
        >
          <ChildComponent
            name={"Zia Tasneem"}
            description={"Parhaku Larki"}
            imgUrl={
              "https://res.cloudinary.com/ankur02sarkar/image/upload/v1709941051/Ankur_fzogyv.png"
            }
          />
        </PinContainer>

        <PinContainer
          title={"Raj Sarkar"}
          href={"https://ankursarkar.tech/"}
          key={"key1"}
        >
          <ChildComponent
            name={"Raj Sarkar"}
            description={"Ankur ka Beti"}
            imgUrl={
              "https://res.cloudinary.com/ankur02sarkar/image/upload/v1709941051/Ankur_fzogyv.png"
            }
          />
        </PinContainer>

        <PinContainer
          title={"Sachin Kumar Sarkar"}
          href={"https://ankursarkar.tech/"}
          key={"key1"}
        >
          <ChildComponent
            name={"Sachin Kumar Sarkar"}
            description={"Ankur ka Beti"}
            imgUrl={
              "https://res.cloudinary.com/ankur02sarkar/image/upload/v1709941051/Ankur_fzogyv.png"
            }
          />
        </PinContainer>
      </div>
    </div>
  );
};

export default Credits;
