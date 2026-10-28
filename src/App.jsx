import { useState } from "react";
import "./index.css";
import { NavBar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home.jsx";
import { About } from "./components/sections/About.jsx";
import { Project } from "./components/sections/Project.jsx";
import { Contact } from "./components/sections/Contact.jsx";
import { Service } from "./components/sections/Service.jsx";
import Footer from "./components/sections/Footer.jsx";

function App() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="site-shell min-h-screen text-slate-100">
      <NavBar isMenu={isMenu} setIsMenu={setIsMenu} />
      <MobileMenu isMenu={isMenu} setIsMenu={setIsMenu} />
      <main>
        <Home />
        <About />
        <Service />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
