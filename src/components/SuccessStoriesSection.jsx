
import pi1 from "../assets/images/pi-1.webp";
import pi2 from "../assets/images/pi-2.webp";
import pi3 from "../assets/images/pi-3.webp";

import pv1 from "../assets/video/pv-1.mp4";
import pv2 from "../assets/video/pv-2.mp4";
import pv3 from "../assets/video/pv-3.mp4";

function SuccessStoriesSection() {
    const stories = [
        {
            title: 'Betting Platform',
            description: "Tecoreng's Online Betting Platform revolutionizes how enthusiasts engage with betting, offering seamless experiences across sports, esports, casino games, and more.",
            img_url: pi1,
            video_url: pv1
        },
        {
            title: 'Health and Wellness',
            description: "Excitement fills the air as we proudly unveil our Health and Wellness Platform—a pivotal portal toward maximizing your health journey.",
            img_url: pi2,
            video_url: pv2
        },
        {
            title: 'An E- Commerce',
            description: "Delve into the world of our custom-designed Ecommerce Platform, a true testament to Tecoreng's meticulous craftsmanship.",
            img_url: pi3,
            video_url: pv3
        },
    ];
  return (
    <> 
    <section className="items-center h-auto md:h-[670px] px-5 md:px-30 bg-[#01132e] text-white">
        <div className="container pt-10">
            <h2 className="text-3xl md:text-5xl leading-[54px] md:leading-[84px] text-shadow text-shadow-custom text-center md:text-left">Our Success Stories</h2>
            <div className="flex flex-col md:flex-row mt-5 space-y-5 md:space-y-0 md:space-x-4 items-center md:items-stretch">
                {stories.map((story, index) => (
                    <div key={index}
                    className="bg-[#112542] p-4 md:p-0 group rounded-[17px] h-auto md:h-[490px] w-full md:w-[350px] flex flex-col relative overflow-hidden text-white"
                    >
                        {/* Content Container */}
                        <div className="relative z-10 flex flex-col h-full">
                            <div className='h-[230px] md:h-[330px] w-full md:w-[350px]'>
                                <img src={story.img_url} className='h-full w-full visible group-hover:hidden' alt="" />
                                <video src= {story.video_url} loop muted autoPlay className='h-full w-full object-cover invisible group-hover:visible'></video>
                            </div>

                            <div className="pt-5 md:py-2 px-3 md:px-5 text-left">
                                <h3 className="text-[18px] md:text-[22px] font-normal pb-2">
                                    {story.title}
                                </h3>
                                <p className="text-white text-[12px] md:text-[12px] leading-[20px] md:leading-[25px]">
                                    {story.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default SuccessStoriesSection