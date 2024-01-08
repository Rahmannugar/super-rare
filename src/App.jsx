import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Article from "./components/Article";
import Favorite from "./components/Favorite";
import Question from "./components/Question";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-black">
      <Navbar
        roboto={roboto}
        spaceGrotesk={spaceGrotesk}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {!isMenuOpen && (
        <div>
          <Header roboto={roboto} clashDisplay={clashDisplay} />
          <Partners roboto={roboto} />
          <Article roboto={roboto} clashDisplay={clashDisplay} />
          <Favorite clashDisplay={clashDisplay} />
          <Question roboto={roboto} clashDisplay={clashDisplay} />
        </div>
      )}
    </div>
  );
};

export default App;
