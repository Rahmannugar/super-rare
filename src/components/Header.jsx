import { useMediaQuery } from "@mui/material";
import Spline1 from "../assets/spline-1.png";

const Header = ({ roboto, clashDisplay }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1024px)");
  return (
    <header>
      {isNonMobileScreens ? (
        <div className="bg-black text-white text-center py-16">
            
          <h1
            className="text-[52px] font-semibold max-w-[700px] mx-auto"
            style={clashDisplay}
          >
            Discover and collect super rare NFTs
          </h1>

          <div className="flex items-center px-24">
            <p
              className="leading-[27px] text-lg max-w-[616px] mx-auto"
              style={roboto}
            >
              Digital marketplace for crypto collectibles and NFTs. Buy, sell,
              and discover exclusive digital assets today.
            </p>
            <img
              src={Spline1}
              alt="spline-1"
              className="w-[83.232px] h-[100px] mt-[-100px]"
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </header>
  );
};

export default Header;
