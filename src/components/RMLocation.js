import React from "react";
import Card from "../assets/card.png";
import Property from "../assets/property.svg";

function RMLocation(props) {

  const { parcel } = props;

  return (
    <div className="w-full bg-black-20 rounded-2xl font-commuter border border-gray-35">
      <div className="h-64 overflow-hidden rounded-t-2xl">
        <img src={parcel.image ? parcel.image : Card} alt="parcel" className="mx-auto w-full -m-32" />
      </div>
      <div className="flex items-center xs:justify-start justify-center h-14 xs:px-9 px-0 flex-wrap bg-gray-25">
        <img src={Property} alt="property" className=" mr-3" />
        <p className="lg:text-xl text-sm text-white font-semibold text-left">
          Description
        </p>
      </div>
      <div className="flex px-9 py-6 justify-center items-center">
        <p className=" font-normal lg:text-lg text-xs">
          156m² parcel near Neutron in Neutron, 726m from the origin, with a 7m
          build height and floor is at 0m elevation
        </p>
      </div>
      <div className="flex items-center xs:justify-start justify-center h-14 xs:px-9 px-0 flex-wrap bg-gray-25">
        <div className="flex ">
          <img src={Property} alt="property" className=" mr-3" />
          <p className="lg:text-xl text-sm text-white font-semibold text-left">
            Property
          </p>
        </div>
      </div>
      <div className="flex px-9 py-6 justify-start items-center flex-wrap">
        <div className="bg-blue-20 w-36 rounded text-sm py-2 mt-2 mr-8 text-center">
          <p className="text-blue-10 mb-1">ISLAND</p>
          <p className="text-white ">Origin City</p>
        </div>
        <div className="bg-blue-20 w-36 rounded text-sm py-2 mr-8 mt-2 text-center">
          <p className="text-blue-10 mb-1">SUBURB</p>
          <p className="text-white ">Neutron</p>
        </div>
      </div>
    </div>
  );
}

export default RMLocation;
