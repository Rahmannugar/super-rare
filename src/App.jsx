import React, { useState, lazy, Suspense } from "react";
import "./App.css";
const Navbar = lazy(() => import("./components/Navbar"));
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
        <div className="overflow-hidden">
          <Suspense
            fallback={
              <div className="bg-black h-screen text-black">
                Loading Header...
              </div>
            }
          >
            <Header roboto={roboto} clashDisplay={clashDisplay} />
          </Suspense>
          <Suspense
            fallback={
              <div className="bg-black h-screen text-black">
                Loading Partners...
              </div>
            }
          >
            <Partners roboto={roboto} />
          </Suspense>
          <Suspense
            fallback={
              <div className="bg-black h-screen text-black">
                Loading Article...
              </div>
            }
          >
            <Article roboto={roboto} clashDisplay={clashDisplay} />
          </Suspense>
          <Suspense
            fallback={
              <div className="bg-black h-screen text-black">
                Loading Favorite...
              </div>
            }
          >
            <Favorite clashDisplay={clashDisplay} />
          </Suspense>
          <Suspense
            fallback={
              <div className="bg-black h-screen text-black">
                Loading Question...
              </div>
            }
          >
            <Question roboto={roboto} clashDisplay={clashDisplay} />
          </Suspense>
          <Suspense
            fallback={
              <div className="bg-black h-screen text-black">
                Loading Footer...
              </div>
            }
          >
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
