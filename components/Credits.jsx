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
    <div className="flex flex-col gap-10">
      <h1 className="text-center text-6xl">Credits</h1>
      <div className="flex flex-row">
        <PinContainer
          title={"Title"}
          children={
            <ChildComponent
              name={"Ankur Sarkar"}
              description={"Tumhara Papa"}
              imgUrl={
                "https://res.cloudinary.com/ankur02sarkar/image/upload/v1709941051/Ankur_fzogyv.png"
              }
            />
          }
          className={"class1"}
          containerClassName={"container1"}
          href={"https://ankursarkar.tech/"}
          key={"key1"}
        />

        <PinContainer
          title={"Title"}
          children={
            <ChildComponent
              name={"Ankur Sarkar"}
              description={"Tumhara Papa"}
              imgUrl={
                "https://res.cloudinary.com/ankur02sarkar/image/upload/v1709941051/Ankur_fzogyv.png"
              }
            />
          }
          className={"class1"}
          containerClassName={"container1"}
          href={"https://ankursarkar.tech/"}
          key={"key1"}
        />

        <PinContainer
          title={"Title"}
          children={
            <ChildComponent
              name={"Ankur Sarkar"}
              description={"Tumhara Papa"}
              imgUrl={
                "https://res.cloudinary.com/ankur02sarkar/image/upload/v1709941051/Ankur_fzogyv.png"
              }
            />
          }
          className={"class1"}
          containerClassName={"container1"}
          href={"https://ankursarkar.tech/"}
          key={"key1"}
        />
      </div>
      <div className="flex flex-row">
        <PinContainer
          title={"Title"}
          children={
            <ChildComponent
              name={"Ankur Sarkar"}
              description={"Tumhara Papa"}
              imgUrl={
                "https://res.cloudinary.com/ankur02sarkar/image/upload/v1709941051/Ankur_fzogyv.png"
              }
            />
          }
          className={"class1"}
          containerClassName={"container1"}
          href={"https://ankursarkar.tech/"}
          key={"key1"}
        />

        <PinContainer
          title={"Title"}
          children={
            <ChildComponent
              name={"Ankur Sarkar"}
              description={"Tumhara Papa"}
              imgUrl={
                "https://res.cloudinary.com/ankur02sarkar/image/upload/v1709941051/Ankur_fzogyv.png"
              }
            />
          }
          className={"class1"}
          containerClassName={"container1"}
          href={"https://ankursarkar.tech/"}
          key={"key1"}
        />

        <PinContainer
          title={"Title"}
          children={
            <ChildComponent
              name={"Ankur Sarkar"}
              description={"Tumhara Papa"}
              imgUrl={
                "https://res.cloudinary.com/ankur02sarkar/image/upload/v1709941051/Ankur_fzogyv.png"
              }
            />
          }
          className={"class1"}
          containerClassName={"container1"}
          href={"https://ankursarkar.tech/"}
          key={"key1"}
        />
      </div>
    </div>
  );
};

export default Credits;
