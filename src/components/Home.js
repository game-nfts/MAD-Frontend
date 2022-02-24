import React, { useEffect, useState } from 'react';
import '../grid.css';
import PastAds from "./PastAds";
import ScrollDown from "./ScollDown";
import BatchAuction from "./BatchAuction";
import LandDelegation from "./LandDelegation";
import Logo from './Logo';
import LandDelegationBatchAuction from './LandDelegationBatchAuction';

function Home(props) {
  // let navigate = useNavigate(); // to push an endpoint, call `navigate("/path");`

  const { handleActivePage } = props;

  useEffect(() => {
    handleActivePage("/home");
  }, []);

  return (
    <>
      <div className="flex-grow lg:flex-grow-0 flex flex-col relative text-gray-80 pt-20">
        <div className="w-full flex-grow lg:flex-grow-0 flex relative text-white justify-center">
          <div className="flex flex-col w-full max-w-7xl">
            <div id="banner-container" className="flex flex-col w-full">
              <Logo />
              <PastAds />
            </div>
            <div id="batch-auction-container" className="flex flex-col w-full mt-10 md:mt-20">
              <LandDelegationBatchAuction />
            </div>
            <div id="land-delegation-container" className="flex flex-col w-full mt-20">
              <LandDelegation />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
