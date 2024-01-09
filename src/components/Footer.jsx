import { useMediaQuery } from "@mui/material";
import Footer1 from "../assets/footer-1.png";
import Footer2 from "../assets/footer-2.png";
import Footer3 from "../assets/footer-3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = ({ clashDisplay, roboto, spaceGrotesk }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1024px)");

  useEffect(() => {
    AOS.init();
  }, []);

  const date = new Date();
  const year = date.getFullYear();

  const bottomLeftStyle = {
    borderRadius: "518px",
    opacity: "0.5",
    background:
      "linear-gradient(269deg, rgba(98, 73, 255, 0.50) 30.86%, rgba(36, 255, 0, 0.50) 89.17%)",
    filter: "blur(200px)",
    width: "518px",
    height: "426px",
  };

  const topRightStyle = {
    borderRadius: "690px",
    opacity: "0.5",
    background:
      "linear-gradient(268deg, rgba(36, 255, 0, 0.31) 25.54%, rgba(10, 207, 131, 0.50) 43.2%, rgba(89, 75, 242, 0.50) 74.96%)",
    filter: "blur(200px)",
    width: "518px",
    height: "426px",
  };

  const bottomRightStyle = {
    borderRadius: "604px",
    opacity: "0.5",
    background:
      "linear-gradient(0deg, rgba(255, 245, 0, 0.50) 0%, rgba(255, 245, 0, 0.50) 100%)",
    filter: "blur(200px)",
    width: "518px",
    height: "126px",
  };

  const mobileBottomLeftStyle = {
    borderRadius: "518px",
    opacity: "0.5",
    background:
      "linear-gradient(269deg, rgba(98, 73, 255, 0.50) 30.86%, rgba(36, 255, 0, 0.50) 89.17%)",
    filter: "blur(200px)",
    width: "318px",
    height: "426px",
  };

  const mobileTopRightStyle = {
    borderRadius: "690px",
    opacity: "0.5",
    background:
      "linear-gradient(268deg, rgba(36, 255, 0, 0.31) 25.54%, rgba(10, 207, 131, 0.50) 43.2%, rgba(89, 75, 242, 0.50) 74.96%)",
    filter: "blur(200px)",
    width: "318px",
    height: "426px",
  };

  const mobileBottomRightStyle = {
    borderRadius: "604px",
    opacity: "0.5",
    background:
      "linear-gradient(0deg, rgba(255, 245, 0, 0.50) 0%, rgba(255, 245, 0, 0.50) 100%)",
    filter: "blur(200px)",
    width: "318px",
    height: "126px",
  };
  return (
    <div>
      {isNonMobileScreens ? (
        <div>
          <div className="bg-[#131415] relative lg:px-[50px] xl:px-[70px] 2xl:[px-100px] pt-32">
            <div
              style={bottomLeftStyle}
              className="absolute bottom-0 left-0"
            ></div>
            <div style={topRightStyle} className="absolute top-0 right-0"></div>
            <div
              style={bottomRightStyle}
              className="absolute bottom-0 right-0"
            ></div>

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
                data-aos="fade-down"
                className="px-[28px] py-[12px] bg-white text-black rounded-[100px] hover:bg-green-300 duration-300"
              >
                Join Discord
              </button>
              <button
                style={roboto}
                data-aos="fade-up"
                className="px-[24px] py-[12px] rounded-[100px] text-white border hover:border-none hover:bg-white hover:text-black duration-300"
              >
                Follow on Twitter
              </button>
            </div>

            <div className="flex space-x-[-100px] mt-[-150px] justify-end">
              <img
                src={Footer1}
                alt="footer-1"
                data-aos="fade-down"
                data-aos-duration="900"
                className="lg:w-[200px] lg:h-[200px] xl:w-[280px] xl:h-[280px] flex-shrink-0"
              />
              <img
                src={Footer2}
                alt="footer-2"
                data-aos="fade-up"
                data-aos-duration="900"
                className="lg:w-[300px] lg:h-[300px] xl:w-[380.89px] xl:h-[380px] flex-shrink-0 mt-[-100px]"
              />
              <img
                src={Footer3}
                alt="footer-3"
                data-aos="fade-down"
                data-aos-duration="900"
                className="lg:w-[200px] lg:h-[200px] xl:w-[ 279.346px] xl:h-[280px] flex-shrink-0"
              />
            </div>
          </div>

          <div className="bg-[#111] lg:pt-48 xl:pt-72 lg:px-[50px] xl:px-[70px] 2xl:[px-100px] pb-28">
            <div>
              <h1
                className="leading-9 text-2xl font-bold text-white text-center"
                style={spaceGrotesk}
              >
                SuperRare
              </h1>
              <div
                className="flex justify-center items-center space-x-10 mt-8"
                style={{
                  color: "rgba(255, 255, 255, 0.5)",
                }}
              >
                <h2 className="font-semibold leading-6" style={roboto}>
                  Roadmap
                </h2>
                <h2 className="font-semibold leading-6" style={roboto}>
                  Team
                </h2>
                <h2 className="font-semibold leading-6" style={roboto}>
                  About
                </h2>
                <h2 className="font-semibold leading-6" style={roboto}>
                  Wallet
                </h2>
                <h2 className="font-semibold leading-6" style={roboto}>
                  Buy
                </h2>
              </div>

              <div
                style={{
                  background: "rgba(171, 171, 171, 0.50)",
                }}
                className="h-[1px] mt-16"
              ></div>

              <div
                style={roboto}
                className="text-[#ABABAB] mt-9 flex justify-between"
              >
                <h1 className="leading-[21px]">
                  {year} Superare. All right reserved.
                </h1>

                <div className="flex space-x-4">
                  <a href="/" className="underline leading-[21px]">
                    Privacy Policy
                  </a>
                  <a href="/" className="underline leading-[21px]">
                    Terms of Service
                  </a>
                  <a href="/" className="underline leading-[21px]">
                    Cookies Settings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-[#131415] relative pt-20 px-10">
            <div
              style={mobileBottomLeftStyle}
              className="absolute bottom-0 left-0"
            ></div>
            <div
              style={mobileTopRightStyle}
              className="absolute top-0 right-0"
            ></div>
            <div
              style={mobileBottomRightStyle}
              className="absolute bottom-0 right-0"
            ></div>

            <div className="text-white flex flex-col items-center justify-center space-y-5">
              <h1
                className="font-semibold text-xl sm:text-2xl"
                style={clashDisplay}
              >
                Join the community
              </h1>
              <p style={roboto}>
                Join our Discord channel or follow us on Twitter keep up to date
                with our latest work and announcements.
              </p>
            </div>

            <div className="flex space-x-6 items-center justify-center py-6">
              <button
                style={roboto}
                data-aos="fade-down"
                className="px-[20px] py-[10px] flex-shrink-0 bg-white text-black rounded-[100px] hover:bg-green-300 duration-300"
              >
                Join Discord
              </button>
              <button
                style={roboto}
                data-aos="fade-up"
                className="px-[20px] py-[10px] rounded-[100px] flex-shrink-0 text-white border hover:border-none hover:bg-white hover:text-black duration-300"
              >
                Follow on Twitter
              </button>
            </div>

            <div className="flex space-x-[-70px] mt-20 justify-center items-center">
              <img
                src={Footer1}
                alt="footer-1"
                data-aos="fade-down"
                data-aos-duration="900"
                className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] flex-shrink-0"
              />
              <img
                src={Footer2}
                alt="footer-2"
                data-aos="fade-up"
                data-aos-duration="900"
                className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] flex-shrink-0 mt-[-50px]"
              />
              <img
                src={Footer3}
                alt="footer-3"
                data-aos="fade-down"
                data-aos-duration="900"
                className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] flex-shrink-0"
              />
            </div>
          </div>

          <div className="bg-[#111] pt-16 px-10 pb-28">
            <div>
              <h1
                className=" text-xl sm:text-2xl font-bold text-white text-center"
                style={spaceGrotesk}
              >
                SuperRare
              </h1>
              <div
                className="flex justify-center items-center space-x-5 mt-5"
                style={{
                  color: "rgba(255, 255, 255, 0.5)",
                }}
              >
                <h2 className="font-semibold" style={roboto}>
                  Roadmap
                </h2>
                <h2 className="font-semibold" style={roboto}>
                  Team
                </h2>
                <h2 className="font-semibold" style={roboto}>
                  About
                </h2>
                <h2 className="font-semibold" style={roboto}>
                  Wallet
                </h2>
                <h2 className="font-semibold" style={roboto}>
                  Buy
                </h2>
              </div>

              <div
                style={{
                  background: "rgba(171, 171, 171, 0.50)",
                }}
                className="h-[1px] mt-16"
              ></div>

              <div
                style={roboto}
                className="text-[#ABABAB] mt-5 flex justify-between space-x-3 text-xs"
              >
                <h1>{year} Superare. All right reserved.</h1>

                <div className="flex justify-end items-end space-x-4">
                  <a href="/" className="underline">
                    Privacy Policy
                  </a>
                  <a href="/" className="underline">
                    Terms of Service
                  </a>
                  <a href="/" className="underline">
                    Cookies Settings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
