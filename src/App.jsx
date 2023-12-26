import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
const App = () => {
  const spaceGrotesk = {
    fontFamily: "'Space Grotesk', serif",
  };
  const roboto = {
    fontFamily: "'Roboto', sans-serif",
  };
  const clashDisplay = {
    fontFamily: "'ClashDisplay', sans-serif",
  };
  return (
    <div>
      <Navbar roboto={roboto} spaceGrotesk={spaceGrotesk} />
      <Header roboto={roboto} clashDisplay={clashDisplay} />
    </div>
  );
};

export default App;
