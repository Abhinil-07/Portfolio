import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import { About } from "./components/About/About";
import { StackCard } from "./components/About/StackCard";
import Timeline from "./components/About/Timeline";
import { useMediaQuery } from "react-responsive";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

import Header from "./components/NavMD";

function App() {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="lg:h-[250vh] h-[320vh]">
      {/* {isLargeScreen ? <Nav /> : <Header />} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<Timeline />} />
        </Routes>
      </BrowserRouter>

      {/* <StackCard /> */}
    </div>
  );
}

export default App;
