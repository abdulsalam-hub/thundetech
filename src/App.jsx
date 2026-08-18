import "./index.css";
import {React} from 'react'
import {Loading} from "./components/Loading";
import {useState} from "react";
import {NavBar} from "./components/NavBar";
import {MobileMenu} from "./components/MobileMenu";
import {Home} from "./components/sections/Home.jsx";
import {About} from "./components/sections/About.jsx";
import {Project} from "./components/sections/Project.jsx";
import {Contact} from "./components/sections/Contact.jsx";
import {Service} from "./components/sections/Service.jsx";
import Footer from "./components/sections/Footer.jsx";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenu, setIsMenu] = useState(false);
  if(isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />;
} 
  return (
    <>
      
      <div
        className={`min-h-screen transition-opacity duration-700 relative ${
          !isLoading ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 scroll-smooth bg-scroll`}
      >
        <NavBar isMenu={isMenu} setIsMenu={setIsMenu} />
        <MobileMenu isMenu={isMenu} setIsMenu={setIsMenu} />
        <Home />
        <About />
        <Service />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
