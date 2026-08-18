import {Revalscroll} from "../RevalScroll";
import code1 from '../../assets/code1.png'
import code2 from "../../assets/code2.jpeg";
import code3 from "../../assets/code3.jpeg";
export const Service = () => {
  return (
    <>
      <section
        title="developer services"
        id="service"
        className="min-h-screen relative flex items-center justify-center w-full mx-auto py-20"
      >
        <Revalscroll>
          <div className="max-w-5xl relative w-full mx-auto px-6 lg:px-10">
            <h2
              title="developer list of service"
              className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-700 to-gray-300 bg-clip-text text-transparent text-center"
            >
              SERVICES
            </h2>
            <div className=" grid-cols-1 md:grid-cols-3  gap-8  py-20">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(0,0,255,0.5)] text-center justify-center mb-8">
                <img
                  src={code1}
                  alt="web dev img"
                  className="w-17 h-17 shrink-0 m-auto rounded-full   bg-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.6)] p-1 transition-all hover:-translate-y-1 hover:border"
                />
                <h3 className="text-[clamp(1.5rem,2vw,2rem)] text-center text-blue-700  items-center font-bold my-4 ">
                  Web development
                </h3>
                <div className="mx-auto text-gray-500 space-y-2 self-center md:translate-x-0 border-blue-300 md:max-w-[60%] rounded w-full">
                  <p className="text-justify font-bold p-2 md:p-4 first-letter:capitalize md:text-center ">
                    i create responsive,high performance website tailored to
                    your brand . From landing pages to full business platform,
                    also combine clean codes with modern tags to deliver good ,
                    fast user experience.
                  </p>
                </div>
              </div>
              <div className="p-6  rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(0,0,255,0.5)] text-center justify-center items-center  mb-8">
                <img
                  src={code2}
                  alt="design work image"
                  className="w-17 h-17 m-auto rounded-full bg-clip-text bg-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.6)] p-1 transition-all hover:-translate-y-1 hover:border"
                />
                <h3 className="text-[clamp(1.5rem,2vw,2rem)] text-center text-blue-700  items-center font-bold my-4  ">
                  Web Design
                </h3>
                <div className="mx-auto  text-gray-500 space-y-2 self-center md:translate-x-0 border-blue-300 md:max-w-[60%] rounded w-full">
                  <p className="text-justify font-bold p-2 md:p-4 first-letter:capitalize md:text-center ">
                    I give exceptional ux design from me or the client to
                    functional , responsive,high perform website with modern
                    standard of now. also remodel old web to modern for
                    delivering good user experience.
                  </p>
                </div>
              </div>
              <div className="p-6  rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(0,0,255,0.5)] text-center justify-center mb-8">
                <img
                  src={code3}
                  alt="brand info image"
                  className="w-17 h-17 m-auto rounded-full bg-clip-text bg-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.6)] p-1 transition-all hover:-translate-y-1 hover:border"
                />
                <h3 className="text-[clamp(1.5rem,2vw,2rem)] text-center text-blue-700  items-center font-bold my-4  ">
                  SEO Web Branding ,e-Commerce
                </h3>
                <div className="mx-auto  text-gray-500 space-y-2 self-center md:translate-x-0 border-blue-300 md:max-w-[60%] rounded w-full">
                  <p className="text-justify font-bold p-2 md:p-4 first-letter:capitalize md:text-center ">
                    i help small business gow through search engines class ,take
                    brand to the world with one single website click of your
                    product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Revalscroll>
      </section>
    </>
  );
};
