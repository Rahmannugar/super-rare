import { useMediaQuery } from "@mui/material";
import Footer1 from "../assets/footer-1.png";
import Footer2 from "../assets/footer-2.png";
import Footer3 from "../assets/footer-3.png";

const Footer = ({ clashDisplay, roboto, spaceGrotesk }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1024px)");
  return (
    <div>
      {isNonMobileScreens ? (
        <div>
          <div className="bg-[#131415] lg:px-[50px] xl:px-[70px] 2xl:[px-100px] py-32">
            <div className="text-white space-y-5">
              <h1
                className="font-semibold text-5xl leading-[57.6px]"
                style={clashDisplay}
              >
                Join the community
              </h1>
              <p
                style={roboto}
                className="leading-[27px] text-lg max-w-[616px]"
              >
                Join our Discord channel or follow us on Twitter keep up to date
                with our latest work and announcements.
              </p>
            </div>

            <div className="flex space-x-6 py-20">
              <button
                style={roboto}
                className="px-[28px] py-[12px] bg-white text-black rounded-[100px]"
              >
                Join Discord
              </button>
              <button
                style={roboto}
                className="px-[24px] py-[12px] rounded-[100px] text-white border"
              >
                Follow on Twitter
              </button>
            </div>

            <div className="flex space-x-[-100px] mt-[-150px] justify-end">
              <img
                src={Footer1}
                alt="footer-1"
                className="lg:w-[200px] lg:h-[200px] xl:w-[280px] xl:h-[280px] flex-shrink-0"
              />
              <img
                src={Footer2}
                alt="footer-2"
                className="lg:w-[300px] lg:h-[300px] xl:w-[380.89px] xl:h-[380px] flex-shrink-0 mt-[-100px]"
              />
              <img
                src={Footer3}
                alt="footer-3"
                className="lg:w-[200px] lg:h-[200px] xl:w-[ 279.346px] xl:h-[280px] flex-shrink-0"
              />
            </div>
          </div>

          <div className="bg-[#111] lg:pt-48 xl:pt-72">
            <div>
              <h1>SuperRare</h1>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Footer;
