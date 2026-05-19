export const MobileMenu = ({isMenu, setIsMenu}) => {
  return (
    <>
      <div
        className={`fixed h-100% top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out ${
          !isMenu
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => {
            setIsMenu(true);
          }}
          className="absolute top-4 right-6 text-white text-3xl focus:outline-none cursor-pointer bg-black-600"
          aria-label="Close Menu"
        >
          &times;
        </button>
        <a
          href="#home"
          onClick={() => {
            setIsMenu(true);
          }}
          className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 hover:text-blue-600
            ${
              isMenu
                ? "opacity-0 translate-y-100 text-blue-500"
                : "opacity-100 translate-y-5"
            }
            `}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => {
            setIsMenu(true);
          }}
          className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 hover:text-blue-600
            ${isMenu ? "opacity-0 translate-y-0" : "opacity-100 translate-y-5"}
            `}
        >
          About
        </a>
        <a
          href="#service"
          onClick={() => {
            setIsMenu(true);
          }}
          className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 hover:text-blue-300
            ${isMenu ? "opacity-0 translate-y-0" : "opacity-100 translate-y-5"}
            `}
        >
          Service
        </a>
        <a
          href="#project"
          onClick={() => {
            setIsMenu(true);
          }}
          className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 hover:text-gray-500
            ${isMenu ? "opacity-0 translate-y-0" : "opacity-100 translate-y-5"}
            `}
        >
          Project
        </a>
        <a
          href="#contact"
          onClick={() => {
            setIsMenu(true);
          }}
          className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 hover:text-gray-600
            ${isMenu ? "opacity-0 translate-y-0" : "opacity-100 translate-y-5"}
            `}
        >
          Contact
        </a>
      </div>
    </>
  );
};
