import Parcel from "./Parcel";
import RadicalMarketParcel from "./RadicalMarketParcel";

const ParcelGroup = (props) => {
  const {
    parcels,
    layerName,
    leaseCallback,
    cancelCallback,
    claimProfitCallback,
    radicalMarket,
  } = props;

  const itemCards = parcels.map((item, i) =>
    radicalMarket ? (
      <div
        key={`radical-op-${i}`}
        className="font-commuter w-72 mx-6 bg-gray-bg rounded-sm flex flex-col mt-10 shadow-xl"
      >
        <RadicalMarketParcel
          parcel={item}
          i={i}
          layerName={layerName}
          leaseCallback={leaseCallback}
          cancelCallback={cancelCallback}
          claimProfitCallback={claimProfitCallback}
        />
      </div>
    ) : (
      <div
        key={`op-${i}`}
        className="h-100 w-64 mx-6 bg-gray-bg rounded-sm flex flex-col mt-10 shadow-xl"
      >
        <Parcel
          parcel={item}
          i={i}
          layerName={layerName}
          leaseCallback={leaseCallback}
          cancelCallback={cancelCallback}
          claimProfitCallback={claimProfitCallback}
        />
      </div>
    )
  );

  return (
    <>
      <div className="z-10 h-full flex flex-col text-gray-text-light bg-gray-bg">
        <div className="w-full flex flex-col flex-grow justify-center bg-gray-bg">
          <div className="w-full bg-gray-bg pb-10">
            <div className="flex flex-row px-4 flex-grow justify-around flex-wrap max-w-7xl mx-auto">
              {itemCards}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParcelGroup;
