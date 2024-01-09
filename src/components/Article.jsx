import { useMediaQuery } from "@mui/material";
import Spline3 from "../assets/spline-3.png";
import Article1 from "../assets/article-1.png";
import Article2 from "../assets/article-2.png";
import Article3 from "../assets/article-3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Article = ({ roboto, clashDisplay }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1024px)");

  useEffect(() => {
    AOS.init();
  }, []);

  const divStyle = {
    background:
      "linear-gradient(180deg, #141415 -1.57%, rgba(30, 30, 30, 0.00) 118.49%)",
  };

  const topRightStyle = {
    borderRadius: "690px",
    opacity: "0.5",
    background:
      "linear-gradient(269deg, rgba(98, 73, 255, 0.50) 30.86%, rgba(36, 255, 0, 0.50) 89.17%)",
    filter: "blur(200px)",
    width: "500px",
    height: "568px",
  };

  const mobileTopRightStyle = {
    borderRadius: "690px",
    opacity: "0.5",
    background:
      "linear-gradient(269deg, rgba(98, 73, 255, 0.50) 30.86%, rgba(36, 255, 0, 0.50) 89.17%)",
    filter: "blur(200px)",
    width: "300px",
    height: "350px",
  };

  const bottomleftStyle = {
    borderRadius: "1024px",
    opacity: "0.5",
    background:
      "linear-gradient(269deg, rgba(98, 73, 255, 0.50) 30.86%, rgba(255, 116, 72, 0.39) 89.17%)",
    filter: "blur(200px)",
    width: "874px",
    height: "500px",
  };

  const mobileBottomleftStyle = {
    borderRadius: "1024px",
    opacity: "0.5",
    background:
      "linear-gradient(269deg, rgba(98, 73, 255, 0.50) 30.86%, rgba(255, 116, 72, 0.39) 89.17%)",
    filter: "blur(200px)",
    width: "500px",
    height: "500px",
  };
  return (
    <div className="bg-black text-white">
      {isNonMobileScreens ? (
        <div className="relative">
          <div
            style={divStyle}
            className="mt-24 relative lg:px-[50px] xl:px-[70px] 2xl:[px-100px]"
          >
            <div className="flex justify-between 2xl:justify-center 2xl:space-x-16 py-28">
              <div className="space-y-10">
                <h1
                  className="text-[40px] font-semibold leading-[48px] max-w-[616px]"
                  style={clashDisplay}
                >
                  A new wave of collectibles is about to hit the blockchain.
                </h1>

                <p
                  className="text-lg leading-[27px] max-w-[616px]"
                  style={roboto}
                >
                  Characterised by soft lighting, vintage colour schemes and
                  quirky costumes, these generative 3D TinyFaces are the
                  addition to your NFT collection you’ve been waiting for.
                </p>
              </div>

              <img
                src={Spline3}
                alt="spline-3"
                className="object-cover w-[229.794px] mt-20 h-[234.118px]"
              />
            </div>
            <div
              className="absolute top-0 right-0 "
              style={topRightStyle}
            ></div>
            <div className="flex justify-between space-x-9 2xl:justify-center">
              <div className="flex flex-col w-[604px] h-[736px] bg-gradient-to-b  from-transparent to-indigo-600  bg-orange-400 bg-opacity-20 border border-orange-400 border-opacity-60">
                <div className="lg:px-5">
                  <h1
                    style={clashDisplay}
                    className="lg:text-3xl xl:text-[40px] font-medium leading-[48px] max-w-[510px] mx-auto py-16"
                  >
                    Thousands of unique NFTs
                  </h1>
                  <p style={roboto} className="leading-6 max-w-[510px] mx-auto">
                    Each character is entirely unique and is generated by
                    combining attributes such as colour palettes, skin tones,
                    facial traits, outfits and accessories. With nearly endless
                    combinations, all characters are guaranteed to be one of a
                    kind.
                  </p>
                </div>
                <img
                  src={Article1}
                  alt="article-1"
                  className="w-[604px] h-[418px] mt-[56.5px] object-cover"
                />
              </div>

              <div className="flex flex-col w-[604px] h-[736px] bg-green-500 border-green-500 border border-opacity-30 bg-opacity-20">
                <div className="lg:px-5">
                  <h1
                    style={clashDisplay}
                    className="lg:text-3xl xl:text-[40px] font-medium leading-[48px] max-w-[510px] mx-auto py-16"
                  >
                    Secure the most rare
                  </h1>
                  <p style={roboto} className="leading-6 max-w-[510px] mx-auto">
                    Even though no two Tinyfaces will ever be the same, some
                    variations are rarer than others. Watch out for special
                    accessories and raw materials - the rarer the attributes,
                    the rarer your character will be.
                  </p>
                </div>
                <img
                  src={Article2}
                  alt="article-2"
                  className="w-[604px] h-[418px] mt-[80.5px] object-cover"
                />
              </div>
            </div>

            <div className="flex justify-center mt-20">
              <div className="flex flex-col lg:px-5 xl:px-10 lg:w-[50%] 2xl:w-[620px] h-[640px] justify-center space-y-10 bg-gradient-to-b from-zinc-600 to-neutral-900">
                <h1
                  style={clashDisplay}
                  className="max-w-[520px] lg:text-3xl xl:text-[40px] font-medium leading-[48px]"
                >
                  Our environmental impact matters to us.
                </h1>
                <p style={roboto} className="max-w-[533px] leading-6">
                  In order to enable our community to spend as little as
                  possible in gas fees when minting, we opted for a contract
                  made by Azuki called ERC721A, which allows minting multiple
                  NFTs for essentially the same cost as minting a single one.
                </p>
              </div>
              <img
                src={Article3}
                alt="article-3"
                className="lg:w-[50%] 2xl:w-[620px] h-[640px] object-cover"
              />
            </div>
          </div>

          <div
            style={bottomleftStyle}
            className="mt-[-300px] left-0 bottom-0"
          ></div>
        </div>
      ) : (
        <div className="relative">
          <div style={divStyle} className="mt-10 relative ">
            <div className="flex justify-center items-center px-10 py-28">
              <div className="space-y-10">
                <h1
                  className="text-xl sm:text-2xl font-semibold "
                  style={clashDisplay}
                >
                  A new wave of collectibles is about to hit the blockchain.
                </h1>

                <p style={roboto}>
                  Characterised by soft lighting, vintage colour schemes and
                  quirky costumes, these generative 3D TinyFaces are the
                  addition to your NFT collection you’ve been waiting for.
                </p>
              </div>

              <img
                src={Spline3}
                alt="spline-3"
                className="object-cover w-[100px]  h-[120px]"
                data-aos="fade-left"
              />
            </div>
            <div
              className="absolute top-0 right-0"
              style={mobileTopRightStyle}
            ></div>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-3 md:space-x-10">
              <div className="w-[330px] bg-gradient-to-b  from-transparent to-indigo-600  bg-orange-400 bg-opacity-20 border border-orange-400 border-opacity-60">
                <div className="text-center px-5" data-aos="zoom-in">
                  <h1
                    style={clashDisplay}
                    className="text-xl sm:text-2xl font-medium  py-10"
                  >
                    Thousands of unique NFTs
                  </h1>
                  <p style={roboto}>
                    Each character is entirely unique and is generated by
                    combining attributes such as colour palettes, skin tones,
                    facial traits, outfits and accessories. With nearly endless
                    combinations, all characters are guaranteed to be one of a
                    kind.
                  </p>
                </div>
                <img
                  src={Article1}
                  alt="article-1"
                  className="w-[330px] h-[300px] mt-[50px] object-cover"
                  data-aos="zoom-in"
                />
              </div>

              <div className="w-[330px]  mt-12 sm:mt-0 bg-green-500 border-green-500 border border-opacity-30 bg-opacity-20">
                <div className="text-center px-5" data-aos="zoom-in">
                  <h1
                    style={clashDisplay}
                    className="text-xl sm:text-2xl font-medium py-10"
                  >
                    Secure the most rare
                  </h1>
                  <p style={roboto} className="sm:py-7">
                    Even though no two Tinyfaces will ever be the same, some
                    variations are rarer than others. Watch out for special
                    accessories and raw materials - the rarer the attributes,
                    the rarer your character will be.
                  </p>
                </div>
                <img
                  src={Article2}
                  alt="article-2"
                  className="w-[330px] h-[300px] mt-[50px] object-cover"
                  data-aos="zoom-in"
                />
              </div>
            </div>

            <div className="md:flex justify-center items-center mt-16">
              <div className="flex flex-col items-center md:w-[355px] justify-center space-y-10 px-10 bg-gradient-to-b from-zinc-600 to-neutral-900 h-[400px] md:h-[400px]">
                <h1
                  style={clashDisplay}
                  className="text-xl sm:text-2xl font-medium]"
                >
                  Our environmental impact matters to us.
                </h1>
                <p style={roboto}>
                  In order to enable our community to spend as little as
                  possible in gas fees when minting, we opted for a contract
                  made by Azuki called ERC721A, which allows minting multiple
                  NFTs for essentially the same cost as minting a single one.
                </p>
              </div>
              <img
                src={Article3}
                alt="article-3"
                className=" md:w-[355px] w-full h-[400px] md:h-[400px] object-cover"
              />
            </div>
          </div>

          <div
            style={mobileBottomleftStyle}
            className=" hidden mt-[-300px] md:block"
          ></div>
        </div>
      )}
    </div>
  );
};

export default Article;
