import { useMediaQuery } from "@mui/material";

const Question = ({ clashDisplay, roboto }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1024px)");
  return (
    <div className="text-white">
      {isNonMobileScreens ? (
        <div className="py-16 lg:px-[50px] xl:px-[70px] 2xl:[px-100px]">
          <div>
            <h1
              className="text-[48px] font-semibold leading-[57.6px] max-w-[415px]"
              style={clashDisplay}
            >
              Your questions, answered.
            </h1>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Question;
