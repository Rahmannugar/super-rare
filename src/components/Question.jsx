import { useMediaQuery } from "@mui/material";
import QuestionImage from "../assets/question.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Question = ({ clashDisplay, roboto }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1024px)");

  useEffect(() => {
    AOS.init();
  }, []);

  const questionStyle = {
    background:
      "linear-gradient(260deg, #0D0F15 -4.53%, rgba(37, 16, 29, 0.00) 105.52%)",
  };
  const questionDivStyle = {
    borderradius: "460px",
    background:
      "linear-gradient(180deg, rgba(36, 255, 0, 0.12) 0%, rgba(250, 0, 255, 0.12) 62.67%, rgba(112, 0, 255, 0.12) 113.33%)",
    filter: "blur(100px)",
    width: "300px",
    height: "460px",
  };
  const mobileQuestionDivStyle = {
    borderradius: "460px",
    background:
      "linear-gradient(180deg, rgba(36, 255, 0, 0.12) 0%, rgba(250, 0, 255, 0.12) 62.67%, rgba(112, 0, 255, 0.12) 113.33%)",
    filter: "blur(100px)",
    width: "460px",
    height: "460px",
  };
  return (
    <div style={questionStyle}>
      {isNonMobileScreens ? (
        <div className="py-32 mt-36 relative">
          <div
            style={questionDivStyle}
            className="absolute top-0 right-0"
          ></div>
          <div className="flex justify-between lg:px-[50px] xl:px-[70px] 2xl:[px-100px]">
            <h1
              className="text-[48px] font-semibold leading-[57.6px] max-w-[415px] text-white"
              style={clashDisplay}
              data-aos="fade-right"
              data-aos-duration="900"
            >
              Your questions, answered.
            </h1>

            <div className="space-y-3">
              <div
                style={{ border: "1px solid #E2E2E2", padding: "20px 24px" }}
                data-aos="fade-left"
                data-aos-duration="900"
                className="h-[72px] lg:w-[400px] xl:w-[732px] flex justify-between items-center"
              >
                <h2
                  className="text-lg font-bold leading-[27px] text-[#E2E2E2]"
                  style={roboto}
                >
                  What is an NFT?
                </h2>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                    fill="#E2E2E2"
                  />
                </svg>
              </div>

              <div
                style={{ border: "1px solid #E2E2E2", padding: "20px 24px" }}
                data-aos="fade-left"
                data-aos-duration="900"
                className="h-[72px] lg:w-[400px] xl:w-[732px] flex justify-between items-center"
              >
                <h2
                  className="text-lg font-bold leading-[27px] text-[#E2E2E2]"
                  style={roboto}
                >
                  What makes our NFT special?
                </h2>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                    fill="#E2E2E2"
                  />
                </svg>
              </div>

              <div
                style={{ border: "1px solid #E2E2E2", padding: "20px 24px" }}
                data-aos="fade-left"
                data-aos-duration="900"
                className="h-[72px] lg:w-[400px] xl:w-[732px] flex justify-between items-center"
              >
                <h2
                  className="text-lg font-bold leading-[27px] text-[#E2E2E2]"
                  style={roboto}
                >
                  Who’s the team behind our NFT?
                </h2>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                    fill="#E2E2E2"
                  />
                </svg>
              </div>

              <div
                style={{ border: "1px solid #E2E2E2", padding: "20px 24px" }}
                data-aos="fade-left"
                data-aos-duration="900"
                className="h-[72px] lg:w-[400px] xl:w-[732px] flex justify-between items-center"
              >
                <h2
                  className="text-lg font-bold leading-[27px] text-[#E2E2E2]"
                  style={roboto}
                >
                  When does minting begin?
                </h2>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                    fill="#E2E2E2"
                  />
                </svg>
              </div>

              <div
                style={{ border: "1px solid #E2E2E2", padding: "20px 24px" }}
                data-aos="fade-left"
                data-aos-duration="900"
                className="h-[72px] lg:w-[400px] xl:w-[732px] flex justify-between items-center"
              >
                <h2
                  className="text-lg font-bold leading-[27px] text-[#E2E2E2]"
                  style={roboto}
                >
                  Who can mint one?
                </h2>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                    fill="#E2E2E2"
                  />
                </svg>
              </div>
            </div>
          </div>

          <img
            src={QuestionImage}
            alt="question-image"
            className="h-[371px] mt-[-100px] w-[502px] 2xl:w-[682.728px] lg:mt-[-250px] ml-[-70px] object-contain"
          />
        </div>
      ) : (
        <div className="py-32 mt-28 relative">
          <div
            style={mobileQuestionDivStyle}
            className="absolute top-0 right-0"
          ></div>
          <div className="">
            <h1
              className="text-xl sm:text-2xl text-center font-semibold text-white"
              style={clashDisplay}
            >
              Your questions, answered.
            </h1>

            <div className="space-y-3 flex flex-col justify-center items-center pt-10">
              <div
                style={{ border: "1px solid #E2E2E2", padding: "20px 24px" }}
                data-aos="fade-right"
                data-aos-duration="900"
                className="h-[72px] w-[350px] sm:w-[500px] flex justify-between items-center"
              >
                <h2
                  className="sm:text-lg font-bold  text-[#E2E2E2]"
                  style={roboto}
                >
                  What is an NFT?
                </h2>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                    fill="#E2E2E2"
                  />
                </svg>
              </div>

              <div
                style={{ border: "1px solid #E2E2E2", padding: "20px 24px" }}
                data-aos="fade-left"
                data-aos-duration="900"
                className="h-[72px] w-[350px] sm:w-[500px] flex justify-between items-center"
              >
                <h2
                  className="sm:text-lg font-bold  text-[#E2E2E2]"
                  style={roboto}
                >
                  What makes our NFT special?
                </h2>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                    fill="#E2E2E2"
                  />
                </svg>
              </div>

              <div
                style={{ border: "1px solid #E2E2E2", padding: "20px 24px" }}
                data-aos="fade-right"
                data-aos-duration="900"
                className="h-[72px] w-[350px] sm:w-[500px] flex justify-between items-center"
              >
                <h2
                  className="sm:text-lg font-bold  text-[#E2E2E2]"
                  style={roboto}
                >
                  Who’s the team behind our NFT?
                </h2>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                    fill="#E2E2E2"
                  />
                </svg>
              </div>

              <div
                style={{ border: "1px solid #E2E2E2", padding: "20px 24px" }}
                data-aos="fade-left"
                data-aos-duration="900"
                className="h-[72px] w-[350px] sm:w-[500px] flex justify-between items-center"
              >
                <h2
                  className="sm:text-lg font-bold  text-[#E2E2E2]"
                  style={roboto}
                >
                  When does minting begin?
                </h2>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                    fill="#E2E2E2"
                  />
                </svg>
              </div>

              <div
                style={{ border: "1px solid #E2E2E2", padding: "20px 24px" }}
                data-aos="fade-right"
                data-aos-duration="900"
                className="h-[72px] w-[350px] sm:w-[500px] flex justify-between items-center"
              >
                <h2
                  className="sm:text-lg font-bold  text-[#E2E2E2]"
                  style={roboto}
                >
                  Who can mint one?
                </h2>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M25.3336 15.667V16.3336C25.3336 16.7018 25.0352 17.0003 24.667 17.0003H17.0003V24.667C17.0003 25.0351 16.7018 25.3336 16.3336 25.3336H15.667C15.2988 25.3336 15.0003 25.0351 15.0003 24.667V17.0003H7.33366C6.96547 17.0003 6.66699 16.7018 6.66699 16.3336V15.667C6.66699 15.2988 6.96547 15.0003 7.33366 15.0003H15.0003V7.33365C15.0003 6.96546 15.2988 6.66699 15.667 6.66699H16.3336C16.7018 6.66699 17.0003 6.96546 17.0003 7.33365V15.0003H24.667C25.0352 15.0003 25.3336 15.2988 25.3336 15.667Z"
                    fill="#E2E2E2"
                  />
                </svg>
              </div>
            </div>
          </div>
          <img
            src={QuestionImage}
            alt="question-image"
            className="h-[371px] mt-[-30px]  w-[371px]   object-contain"
            data-aos="fade-left"
            data-aos-duration="700"
          />
        </div>
      )}
    </div>
  );
};

export default Question;
