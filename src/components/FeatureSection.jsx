import s1 from "../assets/images/s-1.webp";
import s2 from "../assets/images/s-2.webp";
import s3 from "../assets/images/s-3.webp";
import s4 from "../assets/images/s-4.webp";

function FeatureSection() {
    const features_with_images = [
        {
            imageUrl: s1, // ✅ Use imported image
            title: "Reporting & Analysis",
          },
          {
            imageUrl: s2,
            title: "On-Time Delivery",
          },
          {
            imageUrl: s3,
            title: "Seamless Communication",
          },
          {
            imageUrl: s4,
            title: "Post Launch Support",
          }
    ];

    const features_text = [
        {
            title: 'Agile Methodology',
        },
        {
            title: 'Certified Experts',
        },
        {
            title: 'Budget Friendly',
        },
        {
            title: '100% Client Expectation',
        },
    ];

    return (
        <section className="items-center px-4 sm:px-30 py-5 sm:py-10 bg-[#112542] text-white">
            <div className="container">
                <h2 className="container p-0 text-2xl sm:text-[50px] tracking-[5px] leading-[1.2] uppercase" style={{
                    "-webkit-text-stroke": "1px white",
                    color: "transparent"
                }}>
                    Why Tecoreng for your next project
                </h2>
                <p className="text-[12px] sm:text-[16px] leading-5 sm:leading-7 sm:mr-[200px] pt-4 sm:pt-8 ">
                    Introducing Technical Core Engineers (TCE), the intersection of technology
                    and innovation. At TCE, we excel in delivering exceptional IT services customized
                    to fulfill your development requirements. Harnessing our expertise and enthusiasm,
                    we breathe life into your ideas. Backed by a team of seasoned developers with
                    extensive knowledge in various programming technologies, our dedication is unwavering,
                    ensuring the delivery of outstanding results. Our mission is straightforward: decode
                    the language of binary and transform it into extraordinary digital solutions that
                    empower your business.
                </p>
                <button className="w-35 sm:w-60 mt-6 sm:mt-8 bg-gradient-to-r from-[#F47B55] to-[#FF3D00] text-white text-sm sm:text-3xl py-1 sm:py-3 sm:px-2 border-b-4 border-[#701d04] font-bold rounded-lg sm:rounded-xl transform transition-all duration-200 hover:-translate-y-1 hover:border-b-[5px] active:translate-y-0 active:border-b-4">
                    GET IN TOUCH
                </button>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 pt-8 sm:pt-15">
                    {features_with_images.map((feature, index) => (
                        <div
                            key={index}
                            className="h-[100px] sm:h-[130px] rounded-[17px] bg-[#112542] p-3 sm:p-6 flex flex-col items-center justify-center text-center border border-transparent shadow-lg"
                            style={{
                                "boxShadow": "rgb(1, 19, 46) 0px 12px 17px",
                                "background": "linear-gradient(rgb(17, 37, 66), rgb(17, 37, 66)) padding-box padding-box, linear-gradient(rgba(255, 255, 255, 0.58) 0px, rgba(1, 19, 46, 0) 100%) border-box border-box"
                            }}
                        >
                            <div className="mb-2 sm:mb-4">
                                <img
                                    src={feature.imageUrl}
                                    alt={feature.title}
                                    className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
                                />
                            </div>
                            <h3 className="text-white text-xs sm:text-lg font-normal">
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                    
                    {features_text.map((feature, index) => (
                        <div
                            key={index}
                            className="h-[100px] sm:h-[130px] mt-3 sm:mt-8 rounded-[17px] bg-[#112542] p-3 sm:p-6 flex flex-col items-center justify-center text-center border border-transparent shadow-lg"
                            style={{
                                "boxShadow": "rgb(1, 19, 46) 0px 12px 17px",
                                "background": "linear-gradient(rgb(17, 37, 66), rgb(17, 37, 66)) padding-box padding-box, linear-gradient(rgba(255, 255, 255, 0.58) 0px, rgba(1, 19, 46, 0) 100%) border-box border-box"
                            }}
                        >
                            <h3 className="text-white text-xs sm:text-lg font-medium">
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeatureSection