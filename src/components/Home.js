import { useState } from "react";
import '../grid.css';
import { useNavigate } from "react-router-dom";
import Cube from "./Cube";
import SlantButton from "./SlantButton";
import VerticalTabs from "./VerticalTabs";
import MoledaoImage from '../assets/moledao.png';
import LeaseHover from "./LeaseHover";
import AuctionHover from "./AuctionHover";

function Home() {
  let navigate = useNavigate(); // to push an endpoint, call `navigate("/path");`

  const [itemList, handleItemList] = useState(["Cobo Wallet Ads 2021", "Moledao Hackathon 2021", "and More..."]);
  const [activeItem, handleActiveItem] = useState(0);
  const [itemObj, handleItemObj] = useState({
    "Cobo Wallet Ads 2021": MoledaoImage,
    "Moledao Hackathon 2021": MoledaoImage,
    "and More...": MoledaoImage,
  });
  const [hover, handleHover] = useState('');

  return (
    <>
      <div className="flex-grow flex flex-col relative text-gray-80 pt-20">
        <div className="w-full flex-grow flex relative text-white">
          <div className="flex flex-col w-full">
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col w-full my-8">
                <div className="text-4xl md:text-5xl font-extralight">METAVERSE <span className="text-green-50">A</span>DVERTISEMENT <span className="text-pink-50">D</span>AO</div>
                <div className="text-xl md:text-3xl font-extralight italic">Facilitate revenue-generating businesses in the metaverse</div>
              </div>
              <div className="flex flex-col xs:flex-row">
                <div className="mr-0 xs:mr-4 w-full xs:w-auto">
                  <SlantButton onMouseEnter={() => handleHover('auction')} onMouseLeave={() => handleHover('')} onClick={() => {}} text="Auction" className="bg-gray-500 hover:bg-green-50h w-full sm:w-auto" />
                </div>
                <div className="ml-0 xs:ml-4 w-full xs:w-auto mt-4 xs:mt-0">
                  <SlantButton onMouseEnter={() => handleHover('lease')} onMouseLeave={() => handleHover('')} onClick={() => {}} text="Lease My Estate" className="bg-gray-500 hover:bg-pink-80h w-full sm:w-auto" />
                </div>
              </div>
            </div>
            <div className="mt-8 w-full grid-container h-auto">
              <div className={`grid-inner w-full bg-gray-500 h-full flex ${hover === '' ? 'z-50' : 'z-10'}`}>
                <div className={`my-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex flex-col-reverse md:flex-row w-full duration-500 transition-opacity ${hover === '' ? 'opacity-100' : 'opacity-0'}`}>
                  <Cube image={itemObj[itemList[activeItem]]} />
                  <div className="flex-shrink-0">
                    <VerticalTabs
                      itemList={itemList}
                      activeItem={activeItem}
                      handleActiveItem={handleActiveItem}
                    />
                  </div>
                </div>
              </div>
              <div className={`grid-inner w-full bg-gray-500 h-full flex ${hover === 'auction' ? 'z-50' : 'z-10'}`}>
                <div className={`my-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex flex-col-reverse md:flex-row w-full duration-500 transition-opacity ${hover === 'auction' ? 'opacity-100' : 'opacity-0'}`}>
                  <AuctionHover />
                </div>
              </div>
              <div className={`grid-inner w-full bg-gray-500 h-full flex ${hover === 'lease' ? 'z-50' : 'z-10'}`}>
                <div className={`my-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex flex-col-reverse md:flex-row w-full duration-500 transition-opacity ${hover === 'lease' ? 'opacity-100' : 'opacity-0'}`}>
                  <LeaseHover />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;