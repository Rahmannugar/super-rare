import { IconButton, useMediaQuery } from "@mui/material";
import Character1 from "../assets/character-1.png";
import Character2 from "../assets/character-2.png";
import Character3 from "../assets/character-3.png";
import Character4 from "../assets/character-4.png";

const Favorite = ({ clashDisplay }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1024px)");

  const topDivStyle = {
    borderRadius: "690px",
    opacity: "0.5",
    background:
      "linear-gradient(269deg, rgba(98, 73, 255, 0.50) 30.86%, rgba(36, 255, 0, 0.50) 89.17%)",
    filter: "blur(200px)",
    width: "690px",
    height: "568px",
  };
  return (
    <div className="text-white bg-[#18181D]">
      {isNonMobileScreens ? (
        <div className="py-24 mt-48 lg:px-[50px] xl:px-[70px] 2xl:[px-100px] h-screen relative">
          <div>
            <div style={topDivStyle} className="absolute top-0 left-0">
              hfjfyufy
            </div>
            <h1
              style={clashDisplay}
              className="text-5xl max-w-[768px] leading-[57.6px] font-semibold"
            >
              Find your favourite character
            </h1>

            <div className="flex justify-end ">
              <IconButton>
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

              <IconButton>
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
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Favorite;
