import React, { useState } from "react";
import Skyline from "../assets/LD-black_3.gif";
import Sidebar from "./Sidebar";
import Search from "./Search";
import Dropdown from "./Dropdown";
import { ReactComponent as ArrowDownIcon } from "../assets/arrow_down.svg";

const TestNavData = [
  {
    name: "Platform",
    current: false,
    children: [],
    value: 4,
    disabled: false,
  },
  {
    name: "Cryptovoxels",
    current: false,
    children: [],
    value: 10,
    disabled: false,
  },
  {
    name: "Island",
    current: false,
    children: [
      { name: "Origin City", href: "#", current: false },
      { name: "Satoshi", href: "#", current: false },
      { name: "Angomeda", href: "#", current: false },
      { name: "Scarcity", href: "#", current: false },
    ],
    value: 8,
    disabled: false,
  },
  {
    name: "Decentraland",
    current: false,
    children: [],
    value: 3,
    disabled: true,
  },
  {
    name: "The Sandbox",
    current: false,
    children: [],
    value: 20,
    disabled: true,
  },
];

const dropdownlist = [
  {
    name: "Price: Low to High",
  },
  {
    name: "Price: High to Low",
  },
  {
    name: "Most Traffic",
  },
];

function RadicalMarketUpdate() {
  const [data, setData] = useState(TestNavData);
  const [query, setQuery] = useState("");
  return (
    <div
      className="w-full flex flex-col text-gray-95"
      onDragStart={(e) => e.preventDefault()}
    >
      <div className="w-full flex flex-col pt-20 px-10 bg-gray-490">
        <div className="w-full flex flex-col-reverse md:flex-row max-w-7xl mx-auto my-5 xs:my-10 md:my-20 justify-center">
          <div className="flex flex-col w-full md:w-2/3 mx-auto md:ml-10 md:mr-12 mb-auto text-left">
            <div className="font-commuter text-3xl mx-auto md:text-4xl md:mx-0 text-center md:text-left font-semibold lg:text-5xl">
              THE <br /> RADICAL MARKET
            </div>
            <div className="mx-auto md:mx-0 text-center md:text-left text-xl sm:text-xl lg:text-lg font-bold">
              Bid metaverse land use right for a lower price anytime anywhere.
            </div>
          </div>
          <div className="w-7/10 md:w-2/3 md:my-auto mx-auto mb-8">
            <img className="w-full" src={Skyline} alt="" />
          </div>
        </div>
      </div>
      <div className="flex px-10 py-16 justify-around">
        <div className="w-56">
          <Sidebar data={data} setData={setData} />
        </div>
        <div className="w-2/3 flex flex-row justify-between">
          <div className="w-2/3 ">
            <Search query={query} onSearch={setQuery} />
          </div>
          <div className="w-2/9">
            <Dropdown
              menus={dropdownlist}
              children={
                <div
                  className=" font-commuter text-xl inline-flex justify-center w-full px-4 py-2 bg-transparent font-normal items-center hover:bg-white rounded-md hover:text-gray-500 cursor-pointer text-gray-100"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  Recently Listed
                  <ArrowDownIcon className="ml-4" />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadicalMarketUpdate;
