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
      <RadicalMarketParcel
        parcel={item}
        i={i}
        layerName={layerName}
        leaseCallback={leaseCallback}
        cancelCallback={cancelCallback}
        claimProfitCallback={claimProfitCallback}
      />
    ) : (
      <Parcel
        parcel={item}
        i={i}
        layerName={layerName}
        leaseCallback={leaseCallback}
        cancelCallback={cancelCallback}
        claimProfitCallback={claimProfitCallback}
      />
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
