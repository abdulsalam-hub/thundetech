import React from 'react'
import Buttons from "./Buttons";
const HeroLeft = () => {
  return (
    <div className="">
      <div className="text-center px-4 z-10">
        <h1
          className="text-[clamp(3rem,2vw,7rem)] md:pb-5 w-full text-blue-500 font-bold lg:mb-6  transition-opacity duration-500"
          title="Developer name"
        >
          hi ,{" "}
          <span className="bg-linear-to-r from-blue-500 to-gray-300 bg-clip-text text-transparent tracking-tight">
            am Abdulsalam <br /> Dev hub
          </span>
        </h1>

        <p
          title="developer quote"
          className="w-full text-justify text-gray-400 text-lg md:text-2xl md:tracking-wide md:leading-10  px-5 mb-8 max-w-lg mx-auto first-letter:font-black first-letter:uppercase first-letter:text-blue-600 first-letter:text-[28px] font-[popping,arial]"
        >
          {" "}
          a <strong>front-end developer</strong> who build and craft clean ,
          scalable web applications using <em>popular tools.</em> . My goal is
          to build web solutions that offer both exceptional performance and
          delightful user experience.
        </p>

        <div className="flex w-full items-center  justify-around gap-x-4  gap-y-6 mt-8 md:mt-10 pt-5 ">
          <Buttons
            title="developer projects"
            link="#project"
            textColor="text-white"
            bgColor="bg-blue-700"
            name="Projects"
          />
          <Buttons
            title="developer contact"
            link="#contact"
            textColor="text-white"
            bgColor="bg-transparent"
            name="Contact Me"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroLeft