import {Revalscroll} from "../RevalScroll";
import Buttons from "../../components1/Buttons";
import HeroLeft from "../../components1/HeroLeft"
import HeroRight from "../../components1/HeroRight";
export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen relative backdrop:blur-xs  flex my-auto items-center justify-center  w-full transition duration-500 py-10 "
        title="Home/landing page"
      >
        <Revalscroll>
          <div className="flex justify-around items-center gap-4 mx-auto w-full md:px-2">
            <HeroLeft />
            <div className="hidden md:block h-full w-[40%]">
              {" "}
              <HeroRight />
            </div>
          </div>
        </Revalscroll>
      </section>
    </>
  );
};
