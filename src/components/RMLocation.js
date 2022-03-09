import React from "react";
import Card from "../assets/card.png";
import Property from "../assets/property.svg";

function RMLocation() {
  return (
    <div className="w-full bg-black-20 rounded-2xl font-commuter border border-gray-35">
      <div className="px-9">
        <img src={Card} alt="parcel" className="mx-auto w-full" />
      </div>
      <div className="flex items-center justify-start h-14 px-9 bg-gray-25">
        <img src={Property} alt="property" className=" mr-3" />
        <p className="text-xl text-white font-semibold text-left">
          Description
        </p>
      </div>
      <div className="flex px-9 py-6 justify-center items-center">
        <p className=" font-normal text-lg">
          156m² parcel near Neutron in Neutron, 726m from the origin, with a 7m
          build height and floor is at 0m elevation
        </p>
      </div>
      <div className="flex items-center justify-start h-14 px-9 bg-gray-25">
        <div className="flex ">
          <img src={Property} alt="property" className=" mr-3" />
          <p className="text-xl text-white font-semibold text-left">Property</p>
        </div>
      </div>
      <div className="flex px-9 py-6 justify-start items-center space-x-8">
        <div className="bg-blue-20 w-36 rounded text-sm py-2 text-center">
          <p className="text-blue-10 mb-1">ISLAND</p>
          <p className="text-white ">Origin City</p>
        </div>
        <div className="bg-blue-20 w-36 rounded text-sm py-2 text-center">
          <p className="text-blue-10 mb-1">SUBURB</p>
          <p className="text-white ">Neutron</p>
        </div>
      </div>
    </div>
  );
}

export default RMLocation;
