const Footer=()=> {
    return (
      <>
        <div
          title="developer warmth page"
          className=" w-full shadow-[4_2px_8px_rgba(59,130,246,0.4)] border-t-2 text-[rgb(255,255,255)] z-50 px-4 py-3 mt-20 bg-black-50"
        >
          <div className="text-center">
            <h5 className="text-justify bg-linear-to-r from-blue-500 to-gray-900 bg-clip-text text-transparent leading-right">
              Thundetech
            </h5>
            <div className="flex flex-col gap-y-3 justify-around">
              <p>Get started with your project now </p>
              <button className=" rounded-xl w-26 bg-blue-500 font-medium p-1 text-black border self-center text-center">
                <a href="https://wa.me/+2348158605740"> Get started</a>
              </button>
            </div>
            <div
              title="developer s.media handle"
              className="items-center flex flex-col "
            >
              <div className="z-40 flex gap-x-5 items-center my-5 justify-evenly self-center rounded-xl mx-auto border-blue-500 transition-all">
                <a href="https://www.facebook.com/thundetech" target="self">
                  <img
                    src="src\assets\face.png"
                    loading="lazy"
                    alt="facebook handle"
                    className="w-8 h-8 rounded-full bg-clip-text bg-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.5)] p-1 transition-all hover:-translate-y-1 hover:border"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdulsalam-thunde-947538384"
                  target="self"
                >
                  <img
                    src="src\assets\in.png"
                    alt="linkedin profile"
                    loading="lazy"
                    className="w-8 h-8  rounded-full bg-clip-text bg-blue-500 shadow-[0_2px_8px_rgba(59,130,255,0.5)] p-1.5 transition-all hover:-translate-y-1 hover:border"
                  />
                </a>
                <a href="https://github.com/abdulsalam-hub" target="self">
                  <img
                    src="src\assets\git.png"
                    alt="github repository"
                    loading="lazy"
                    className="w-8 h-8  rounded-full bg-clip-text bg-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.5)] p-1 transition-all hover:-translate-y-1 hover:border"
                  />
                </a>
                <a href="https://wa.me/+2348158605740" target="self">
                  <img
                    src="wat.png"
                    alt="whatsapp me link"
                    loading="lazy"
                    className="w-8  h-8  rounded-full bg-clip-text bg-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.5)] p-1 transition-all hover:-translate-y-1 hover:border"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="text-sm bg-blue-500 py-1 text-center">
            <span>copyright 2025 THUNDETECH Alright reserved web dev .</span>
          </div>
        </div>
      </>
    );
};
export default Footer