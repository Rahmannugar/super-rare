import { useMediaQuery } from "@mui/material";

const Footer = ({ clashDisplay, roboto }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1024px)");
  return (
    <div className="bg-[#131415]">
      {isNonMobileScreens ? (
        <div className="lg:px-[50px] xl:px-[70px] 2xl:[px-100px] py-32">
          <div className="text-white space-y-5">
            <h1
              className="font-semibold text-5xl leading-[57.6px]"
              style={clashDisplay}
            >
              Join the community
            </h1>
            <p style={roboto} className="leading-[27px] text-lg max-w-[616px]">
              Join our Discord channel or follow us on Twitter keep up to date
              with our latest work and announcements.
            </p>
          </div>

          <div className="flex space-x-6 py-24">
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
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Footer;
