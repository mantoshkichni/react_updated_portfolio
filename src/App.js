import { Aboutme } from "../component/Aboutme";
import { Contactme } from "../component/Contactme";
import { Experience } from "../component/Experience";
import { Home } from "../component/Home";
import { Navbar } from "../component/Navbar";
import { Work } from "../component/Work";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <Experience />
      <Work />
      <Contactme />
    </div>
  );
}
