import { useMediaQuery } from "@mui/material";
import Spline1 from "../assets/spline-1.png";
import Spline2 from "../assets/spline-2.png";
import nft1 from "../assets/nft-1.png";
import nft2 from "../assets/nft-2.png";
import nft3 from "../assets/nft-3.png";
import nft4 from "../assets/nft-4.png";
import nft5 from "../assets/nft-5.png";
import nft6 from "../assets/nft-6.png";

const Header = ({ roboto, clashDisplay }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1024px)");

  const divStyle = {
    borderRadius: "460px",
    background:
      "linear-gradient(180deg, rgba(36, 255, 0, 0.20) 0%, rgba(250, 0, 255, 0.20) 62.67%, rgba(112, 0, 255, 0.20) 113.33%)",
    filter: "blur(100px)",
  };

  const nftStyle = {
    borderRadius: "40px",
    borderBottom: "2px solid rgb(116, 145, 29)",
    border: "2px solid green",
    background:
      "linear-gradient(180deg, #5C5C5C 0%, rgba(46, 46, 46, 0.13) 100%)",
    padding: "40px",
  };

  return (
    <header>
      {isNonMobileScreens ? (
        <div className=" bg-black relative text-white text-center pt-24 pb-10">
          <div className="w-[460px] absolute h-[460px] bg-gradient-to-b from-green-500 via-fuchsia-500 to-violet-700 rounded-full blur-3xl opacity-50" />
          <h1
            className="text-[52px] font-semibold max-w-[700px] mx-auto"
            style={clashDisplay}
          >
            Discover and collect super rare NFTs
          </h1>

          <div className="relative mt-2">
            <p
              style={roboto}
              className="leading-[27px] text-lg max-w-[616px] mx-auto"
            >
              Digital marketplace for crypto collectibles and NFTs. Buy, sell,
              and discover exclusive digital assets today.
            </p>
            <img
              src={Spline1}
              alt="spline-1"
              className="absolute top-0 right-32 w-[83.232px] h-[100px] mt-[-100px]"
            />
          </div>

          <div className="mt-24 flex relative">
            <img
              src={Spline2}
              alt="spline-2"
              className="w-[83.014px] h-[100px] lg:ml-16 xl:ml-24 2xl:ml-36 absolute"
            />

            <div
              className="grid grid-cols-3 mx-auto h-[520px] max-w-[800px] justify-center items-center"
              style={nftStyle}
            >
              <img
                src={nft1}
                alt="nft-1"
                className="w-[180.422px] h-[180px] mx-auto my-4"
              />
              <img
                src={nft2}
                alt="nft-2"
                className="w-[180px] h-[180px] mx-auto my-4"
              />
              <img
                src={nft3}
                alt="nft-3"
                className="w-[180.422px] h-[180px] mx-auto my-4"
              />
              <img
                src={nft4}
                alt="nft-4"
                className="w-[179.579px] h-[180px] mx-auto my-4"
              />
              <img
                src={nft5}
                alt="nft-5"
                className="w-[180px] h-[180px] mx-auto my-4"
              />
              <img
                src={nft6}
                alt="nft-6"
                className="w-[180px] h-[180px] mx-auto my-4"
              />
            </div>
            <div className="w-[690px] h-[300px]  absolute right-0 opacity-80 bg-gradient-to-l from-indigo-700 to-fuchsia-600 rounded-full blur-[400px]" />
          </div>
        </div>
      ) : (
        <div className=" bg-black relative px-10 text-white text-center pt-24 pb-10">
          <div className="w-[250px] absolute h-[300px] bg-gradient-to-b from-green-500 via-fuchsia-500 to-violet-700 rounded-full blur-3xl opacity-50" />
          <h1
            className="text-3xl font-semibold max-w-[700px] mx-auto"
            style={clashDisplay}
          >
            Discover and collect super rare NFTs
          </h1>
          <p style={roboto} className=" text-sm mt-2 max-w-[616px] mx-auto">
            Digital marketplace for crypto collectibles and NFTs. Buy, sell, and
            discover exclusive digital assets today.
          </p>
          <div className="py-12 flex justify-center items-center space-x-10">
            <img
              src={Spline2}
              alt="spline-2"
              className="w-[83.014px] h-[100px]"
            />

            <img
              src={Spline1}
              alt="spline-1"
              className="w-[83.232px] h-[100px]"
            />
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-3 mx-auto  max-w-[800px] justify-center items-center"
            style={nftStyle}
          >
            <img src={nft1} alt="nft-1" className=" mx-auto my-4 " />
            <img src={nft2} alt="nft-2" className=" mx-auto my-4 " />
            <img src={nft3} alt="nft-3" className=" mx-auto my-4 " />
            <img src={nft4} alt="nft-4" className=" mx-auto my-4 " />
            <img src={nft5} alt="nft-5" className=" mx-auto my-4 " />
            <img src={nft6} alt="nft-6" className=" mx-auto my-4 " />
          </div>
          <div className="w-[400px] h-[300px]  absolute right-0 opacity-80 bg-gradient-to-l from-indigo-700 to-fuchsia-600 rounded-full blur-[400px]" />
        </div>
      )}
    </header>
  );
};

export default Header;
