import LocationIcon from "../assets/location.svg";
import Button from "./Button";

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

  return (
    <div
      key={`op-${i}`}
      className="font-commuter w-72 mx-6 bg-gray-bg rounded-sm flex flex-col mt-10 shadow-xl"
    >
      <img
        className="w-full h-40 m-auto min-h-1/2 min-w-full"
        src={parcel.image}
        alt=""
      />
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
                <p className="text-green-30 text-15 font-bold">0.08eth</p>
                <p className="text-green-30 text-12 font-bold">per Day</p>
              </div>
            </div>
            <Button
              className="mt-4 bg-gray-525 hover:bg-black text-white w-max ml-auto hover:bg-black"
              text="Bid Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadicalMarketParcel;
