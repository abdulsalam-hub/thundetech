import {useEffect} from "react";

export const NavBar=({isMenu,setIsMenu}) =>
{
    useEffect(() =>
    {
        document.body.style.overflow= !isMenu ? "auto" : "hidden"
    },[isMenu])
    return (
      <>
        <nav className="fixed md:sticky top-0 left-0 w-full z-50 bg-[rgba(10,10,10,0.5)] backdrop-blur-xl border-b border-white  shadow-10">
          <div className=" w-full max-w-5xl mx-auto px-4 ">
            <div className="flex justify-between items-center h-16">
              <a
                href="#home"
                className="font-mono active:text-blue-500 text-xl font-bold text-white"
              >
                Thundetech_<span className="text-blue-500 ">hub</span>
              </a>
              {!isMenu ? (
                <button
                  className="w-7 h-5  relative cursor-pointer z-40 md:hidden"
                  onClick={() =>
                    setIsMenu(!isMenu)
                  }
                >
                  &#9776;
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsMenu(!isMenu);
                  }}
                  className="md:hidden text-white text-3xl focus:outline-none cursor-pointer bg-black-600"
                  aria-label="Close Menu"
                >
                  &times;
                </button>
              )}
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#home"
                  className="text-gray-300  transition-colors hover:text-blue-600 hover:font-bold"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-300 transition-colors hover:text-blue-600 hover:font-bold"
                >
                  About
                </a>
                <a
                  href="#service"
                  className="text-gray-300 transition-colors hover:text-blue-600 hover:font-bold"
                >
                  Service
                </a>
                <a
                  href="#project"
                  className="text-gray-300  transition-colors hover:text-blue-600 hover:font-bold"
                >
                  Project
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 transition-colors hover:text-blue-600 hover:font-bold"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
};

