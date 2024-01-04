import { useMediaQuery } from "@mui/material";
import Character1 from "../assets/character-1.png";
import Character2 from "../assets/character-2.png";
import Character3 from "../assets/character-3.png";
import Character4 from "../assets/character-4.png";

const Favorite = ({ clashDisplay }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1024px)");
  return (
    <div className="text-white">
      {isNonMobileScreens ? (
        <div className="py-16">
          <div>
            <h1
              style={clashDisplay}
              className="text-5xl max-w-[768px] leading-[57.6px] font-semibold"
            >
              Find your favourite character
            </h1>

            <div className="flex justify-end">
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
