import React from "react";
import FeatureCards from "../../components/cart/FeatureCards";
import {
  LiaGiftSolid,
  LiaMoneyBillWaveSolid,
  LiaShippingFastSolid,
} from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";

const FeaturesCard = () => {
  const data = [
    { title: "Free Shipping", icon: <LiaShippingFastSolid /> },
    { title: "Best Price Guarantee", icon: <LiaMoneyBillWaveSolid /> },
    { title: "Free Curbside Pickup", icon: <LiaGiftSolid /> },
    { title: "Support 24/7", icon: <FiPhoneCall /> },
  ];

  return (
    <>
      <div className="container pt-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {data.map((e) => (
            <FeatureCards key={e.title} title={e.title} icon={e.icon} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesCard;
