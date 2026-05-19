import {Revalscroll} from "../RevalScroll";



export const Service = () => {
  return (
    <>
      <section
        title="developer services"
        id="service"
        className="min-h-screen flex items-center justify-center w-full px-auto py-20"
      >
        <Revalscroll>
          <div className="max-w-5xl w-full mx-auto px-4">
            <h2
              title="developer list of service"
              className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-700 to-gray-300 bg-clip-text text-transparent text-center"
            >
              SERVICES
            </h2>
            <div className=" grid-cols-1 md:grid-cols md:flex-col gap-8  px-13 pt-20">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(0,0,255,0.5)] text-center justify-center mb-8">
                <img
                  src="/code1.png"
                  alt="web dev img"
          
                  className="w-17 h-17 shrink-0 m-auto rounded-full bg-clip-text bg-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.6)] p-1 transition-all hover:-translate-y-1 hover:border"
                />
                <h3 className="text-[25px] text-center text-blue-700  items-center font-bold my-4 ">
                  Web development
                </h3>
                <div className=" text-gray-500 space-y-2 self-center md:translate-x-0 md:max-w-90 border border-blue-300 rounded">
                  <p className="font-bold p-1 ">
                    i create responsive,high performance website tailored to
                    your brand . From landing pages to full business platform,
                    also combine clean codes with modern tags to deliver good ,
                    fast user experience.
                  </p>
                </div>
              </div>
              <div className="p-6  rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(0,0,255,0.5)] text-center justify-center items-center  mb-8">
                <img
                  src="/code2.jpeg"
                  alt="design work image"
       
                  className="w-17 h-17 m-auto rounded-full bg-clip-text bg-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.6)] p-1 transition-all hover:-translate-y-1 hover:border"
                />
                <h3 className="text-[25px] text-center text-blue-700  items-center font-bold my-4 ">
                  Web Design
                </h3>
                <div className=" text-gray-500 space-y-2   md:translate-x-0 md:max-w-90 border border-blue-300 rounded">
                  <p className="font-bold p-1">
                    I give exceptional ux design from me or the client to
                    functional , responsive,high perform website with modern
                    standard of now. also remodel old web to modern for
                    delivering good user experience.
                  </p>
                </div>
              </div>
              <div className="p-6  rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(0,0,255,0.5)] text-center justify-center mb-8">
                <img
                  src="/code3.jpeg"
                  alt="brand info image"
 
                  className="w-17 h-17 m-auto rounded-full bg-clip-text bg-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.6)] p-1 transition-all hover:-translate-y-1 hover:border"
                />
                <h3 className="text-[25px] text-center text-blue-700  items-center font-bold my-4 ">
                  SEO Web Branding ,e-Commerce
                </h3>
                <div className=" text-gray-500  md:translate-x-0 md:max-w-90 space-y-2  border border-blue-300 rounded">
                  <p className="font-bold p-1 text-center">
                    i help small business gow through search engines class
                    ,take brand to the world with one single website click of
                    your product.
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
