import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
const App = () => {
  const SpaceGrotesk = {
    fontFamily: "Space Grotesk, serif",
  };
  const roboto = {
    fontFamily: "'Roboto', sans-serif",
  };
  return (
    <div>
      <Navbar roboto={roboto} SpaceGrotesk={SpaceGrotesk} />
    </div>
  );
};

export default App;
