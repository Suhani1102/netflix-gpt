import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-zinc-800 to-50%">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-4 text-sm w-1/4">{overview}</p>
      <div className="flex">
        <button className="w-auto bg-white text-black text-lg py-2 px-8 rounded-lg hover:bg-opacity-70 flex items-center">
          <img className="w-3 h-3 mr-1" src="play.svg" alt="play" />
          Play
        </button>
        <button className="w-auto mx-2 bg-gray-500 text-white text-lg py-2 px-8 bg-opacity-50 rounded-lg flex items-center">
          <img className="w-4 h-4 mr-1" src="info.svg" alt="play" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
