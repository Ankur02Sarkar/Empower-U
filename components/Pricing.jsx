import React from "react";
import PricingCard from "./PricingCard";
import pricingCards from "./PricingCards";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="h-fit min-h-screen w-full flex flex-col items-center justify-center gap-8 p-8"
    >
      <h4 className="text-4xl md:text-5xl font-bold">Pricing</h4>
      <div className="grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 items-center h-fit w-full max-w-3xl gap-8">
        {pricingCards.map((pricingCard) => {
          return (
            <PricingCard
              oneliner={pricingCard.oneliner}
              title={pricingCard.title}
              price={pricingCard.price}
              benefits={pricingCard.benefits}
              key={pricingCard.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
