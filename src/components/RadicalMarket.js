import { useNavigate } from 'react-router-dom';
import Skyline from '../assets/LD-black_3.gif';
import Button from './Button';

export default function RadicalMarket(props) {
  const navigate = useNavigate();
  
  return (
    <div className="w-full flex flex-col px-6 sm:px-8 md:px-8">
      <div className="text-yellow-mad-yellow text-3xl md:text-4xl font-commuter font-semibold text-center sm:text-left">THE RADICAL MARKET</div>
      <div className="text-white mt-4 mb-8 text-center sm:text-left">MAD's radical marketplace is built to auction land usage rights. The market lowers the bar for metaverse players by creating a better usage right marketplace. You can bid to lease land for a reasonable price here.</div>
      <div className="flex flex-col cursor-default"> {/* cursor-pointer */}
      <Button onClick={() => {
        navigate('../radicalmarket/', {replace: true});
      }} text="Go To Market!" borderColor="yellow-mad-yellow" className="text-center text-yellow-mad-yellow bg-gray-500 hover:bg-yellow-mad-yellow hover:text-gray-500 w-full sm:w-auto sm:mr-auto px-8" />
      </div>
      <div className="w-full h-auto">
        <img className="w-full" src={Skyline} alt="" />
      </div>
    </div>
  )
}