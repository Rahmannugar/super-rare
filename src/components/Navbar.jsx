import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useState } from "react";

const Navbar = ({ roboto, SpaceGrotesk }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1024px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="border-b-1 border-solid text-white border-gray-800 bg-black">
      {isNonMobileScreens ? (
        <div className="flex justify-between lg:px-[50px] xl:px-[70px] py-[29px]">
          <div style={SpaceGrotesk} className="flex space-x-7 leading-6">
            <h1 className="hover:text-purple-900 duration-200">Roadmap</h1>
            <h1 className="hover:text-purple-900 duration-200">Team</h1>
            <h1 className="hover:text-purple-900 duration-200">About</h1>
            <div className="flex space-x-1">
              <h1 className="hover:text-purple-900 duration-200">Wallet</h1>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Chevron Down">
                  <path
                    id="Vector"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.3977 15.6629C12.178 15.8826 11.8219 15.8826 11.6022 15.6629L5.86739 9.92804C5.64772 9.70837 5.64772 9.35227 5.86739 9.13259L6.13256 8.86739C6.35222 8.64772 6.70838 8.64772 6.92805 8.86739L12 13.9393L17.0719 8.86739C17.2916 8.64772 17.6477 8.64772 17.8674 8.86739L18.1326 9.13259C18.3522 9.35227 18.3522 9.70837 18.1326 9.92804L12.3977 15.6629Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
          </div>

          <div>
            <h1 style={SpaceGrotesk} className="font-bold text-2xl leading-9">
              SuperRare
            </h1>
          </div>

          <div className="flex space-x-7">
            <button
              style={roboto}
              className="leading-6 hover:bg-white hover:text-black duration-200 px-[50px] py-[12px] rounded-full border border-solid border-white"
            >
              Connect Wallet
            </button>
            <button
              style={roboto}
              className="leading-6 hover:bg-black hover:text-white duration-200 px-[32px] py-[8px] rounded-full text-black border border-solid border-white bg-white"
            >
              Buy
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between  py-4 px-3 sm:px-10">
            <div>
              <h1 style={SpaceGrotesk} className="font-bold text-xl leading-9">
                SuperRare
              </h1>
            </div>

            <div>
              <button
                style={roboto}
                className=" hover:bg-white hover:text-black duration-200 px-3 py-1 sm:px-6 sm:py-3 rounded-full border border-solid border-white"
              >
                Connect Wallet
              </button>
            </div>

            <IconButton
              style={{ color: "#FFF" }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>

          <div className="relative">
            <div
              className={`text-center h-screen w-screen py-10 space-y-7 leading-6  bg-white text-black absolute transition-all duration-300 transform ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }
            `}
            >
              <h1 className="hover:text-purple-900 duration-200">Roadmap</h1>
              <h1 className="hover:text-purple-900 duration-200">Team</h1>
              <h1 className="hover:text-purple-900 duration-200">About</h1>
              <div className="flex space-x-1 justify-center items-center">
                <h1 className="hover:text-purple-900 duration-200">Wallet</h1>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Chevron Down">
                    <path
                      id="Vector"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.3977 15.6629C12.178 15.8826 11.8219 15.8826 11.6022 15.6629L5.86739 9.92804C5.64772 9.70837 5.64772 9.35227 5.86739 9.13259L6.13256 8.86739C6.35222 8.64772 6.70838 8.64772 6.92805 8.86739L12 13.9393L17.0719 8.86739C17.2916 8.64772 17.6477 8.64772 17.8674 8.86739L18.1326 9.13259C18.3522 9.35227 18.3522 9.70837 18.1326 9.92804L12.3977 15.6629Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </div>
              <button
                style={roboto}
                className="leading-6 hover:bg-purple-900  duration-200 px-[32px] py-[8px] rounded-full text-white border border-solid border-white bg-black"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
