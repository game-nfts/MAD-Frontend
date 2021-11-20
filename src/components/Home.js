import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cube from "./Cube";
import SlantButton from "./SlantButton";
import VerticalTabs from "./VerticalTabs";
import CubeImage from '../assets/cube-1.svg';
import LeaseHover from "./LeaseHover";
import AuctionHover from "./AuctionHover";

function Home() {
  let navigate = useNavigate(); // to push an endpoint, call `navigate("/path");`

  const [itemList, handleItemList] = useState(["Cobo Wallet Ads 2021", "Moledao Hackathon 2021", "and More..."]);
  const [activeItem, handleActiveItem] = useState(0);
  const [itemObj, handleItemObj] = useState({
    "Cobo Wallet Ads 2021": CubeImage,
    "Moledao Hackathon 2021": CubeImage,
    "and More...": CubeImage,
  });
  const [hover, handleHover] = useState('');

  return (
    <>
      <div className="flex-grow flex flex-col relative text-gray-80 pt-20">
        <div className="w-full flex-grow max-w-7xl mx-auto flex relative text-white">
          <div className="flex flex-col w-full mx-4 sm:mx-6 lg:mx-8">
            <div className="flex flex-col w-full my-8">
              <div className="text-4xl md:text-5xl font-extralight">METAVERSE <span className="text-green-50">A</span>DVERTISEMENT <span className="text-pink-50">D</span>AO</div>
              <div className="text-xl md:text-3xl font-extralight italic">Facilitate revenue-generating businesses in the metaverse</div>
            </div>
            <div className="flex flex-col xs:flex-row">
              <div className="mr-0 xs:mr-4 w-full xs:w-auto">
                <SlantButton onMouseEnter={() => handleHover('auction')} onMouseLeave={() => handleHover('')} onClick={() => {}} text="Auction" className="bg-gray-500 hover:bg-green-50h hover:border-gray-70 w-full sm:w-auto" />
              </div>
              <div className="ml-0 xs:ml-4 w-full xs:w-auto mt-4 xs:mt-0">
                <SlantButton onMouseEnter={() => handleHover('lease')} onMouseLeave={() => handleHover('')} onClick={() => {}} text="Lease My Estate" className="bg-gray-500 hover:bg-pink-80h hover:border-gray-70 w-full sm:w-auto" />
              </div>
            </div>
            <div className="mt-8">
              <div className={`bg-gray-500 duration-500 transition-opacity absolute ${hover === '' ? 'opacity-100 z-50' : 'opacity-0 z-10'}`}>
                <div className="flex flex-col-reverse md:flex-row w-full">
                  <Cube image={itemObj[itemList[activeItem]]} />
                  <div className="">
                    <VerticalTabs
                      itemList={itemList}
                      activeItem={activeItem}
                      handleActiveItem={handleActiveItem}
                    />
                  </div>
                </div>
              </div>
              <div className={`duration-500 transition-opacity absolute ${hover === 'auction' ? 'opacity-100 z-50' : 'opacity-0 z-10'}`}>
                <AuctionHover />
              </div>
              <div className={`duration-500 transition-opacity absolute ${hover === 'lease' ? 'opacity-100 z-50' : 'opacity-0 z-10'}`}>
                <LeaseHover />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
