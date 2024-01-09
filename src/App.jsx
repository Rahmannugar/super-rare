import React, { useState, lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
const Header = lazy(() => import("./components/Header"));
const Partners = lazy(() => import("./components/Partners"));
const Article = lazy(() => import("./components/Article"));
const Favorite = lazy(() => import("./components/Favorite"));
const Question = lazy(() => import("./components/Question"));
const Footer = lazy(() => import("./components/Footer"));

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
          <Suspense
            fallback={<div className="bg-black text-black">Loading...</div>}
          >
            <Header roboto={roboto} clashDisplay={clashDisplay} />
            <Partners roboto={roboto} />
            <Article roboto={roboto} clashDisplay={clashDisplay} />
            <Favorite clashDisplay={clashDisplay} />
            <Question roboto={roboto} clashDisplay={clashDisplay} />
            <Footer
              roboto={roboto}
              clashDisplay={clashDisplay}
              spaceGrotesk={spaceGrotesk}
            />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default App;
