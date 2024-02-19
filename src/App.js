import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import { About } from "./components/About/About";
import { StackCard } from "./components/About/StackCard";
import Timeline from "./components/About/Timeline";

import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="lg:h-[250vh] h-[320vh]">
      {<Nav /> }

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
