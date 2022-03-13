import LocationIcon from "../assets/location.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const RadicalMarketParcel = (props) => {
  const {
    parcel,
    i,
    layerName,
    leaseCallback,
    cancelCallback,
    claimProfitCallback,
    radicalMarket,
  } = props;
  const navigate = useNavigate();

  return (
    <div
      key={`op-${i}`}
      className="font-commuter w-72 mx-6 bg-gray-bg rounded-sm flex flex-col mt-10 shadow-xl"
    >
      <div className="h-40 overflow-hidden rounded-t-sm">
        <img
          className="mx-auto w-full -m-20"
          src={parcel.image}
          alt=""
        />
      </div>
      <div className="h-1/2 w-full px-4 py-4">
        <div className="w-full h-full flex flex-col">
          <div className="w-full flex flex-col">
            <div className="flex">
              <div>
                <div className="text-gray-105 text-sm font-normal mb-2">
                  {parcel.name ? parcel.name : "Parcel 4th"}
                </div>
                <div className="bg-gray-40 px-1.5 py-1.5 rounded-md flex w-max">
                  <img className="h-4 w-4 my-auto" src={LocationIcon} alt="" />
                  <div className="text-xs ml-1 my-auto">{`${
                    parcel.parcel ? parcel.parcel.x : "--"
                  }, ${parcel.parcel ? parcel.parcel.y : "--"}`}</div>
                </div>
              </div>
              <div className="ml-auto text-right">
                <p className="text-8 text-gray-105 font-normal">Current Bid:</p>
                <p className="text-green-30 text-15 font-bold">0.01eth</p>
                <p className="text-green-30 text-12 font-bold">per Day</p>
              </div>
            </div>
            <Button
              onClick={() => {
                navigate(`../radicalmarket/${parcel.tokenId}`, {
                  replace: true,
                });
              }}
              className="mt-4 bg-gray-525 text-white w-max ml-auto hover:bg-white hover:text-gray-500"
              text="Bid Now"
              borderColor={"white"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadicalMarketParcel;
