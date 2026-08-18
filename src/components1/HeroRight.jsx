import React from 'react'
import hero from "../assets/thundeLogo.jpeg"
const HeroRight = () => {
  return (
    <div  className=" h-full w-auto  flex items-center justify-center rounded-tl-[60%] rounded-bl-[60%]  rounded-r-none border-[3px_0px_0px_2px] border-blue-400 p-2 overflow-hidden">
      <div className=" shadow-md shadow-sky-300 rounded-[100%] border-[0.5px] border-sky-400">
        <img
          src={hero}
          alt="the author logo"
          className="h-full w-full rounded-[100%] hover:scale-95 cursor-pointer "
        />
      </div>
    </div>
  );
}

export default HeroRight