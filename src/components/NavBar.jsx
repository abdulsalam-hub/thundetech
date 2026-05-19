import {useEffect} from "react";

export const NavBar=({isMenu,setIsMenu}) =>
{
    useEffect(() =>
    {
        document.body.style.overflow= isMenu ? "auto" : "hidden"
    },[isMenu])
    return (
      <>
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white  shadow-10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <a
                href="#home"
                className="font-mono active:text-blue-500 text-xl font-bold text-white"
              >
                Thundetech_<span className="text-blue-500 ">hub</span>
              </a>
              <div
                className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                onClick={() =>
                  setIsMenu((prev) => {
                    !prev;
                  })
                }
              >
                &#9776;
              </div>

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

