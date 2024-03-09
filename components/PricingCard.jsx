import { CheckCheck } from "lucide-react";
import React from "react";

const PricingCard = ({ title, price, benefits, oneliner }) => {
  return (
    <div className="h-fit w-full  flex flex-col p-8 gap-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
      <div className="flex flex-col gap-2">
        <div>
          <h6 className="text-2xl">{title}</h6>
          <p className="text-sm text-zinc-500">{oneliner}</p>
        </div>
        <p className="text-4xl font-bold">
          ${price}
          <span className="text-sm font-normal text-zinc-500">/ Month</span>
        </p>
      </div>
      <button className="bg-fuchsia-700 rounded p-2 text-sm transition-colors hover:bg-fuchsia-800">
        Try 7 days free!
      </button>
      <div className="flex flex-col w-full gap-4">
        {benefits.map((benefit, i) => {
          return (
            <p
              key={i}
              className="text-sm text-zinc-500 flex items-center gap-2"
            >
              <span>
                <CheckCheck />
              </span>
              {benefit}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCard;
