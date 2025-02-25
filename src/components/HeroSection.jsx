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

            {/* <style>{`
                @keyframes moveBall {
                    0% { transform: translate(166px, 134px) rotate(0deg); }
      1% { transform: translate(161px, 129px) rotate(36deg); }
      2% { transform: translate(156px, 124px) rotate(72deg); }
      3% { transform: translate(151px, 119px) rotate(108deg); }
      4% { transform: translate(146px, 114px) rotate(144deg); }
      5% { transform: translate(141px, 109px) rotate(180deg); }
      6% { transform: translate(136px, 104px) rotate(216deg); }
      7% { transform: translate(131px, 99px) rotate(252deg); }
      8% { transform: translate(126px, 94px) rotate(288deg); }
      9% { transform: translate(121px, 91px) rotate(324deg); }
      10% { transform: translate(116px, 89px) rotate(360deg); }
      11% { transform: translate(111px, 86px) rotate(396deg); }
      12% { transform: translate(106px, 84px) rotate(432deg); }
      13% { transform: translate(101px, 86px) rotate(468deg); }
      14% { transform: translate(96px, 89px) rotate(504deg); }
      15% { transform: translate(91px, 91px) rotate(540deg); }
      16% { transform: translate(86px, 94px) rotate(576deg); }
      17% { transform: translate(81px, 99px) rotate(612deg); }
      18% { transform: translate(76px, 104px) rotate(648deg); }
      19% { transform: translate(71px, 109px) rotate(684deg); }
      20% { transform: translate(66px, 114px) rotate(720deg); }
      21% { transform: translate(61px, 119px) rotate(756deg); }
      22% { transform: translate(56px, 124px) rotate(792deg); }
      23% { transform: translate(51px, 129px) rotate(828deg); }
      24% { transform: translate(46px, 134px) rotate(864deg); }
      25% { transform: translate(51px, 139px) rotate(900deg); }
      26% { transform: translate(56px, 144px) rotate(936deg); }
      27% { transform: translate(61px, 149px) rotate(972deg); }
      28% { transform: translate(66px, 154px) rotate(1008deg); }
      29% { transform: translate(71px, 159px) rotate(1044deg); }
      30% { transform: translate(76px, 164px) rotate(1080deg); }
      31% { transform: translate(81px, 169px) rotate(1116deg); }
      32% { transform: translate(86px, 174px) rotate(1152deg); }
      33% { transform: translate(91px, 177px) rotate(1188deg); }
      34% { transform: translate(96px, 179px) rotate(1224deg); }
      35% { transform: translate(101px, 182px) rotate(1260deg); }
      36% { transform: translate(106px, 184px) rotate(1296deg); }
      37% { transform: translate(111px, 182px) rotate(1332deg); }
      38% { transform: translate(116px, 179px) rotate(1368deg); }
      39% { transform: translate(121px, 177px) rotate(1404deg); }
      40% { transform: translate(126px, 174px) rotate(1440deg); }
      41% { transform: translate(131px, 169px) rotate(1476deg); }
      42% { transform: translate(136px, 164px) rotate(1512deg); }
      43% { transform: translate(141px, 159px) rotate(1548deg); }
      44% { transform: translate(146px, 154px) rotate(1584deg); }
      45% { transform: translate(151px, 149px) rotate(1620deg); }
      46% { transform: translate(156px, 144px) rotate(1656deg); }
      47% { transform: translate(161px, 139px) rotate(1692deg); }
      48% { transform: translate(166px, 134px) rotate(1728deg); }
      49% { transform: translate(171px, 129px) rotate(1764deg); }
      50% { transform: translate(176px, 124px) rotate(1800deg); }
      51% { transform: translate(181px, 119px) rotate(1836deg); }
      52% { transform: translate(186px, 114px) rotate(1872deg); }
      53% { transform: translate(191px, 109px) rotate(1908deg); }
      54% { transform: translate(196px, 104px) rotate(1944deg); }
      55% { transform: translate(201px, 99px) rotate(1980deg); }
      56% { transform: translate(206px, 94px) rotate(2016deg); }
      57% { transform: translate(211px, 91px) rotate(2052deg); }
      58% { transform: translate(216px, 89px) rotate(2088deg); }
      59% { transform: translate(221px, 86px) rotate(2124deg); }
      60% { transform: translate(226px, 84px) rotate(2160deg); }
      61% { transform: translate(231px, 86px) rotate(2196deg); }
      62% { transform: translate(236px, 89px) rotate(2232deg); }
      63% { transform: translate(241px, 91px) rotate(2268deg); }
      64% { transform: translate(246px, 94px) rotate(2304deg); }
      65% { transform: translate(251px, 99px) rotate(2340deg); }
      66% { transform: translate(256px, 104px) rotate(2376deg); }
      67% { transform: translate(261px, 109px) rotate(2412deg); }
      68% { transform: translate(266px, 114px) rotate(2448deg); }
      69% { transform: translate(271px, 119px) rotate(2484deg); }
      70% { transform: translate(276px, 124px) rotate(2520deg); }
      71% { transform: translate(281px, 129px) rotate(2556deg); }
      72% { transform: translate(286px, 134px) rotate(2592deg); }
      73% { transform: translate(281px, 139px) rotate(2628deg); }
      74% { transform: translate(276px, 144px) rotate(2664deg); }
      75% { transform: translate(271px, 149px) rotate(2700deg); }
      76% { transform: translate(266px, 154px) rotate(2736deg); }
      77% { transform: translate(261px, 159px) rotate(2772deg); }
      78% { transform: translate(256px, 164px) rotate(2808deg); }
      79% { transform: translate(251px, 169px) rotate(2844deg); }
      80% { transform: translate(246px, 174px) rotate(2880deg); }
      81% { transform: translate(241px, 177px) rotate(2916deg); }
      82% { transform: translate(236px, 179px) rotate(2952deg); }
      83% { transform: translate(231px, 182px) rotate(2988deg); }
      84% { transform: translate(226px, 184px) rotate(3024deg); }
      85% { transform: translate(221px, 182px) rotate(3060deg); }
      86% { transform: translate(216px, 179px) rotate(3096deg); }
      87% { transform: translate(211px, 177px) rotate(3132deg); }
      88% { transform: translate(206px, 174px) rotate(3168deg); }
      89% { transform: translate(201px, 169px) rotate(3204deg); }
      90% { transform: translate(196px, 164px) rotate(3240deg); }
      91% { transform: translate(191px, 159px) rotate(3276deg); }
      92% { transform: translate(186px, 154px) rotate(3312deg); }
      93% { transform: translate(181px, 149px) rotate(3348deg); }
      94% { transform: translate(176px, 144px) rotate(3384deg); }
      95% { transform: translate(171px, 139px) rotate(3420deg); }
      96% { transform: translate(166px, 134px) rotate(3456deg); }
      97% { transform: translate(166px, 134px) rotate(3492deg); }
      98% { transform: translate(166px, 134px) rotate(3528deg); }
      99% { transform: translate(166px, 134px) rotate(3564deg); }
      100% { transform: translate(166px, 134px) rotate(3600deg); }
                }
  
                .animate-infinity-path {
                  animation: moveBall 20s infinite linear;
                  position: absolute;
                  top: 0;
                  left: 0;
                }
                  @keyframes rotateBall {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
  
                .animate-rotate {
                  animation: rotateBall 0.1s infinite linear;
                }
              `}</style> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
