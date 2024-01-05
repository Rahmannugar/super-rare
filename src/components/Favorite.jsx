import { IconButton, useMediaQuery } from "@mui/material";
import Character1 from "../assets/character-1.png";
import Character2 from "../assets/character-2.png";
import Character3 from "../assets/character-3.png";
import Character4 from "../assets/character-4.png";
import { useState } from "react";

const Favorite = ({ clashDisplay }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1024px)");
  const [currentPosition, setCurrentPosition] = useState(0);
  const [overFlow, setOverFlow] = useState("overflow-x-hidden");

  const handleLeft = () => {
    setCurrentPosition((prevPosition) => Math.max(prevPosition - 1, 0));
    if (currentPosition === 1) {
      setOverFlow("overflow-x-hidden");
    }
  };

  const handleRight = () => {
    const totalImages = 4;
    setCurrentPosition((prevPosition) =>
      Math.min(prevPosition + 1, totalImages - 1)
    );
    setOverFlow("overflow-x-visible");
  };

  const topDivStyle = {
    borderRadius: "690px",
    opacity: "0.5",
    background:
      "linear-gradient(269deg, rgba(98, 73, 255, 0.50) 30.86%, rgba(36, 255, 0, 0.50) 89.17%)",
    filter: "blur(200px)",
    width: "690px",
    height: "568px",
  };

  const mobileTopDivStyle = {
    borderRadius: "690px",
    opacity: "0.5",
    background:
      "linear-gradient(269deg, rgba(98, 73, 255, 0.50) 30.86%, rgba(36, 255, 0, 0.50) 89.17%)",
    filter: "blur(200px)",
    width: "300px",
    height: "458px",
  };
  return (
    <div className="text-white bg-[#18181D]">
      {isNonMobileScreens ? (
        <div className="py-24 mt-48 lg:px-[50px] xl:px-[70px] 2xl:[px-100px] ">
          <div className="relative">
            <div style={topDivStyle} className="absolute top-0 left-0"></div>
            <h1
              style={clashDisplay}
              className="text-5xl max-w-[768px] leading-[57.6px] font-semibold"
            >
              Find your favourite character
            </h1>
            <div className="flex justify-end ">
              <IconButton onClick={handleLeft}>
                <div className="border border-white rounded-[50px] flex justify-center items-center h-[48px] w-[48px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </IconButton>

              <IconButton onClick={handleRight}>
                <div className="border border-white rounded-[50px] flex justify-center items-center h-[48px] w-[48px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </IconButton>
            </div>

            <div
              className={`${overFlow} flex lg:space-x-5 xl:space-x-10 mt-10 transition-transform duration-500 ease-in-out`}
              style={{
                transform: `translateX(-${currentPosition * 100}%)`,
              }}
            >
              <div className="flex-shrink-0 bg-[#F4DACC] h-[422.813px] w-[390px] flex items-end justify-center">
                <img
                  src={Character1}
                  alt="character-1"
                  className="w-[340px] h-[340px]"
                />
              </div>
              <div className="flex-shrink-0 bg-[#C4EEE1] h-[422.813px] w-[390px] flex items-end justify-center">
                <img
                  src={Character2}
                  alt="character-2"
                  className="w-[340px] h-[340px]"
                />
              </div>
              <div className="flex-shrink-0 bg-[#D9BEF2] h-[422.813px] w-[390px] flex items-end justify-center">
                <img
                  src={Character3}
                  alt="character-3"
                  className="w-[340px] h-[340px]"
                />
              </div>
              <div className="flex-shrink-0 bg-[#F4F3CA] h-[422.813px] w-[390px] flex items-end justify-center">
                <img
                  src={Character4}
                  alt="character-4"
                  className="w-[340px] h-[340px]"
                />
              </div>
            </div>

            <div className="mt-28">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="8"
                viewBox="0 0 88 8"
                fill="none"
              >
                <circle cx="4" cy="4" r="4" fill="white" />
                <circle cx="20" cy="4" r="4" fill="#8D8D8D" />
                <circle cx="36" cy="4" r="4" fill="#8D8D8D" />
                <circle cx="52" cy="4" r="4" fill="#8D8D8D" />
                <circle cx="68" cy="4" r="4" fill="#8D8D8D" />
                <circle cx="84" cy="4" r="4" fill="#8D8D8D" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-16 mt-24 px-10">
          <div className="relative">
            <div
              style={mobileTopDivStyle}
              className="absolute top-0 left-0"
            ></div>
            <h1
              style={clashDisplay}
              className="text-xl sm:text-2xl font-semibold"
            >
              Find your favourite character
            </h1>
            <div className="flex mt-3 justify-end ">
              <IconButton onClick={handleLeft}>
                <div className="border border-white rounded-full flex justify-center items-center h-[30px] w-[30px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </IconButton>

              <IconButton onClick={handleRight}>
                <div className="border border-white rounded-full flex justify-center items-center h-[30px] w-[30px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </IconButton>
            </div>

            <div
              className={`${overFlow} flex space-x-4 mt-10 transition-transform duration-500 ease-in-out`}
              style={{
                transform: `translateX(-${currentPosition * 100}%)`,
              }}
            >
              <div className="flex-shrink-0 bg-[#F4DACC] h-[250px] w-[200px] flex items-end justify-center">
                <img
                  src={Character1}
                  alt="character-1"
                  className="w-[180px] h-[180px]"
                />
              </div>
              <div className="flex-shrink-0 bg-[#C4EEE1] h-[250px] w-[200px] flex items-end justify-center">
                <img
                  src={Character2}
                  alt="character-2"
                  className="w-[180px] h-[180px]"
                />
              </div>
              <div className="flex-shrink-0 bg-[#D9BEF2] h-[250px] w-[200px] flex items-end justify-center">
                <img
                  src={Character3}
                  alt="character-3"
                  className="w-[180px] h-[180px]"
                />
              </div>
              <div className="flex-shrink-0 bg-[#F4F3CA] h-[250px] w-[200px] flex items-end justify-center">
                <img
                  src={Character4}
                  alt="character-4"
                  className="w-[180px] h-[180px]"
                />
              </div>
            </div>

            <div className="mt-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="8"
                viewBox="0 0 88 8"
                fill="none"
              >
                <circle cx="4" cy="4" r="4" fill="white" />
                <circle cx="20" cy="4" r="4" fill="#8D8D8D" />
                <circle cx="36" cy="4" r="4" fill="#8D8D8D" />
                <circle cx="52" cy="4" r="4" fill="#8D8D8D" />
                <circle cx="68" cy="4" r="4" fill="#8D8D8D" />
                <circle cx="84" cy="4" r="4" fill="#8D8D8D" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorite;
