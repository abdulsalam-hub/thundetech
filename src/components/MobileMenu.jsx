export const MobileMenu = ({isMenu, setIsMenu}) => {
  return (
    <>
      {isMenu && (
        <div
          className={`absolute w-full bg-[rgba(10,10,10,0.8)] z-20 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out h-screen pointer-events-auto md:hidden `}
        >
          <a
            href="#home"
            onClick={() => {
              setIsMenu(!isMenu);
            }}
            className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 hover:text-blue-600
            
            `}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => {
              setIsMenu(!isMenu);
            }}
            className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 hover:text-blue-600
           
            `}
          >
            About
          </a>
          <a
            href="#service"
            onClick={() => {
              setIsMenu(!isMenu);
            }}
            className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 hover:text-blue-300
            
            `}
          >
            Service
          </a>
          <a
            href="#project"
            onClick={() => {
              setIsMenu(!isMenu);
            }}
            className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 hover:text-gray-500
            
            `}
          >
            Project
          </a>
          <a
            href="#contact"
            onClick={() =>
            {
              setIsMenu(!isMenu);
            }}
            className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 hover:text-gray-600`}
            
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
};
