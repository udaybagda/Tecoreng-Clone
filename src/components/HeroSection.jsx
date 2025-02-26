import infinity from "../assets/images/infinity.png";
import ballImage from "../assets/images/ball.webp";

const HeroSection = () => {
  return (
    <div className="relative min-h-[550px] md:min-h-screen bg-[#112542] text-white sm:px-5 flex items-center">
      <div className="mx-auto md:max-w-7xl pl-[15px] md:pl-13">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 md:p-5">
            <h2 className="text-[24px] tracking-tight leading-[30px] sm:text-[45px] font-normal md:leading-tight">
              Transfer your enterprise
              <br />
              with digital innovation
            </h2>

            <p className="text-xs leading-[20px] sm:text-[16px] text-white-300 md:leading-[28px] max-w-xl pb-0.5">
              Your success as a market innovator reflects our strides as a
              unified partner. Committed to assisting you in attaining
              excellence through our solutions, we boast a team of adept
              professionals and dynamic facilitators. Our steadfast commitment
              to a collaborative strategy, coupled with agile methodologies,
              propels business expansion. Rely on our strategic insights and
              development processes, and we will fuel your concepts to manifest
              as groundbreaking disruptions.
            </p>

            <button className="sm:w-50 w-30 bg-gradient-to-r from-[#F47B55] to-[#FF3D00] text-white text-sm sm:text-3xl py-1 px-0.5 sm:py-3 sm:px-2 border-b-4 border-[#701d04] font-bold rounded-[8px] md:rounded-xl transform transition-all duration-200 hover:-translate-y-1 hover:border-b-[5px] active:translate-y-0 active:border-b-4">
              HIRE NOW
            </button>
          </div>

          {/* Right Content - Infinity Image with Animated Ball */}
          <div className="relative h-[150px] w-[340px] md:h-[300px] md:w-[400px]">
            {/* Background Infinity Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${infinity})` }}
            />

            {/* Animated Ball */}
            <div className="rotateBall invisible sm:visible">
              <img
                src={ballImage} // ✅ Use imported image
                alt="Moving ball"
                className="absolute h-[35px] animate-infinity-path"
              />
            </div>
            <style>
              {`
                @keyframes moveBall {
                    0% { transform: translate(166px, 134px) rotate(0deg); }
                    25% { transform: translate(76px, 164px) rotate(900deg); }
                    50% { transform: translate(176px, 124px) rotate(1800deg); }
                    75% { transform: translate(256px, 164px) rotate(2700deg); }
                    100% { transform: translate(166px, 134px) rotate(3600deg); }
                }

                .animate-infinity-path {
                  animation: moveBall 0.001s infinite linear;
                  position: absolute;
                  top: 0;
                  left: 0;
                }
                @keyframes rotateBall {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }

                .animate-rotate {
                  animation: rotateBall 0.1s infinite linear
                }
                `}
            </style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
