import { useState, useEffect } from "react";
import laptop from "../assets/images/laptop.svg";
import PropTypes from "prop-types";


function LandingPage() {

    const StatItem = ({ value, label }) => (
        <div className="text-center flex-1">
            <div className="text-white text-[10px] md:text-2xl md:mb-4">{label}</div>
            <div className="text-[#00ebff] text-[14px] md:text-7xl md:mb-4 font-semibold">{value}</div>
        </div>
    );

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768; // Change image based on screen size

  return (
    <div className="bg-[#01132e] min-h-[65vh] md:min-h-screen pb-3 md:p-2 ">
      <div
        className="relative md:mx-15 md:h-185 flex flex-col md:flex-row md:items-center md:justify-start md:pl-20 px-4 md:px-0 sm:flex-row-reverse "
        style={{
          backgroundImage: isMobile ? "none" : `url(${laptop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Text Section */}
        <div className="pt-7 md:pt-0 md:pl-3 z-0 text-left w-full md:w-auto flex flex-col items-start">
          <h1 className="text-white font-bold text-3xl leading-tight md:text-[60px] md:leading-[1.2]">
            Web & Mobile App <br />
            Development <br />
            Company
          </h1>

          {/* Get Started Button */}
          <div className="flex justify-start mt-6 md:mt-25">
            <button className="md:w-60 w-30 sm:mt-10 bg-gradient-to-r from-[#F47B55] to-[#FF3D00] text-white text-sm sm:text-3xl py-1 px-0.5 sm:py-3 sm:px-2 border-b-4 border-[#701d04] font-bold rounded-xl transform transition-all duration-200 hover:-translate-y-1 hover:border-b-[5px] active:translate-y-0 active:border-b-4">
              GET STARTED
            </button>
          </div>
        </div>

        {/* Show Image Only on Mobile */}
        {isMobile && (
          <div className="w-full flex justify-end">
            <img src={laptop} alt="Laptop" className="w-[90%] max-w-[300px] h-auto" />
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="w-[95%] md:w-[80%] mx-auto bg-[#01132e] rounded-2xl border-[#00ebff] border-[2px] p-3 z-0 md:mt-0">
        <div className="flex flex-wrap justify-between items-center gap-1 md:gap-0">
          <StatItem value="100+" label="Successful Projects" />
          <StatItem value="80%" label="Repeated Client" />
          <StatItem value="9+" label="Years in Industry" />
        </div>
      </div>
    </div>
  );
}

LandingPage.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default LandingPage;
