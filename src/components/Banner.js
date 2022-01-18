import { useState, useRef } from "react";
import ReactPlayer from "react-player/lazy";
import DarkForest from '../assets/darkforest.mp4';
import JayChou from '../assets/jaychou.mp4';
import ApeNFT from '../assets/apenft.mp4';
import moleDAO from '../assets/moleDAO.mp4';
import DarkForestImage from '../assets/darkforest.jpeg';
import JayChouImage from '../assets/jaychou.jpeg';
import ApeNFTImage from '../assets/apenft.jpeg';
import moleDAOImage from '../assets/moleDAO.jpeg';

function Banner() {

  const [playingVideoIndex, handlePlayingVideoIndex] = useState(0);
  const [hover, handleHover] = useState(false);
  const videoArray = [{name: 'Jay Chou Phanta Bear NFT', video: JayChou, image: JayChouImage, link: 'https://opensea.io/collection/phantabear'}, {name: 'Dark Forest Guild W', video: DarkForest, image: DarkForestImage, link: 'https://guildw.xyz/'}, {name: 'Tron*ApeNFT 2021', video: ApeNFT, image: ApeNFTImage, link: 'https://www.apenft.org/'}, {name: 'MoleDAO Hackathon', video: moleDAO, image: moleDAOImage, link: 'https://moledao.io/#/hackathon'}, {name: 'More...', video: null, link: null}];
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
			<div className="">
        <div className="w-full relative">
          <img className="relative left-0 right-0 opacity-0" src={JayChouImage} />
          <div className="absolute left-0 right-0 top-0">
            <ReactPlayer ref={player} url={getPlayingVideo()} fallback={<img src={getPlayingImage()} />} playing={true} muted={true} width="100%" height="auto" onEnded={() => {
              player.current.seekTo(0);
              seekNextVideoIndex();
            }}/>
          </div>
          <div className="absolute right-0 top-0 h-full bg-gray-500-85 flex flex-col px-2 sm:px-4 md:px-8 lg:pl-8 lg:pr-24">
            <div className="h-full flex flex-col justify-center">
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
                    }} className={`${idx === playingVideoIndex ? 'opacity-100' : 'opacity-50'} text-lg sm:text-xl md:text-2xl my-1 select-none ${idx === videoArray.length - 1 ? 'cursor-default' : 'cursor-pointer'}`}>
                    {video.name}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 sm:h-28 bg-fade-gray-500 -mt-8 sm:-mt-24 z-1" />
    </>
  );
}

export default Banner;
