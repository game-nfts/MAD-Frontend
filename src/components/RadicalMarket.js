import Arrow from '../assets/Arrow_1.svg';
import Skyline from '../assets/LD-black_3.gif';

export default function RadicalMarket(props) {
  return (
    <div className="w-full flex flex-col px-6 sm:px-8 md:px-8">
      <div className="text-yellow-mad-yellow text-3xl md:text-4xl font-commuter font-semibold text-center sm:text-left">THE RADICAL MARKET</div>
      <div className="text-white mt-4 mb-8 text-center sm:text-left">MAD's radical marketplace is built to auction land usage rights. The market lowers the bar for metaverse players by creating a better usage right marketplace. You can bid to lease land for a reasonable price here.</div>
      <div className="flex flex-col cursor-default"> {/* cursor-pointer */}
        <div className="font-commuter text-white ml-2">COMING SOON</div> {/* GO TO MARKET */}
        <img className="ml-4 w-40" src={Arrow} alt="" />
      </div>
      <div className="w-full h-auto">
        <img className="w-full" src={Skyline} alt="" />
      </div>
    </div>
  )
}