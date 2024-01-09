import React, { useState, lazy, Suspense, useEffect } from "react";
import "./App.css";
const Navbar = lazy(() => import("./components/Navbar"));
const Header = lazy(() => import("./components/Header"));
const Partners = lazy(() => import("./components/Partners"));
const Article = lazy(() => import("./components/Article"));
const Favorite = lazy(() => import("./components/Favorite"));
const Question = lazy(() => import("./components/Question"));
const Footer = lazy(() => import("./components/Footer"));
import { HashLoader } from "react-spinners";

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

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
  }, []);

  return (
    <div className="bg-black h-screen">
      {isLoaded ? (
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
      ) : (
        <div className="flex justify-center items-center w-full h-screen">
          <HashLoader color="white" />
        </div>
      )}
    </div>
  );
};

export default App;
