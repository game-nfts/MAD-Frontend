import { useState, useRef } from "react";
import ReactPlayer from "react-player/lazy";
import DarkForest from '../assets/darkforest.mp4';
import JayChou from '../assets/jaychou.mp4';
import ApeNFT from '../assets/apenft.mp4';
import moleDAO from '../assets/moleDAO.mp4';
import orangedao from '../assets/orangedao.mp4';
import f1showroom from '../assets/f1.mp4';
import futurecraft from '../assets/futurecraft.mp4';
import DarkForestImage from '../assets/darkforest.jpeg';
import JayChouImage from '../assets/jaychou.jpeg';
import ApeNFTImage from '../assets/apenft.jpeg';
import moleDAOImage from '../assets/moleDAO.jpeg';
import Placeholder from '../assets/placeholder.jpg';

function PastAds() {

  const [playingVideoIndex, handlePlayingVideoIndex] = useState(0);
  const [hover, handleHover] = useState(false);
  const videoArray = [
    {name: 'Jay Chou Phanta Bear NFT', video: JayChou, image: JayChouImage, link: 'https://opensea.io/collection/phantabear'},
    {name: 'Dark Forest Guild W', video: DarkForest, image: DarkForestImage, link: 'https://guildw.xyz/'},
    {name: 'Tron*ApeNFT 2021', video: ApeNFT, image: ApeNFTImage, link: 'https://www.apenft.org/'},
    {name: 'MoleDAO Hackathon', video: moleDAO, image: moleDAOImage, link: 'https://moledao.io/#/hackathon'},
    {name: 'OrangeDAO', video: orangedao, image: Placeholder, link: 'https://twitter.com/orangedaoxyz'},
    {name: 'F1 Showroom', video: f1showroom, image: Placeholder, link: 'https://www.f1autos.com.sg/'},
    {name: '#Futurecraft Artists', video: futurecraft, image: Placeholder, link: 'https://mobile.twitter.com/r0bp'},
    {name: 'More...', video: null, link: null}];
  const player = useRef(null);

  const seekNextVideoIndex = () => {
    if(hover) {
      return;
    }
    if(playingVideoIndex == videoArray.length - 2) {
      handlePlayingVideoIndex(0);
    } else {
      handlePlayingVideoIndex(playingVideoIndex + 1);
    }
  }

  const getPlayingVideo = () => {
    return videoArray[playingVideoIndex].video;
  }

  const getPlayingImage = () => {
    return videoArray[playingVideoIndex].image;
  }

  return (
    <>
			<div className="flex flex-col sm:flex-row mx-4 sm:mx-0 mt-10">
        <div className="sm:ml-0 sm:h-full flex-col flex-shrink-0 flex flex-col px-2 sm:px-4 md:px-8 lg:pl-8 lg:pr-24 pb-4 sm:pb-0">
          <div className="text-green-10 text-3xl md:text-4xl font-commuter font-semibold">PAST ADS</div>
          <div className="h-full w-full flex flex-row">
            <div className="w-2 mr-4 h-full bg-gradient-to-b from-green-10 to-[rgba(196, 196, 196, 0)]"/>
            <div className="flex flex-col">
              {videoArray.map((video, idx) => (
                <>
                  <div onMouseEnter={() => {
                      // The last index is "More..." which does not have a corresponding hover
                      if(idx < videoArray.length - 1) {
                        handleHover(true);
                        handlePlayingVideoIndex(idx);
                      }
                    }}
                    onMouseLeave={() => {
                      // The last index is "More..." which does not have a corresponding hover
                      if(idx < videoArray.length - 1) {
                        handleHover(false);
                        seekNextVideoIndex();
                      }
                    }}
                    onClick={() => {
                      if(!video.link) {
                        return;
                      }
                      window.open(video.link, "_blank").focus();
                    }} className={`${idx === playingVideoIndex ? 'opacity-100' : 'opacity-50'} text-lg sm:text-xl my-1 select-none ${idx === videoArray.length - 1 ? 'cursor-default' : 'cursor-pointer'}`}>
                    {video.name}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full relative flex-shrink ml-1 sm:mr-8 md:mr-16 my-4 sm:my-0">
          {/* We need a placeholder image to allocate proper space on the page.
              We also need a placeholder image to display the box shadow (otherwise
              it flickers when the videos switch). We finally need our ReactPlayer
              to play the actual video. */}
          <img className="relative left-0 right-0 opacity-0" src={Placeholder} />
          <div className="absolute left-0 -ml-2 mr-2 -mt-2 mb-2 top-0 shadow-adbanner">
            <img className="w-full h-auto opacity-0" src={Placeholder} />
          </div>
          <div className="absolute left-0 -ml-2 mr-2 -mt-2 mb-2 top-0">
            <ReactPlayer ref={player} url={getPlayingVideo()} fallback={<img src={getPlayingImage()} />} playing={true} muted={true} width="100%" height="auto" onEnded={() => {
              player.current.seekTo(0);
              seekNextVideoIndex();
            }}/>
          </div>
        </div>
      </div>
      {/* <div className="h-10 sm:h-28 bg-fade-gray-500 -mt-8 sm:-mt-24 z-1" /> */}
    </>
  );
}

export default PastAds;
