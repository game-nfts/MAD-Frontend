import React, { useState, useEffect } from "react";
import _ from "lodash";
import Skyline from "../assets/LD-black_3.gif";
import Sidebar from "./Sidebar";
import Search from "./Search";
import Dropdown from "./Dropdown";
import { ReactComponent as ArrowDownIcon } from "../assets/arrow_down.svg";
import ParcelIcon from "../assets/parcel.svg";
import EstateIcon from "../assets/estate.svg";
import ParcelGroup from "./ParcelGroup";
import { useWeb3React } from "@web3-react/core";
import {
  getDecentralandParcelsWithMADAsUpdateOperator,
  MAD_ADDRESS,
} from "../helpers/graphql";

const NavData = [
  {
    name: "Decentraland",
    current: false,
    children: [
      { name: "Origin City", href: "#", current: false },
      { name: "Satoshi", href: "#", current: false },
      { name: "Angomeda", href: "#", current: false },
      { name: "Scarcity", href: "#", current: false },
    ],
    value: 0,
    disabled: false,
  },
  {
    name: "Parcel",
    current: false,
    children: [],
    icon: ParcelIcon,
    value: 1,
    disabled: false,
  },
  {
    name: "Estate",
    current: false,
    children: [],
    icon: EstateIcon,
    value: 2,
    disabled: true,
  },
  {
    name: "Cryptovoxels",
    current: false,
    children: [""],
    value: 3,
    disabled: true,
  },
  {
    name: "The Sandbox",
    current: false,
    children: [""],
    value: 4,
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

function RadicalMarketPage(props) {
  const { handleActivePage, estateContract, parcelContract, cvContract } =
    props;

  const [loading, handleLoading] = useState(false);
  const [error, handleError] = useState(false);
  const [data, setData] = useState(NavData);
  const [query, setQuery] = useState("");
  const [layer, handleLayer] = useState(0); // Default to decentraland for now
  const [activeParcels, handleActiveParcels] = useState([]);
  const [dParcels, handleDParcels] = useState([]);
  const [cParcels, handleCParcels] = useState([]);

  const { account, active } = useWeb3React();

  useEffect(() => {
    handleActivePage("/radicalmarket");
  }, [handleActivePage]);

  useEffect(() => {
    switch (layer) {
      case 0:
        handleActiveParcels(dParcels);
        break;
      case 1:
        handleActiveParcels(cParcels);
        break;
      default:
        break;
    }
  }, [layer, dParcels, cParcels]);

  useEffect(() => {
    (async () => {
      // When we re-enable CV, uncomment this.
      handleDParcels([]);
      handleCParcels([]);

      if (account && active && estateContract && parcelContract && cvContract) {
        if (layer === 0) {
          // Decentraland
          handleError(false);
          handleLoading(true);
          let parcels = await getDecentralandParcelsWithMADAsUpdateOperator(
            estateContract
          );

          // handleDParcels(estates);
          handleActiveParcels(parcels);
          handleLoading(false);
        } else if (layer === 1) {
          // Cryptovoxels
          handleError(false);
          handleLoading(true);

          try {
            let balance = await cvContract.balanceOf(account);
            if (!balance) {
              handleCParcels([]);
            } else {
              let tcp = [];
              for (let i = 0; i < balance; i++) {
                let parcelId = await cvContract.tokenOfOwnerByIndex(account, i);
                let id = parcelId.toString();
                let data = await fetch(`https://www.cryptovoxels.com/p/${id}`, {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }).then((res) => res.json());
                let extradata = await fetch(
                  `https://www.cryptovoxels.com/grid/parcels/${id}`,
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                ).then((res) => res.json());
                let td = {
                  type: "parcel",
                  image: data.image,
                  name: data.name,
                  parcel: {
                    x: Math.ceil(
                      (extradata.parcel.x1 + extradata.parcel.x2) / 2
                    ),
                    y: Math.ceil(
                      (extradata.parcel.z1 + extradata.parcel.z2) / 2
                    ),
                  },
                  tokenId: id,
                  updateOperator: _.includes(
                    extradata.contributors,
                    MAD_ADDRESS
                  ),
                };
                tcp.push(td);
              }
              handleCParcels(tcp);
              handleActiveParcels(tcp);
            }
          } catch (err) {
            console.log(err);
            handleError(true);
          }

          handleLoading(false);
        }
      } else {
        handleError(true);
      }
    })();
  }, [account, active, estateContract, parcelContract, layer, cvContract]);

  const lease = (obj) => {};

  const cancelLease = (obj) => {};

  const claimProfit = (obj) => {};

  const getLayerName = (layerId) => {
    switch (layerId) {
      case 0:
        return "Decentraland";
      case 1:
        return "CryptoVoxels";
      case 2:
        return "The Sandbox";
      default:
        return "";
    }
  };

  return (
    <div className="w-full flex flex-col text-gray-95">
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
        <div className="w-2/3 flex flex-col">
          <div className="w-full flex flex-row">
            <div className="w-2/3 ">
              <Search query={query} onSearch={setQuery} />
            </div>
            <div className="w-2/9 ml-auto">
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

          {/* <-- need to be done after query data --> */}
          <div className="mt-7">
            <ParcelGroup
              parcels={activeParcels}
              layerName={getLayerName(0)}
              leaseCallback={lease}
              cancelCallback={cancelLease}
              claimProfitCallback={claimProfit}
              radicalMarket
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadicalMarketPage;
