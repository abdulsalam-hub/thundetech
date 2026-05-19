import {Revalscroll} from "../RevalScroll";
import Buttons from "../../components1/Buttons";
export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex py-auto items-center justify-center  w-full"
        title="Home/landing page"
      >
        <Revalscroll>
          <div className="text-center px-4 z-10">
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-500 to-gray-300 bg-clip-text text-transparent leading-right transition-opacity duration-500"
              title="Developer name"
            >
              hi , am thundetech
            </h1>

            <p
              title="developer quote"
              className="text-gray-400 text-lg mb-8 max-w-lg mx-auto first-letter:font-black first-letter:uppercase first-letter:text-blue-600 first-letter:text-[28px]"
            >
              {" "}
              a <strong>front-end developer</strong> who build and craft clean ,
              scalable web applications using <em>react</em> . My goal is to
              build web solutions that offer both exceptional performance and
              delightful user experience.
            </p>
           
            <div className="flex justify-center gap-x-4  gap-y-6 mt-6 pt-5 ">
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
        </Revalscroll>
      </section>
    </>
  );
};
