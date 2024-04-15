import "./App.css";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Toaster
  position="bottom-left"
  reverseOrder={true}
/>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
