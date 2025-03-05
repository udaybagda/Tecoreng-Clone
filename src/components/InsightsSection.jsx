import { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

import ti1 from "../assets/images/ti-1.jpg"
import ti2 from "../assets/images/ti-2.webp"
import ti3 from "../assets/images/ti-3.jpg"
import ti4 from "../assets/images/ti-4.webp"
import ti5 from "../assets/images/ti-5.webp"
import ti6 from "../assets/images/ti-6.webp"

function InsightsSection() {
  const insights = [
    {
      title: "Deliver Business Results More Quickly With Hybrid Cloud Services",
      description:
        "It is now possible to move between a private, in-house cloud and a public cloud provided by a third party. This arrangement’s flexibility enables organizations to effectively govern their data. An on-site, private data center and a public cloud are typically connected to create a hybrid cloud. Personal assets like additional clouds, edge devices, etc. ...",
      img_url: ti1,
      date: "14-07-2022",
      author: "Paresh Solanki",
    },
    {
      title: "Top Trends in AI and ML Reshaping the world of 2024",
      description:
        "Brief Overview of AI and ML In the realm of technology, two groundbreaking forces are poised to shape our future: Artificial Intelligence (AI) and Machine Learning (ML). AI, the intelligence demonstrated by machines, and ML, the ability of machines to learn from data, stand as the vanguards of a digital revolution. These technologies are not ...",
      img_url: ti2,
      date: "25-01-2024",
      author: "Tecoreng",
    },
    {
      title: "What Is DevOps? and 7 Types Of DevOps Tool",
      description:
        "What Is DevOps? That is a combination of practices that merge software development and IT operations. That is much faster than the traditional software development process—the tools and design to increase an organization’s ability to deliver applications and quick services. Tecoreng release in simple terms, DevOps is about breaking down the walls that have traditionally ...",
      img_url: ti3,
      date: "20-01-2023",
      author: "Paresh Solanki",
    },
    {
      title:
        "React Native For Web: Knowing everything, from the basics to the experts",
      description:
        "React Native for Web: Building Cross-Platform Applications is a dynamic and avant-garde approach to contemporary app development that has altered the way developers produce cross-platform applications. React Native for online is emerging as a potent toolkit that bridges the gap between online and mobile development in response to the constantly increasing need for unified user ...",
      img_url: ti4,
      date: "06-10-2023",
      author: "Paresh Solanki",
    },
    {
      title: "What Is DevOps? Top DevOps Trends 2023",
      description:
        "Within the context of contemporary software development and IT operations, DevOps is a critical and revolutionary methodology. The very phrase “DevOps” is a combination of the words “development” and “operations,” signifying the fundamental idea of merging these two historically distinct fields. DevOps is a cultural movement that strives to promote cooperation, communication, and automation between ...",
      img_url: ti5,
      date: "17-10-2023",
      author: "Paresh Solanki",
    },
    {
      title: "The Impact of Artificial Intelligence on Digital Transformation",
      description:
        "Introduction Artificial intelligence (AI) refers to the simulation of human intelligence processes by machines, especially computer systems. These processes involve lea33rning (acquisition of information and rules for using information), reasoning (using rules to arrive at approximate or definite conclusions), and self-correction. Definition of Digital Transformation Digital transformation is the integration of digital technologies across all […]",
      img_url: ti6,
      date: "15-03-2024",
      author: "Tecoreng",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  let [slideWidth, SetSlideWidth] = useState(350);
  const carouselRef = useRef(null);

  const slidesToShow = 2;

  useEffect(() => {
    if (window.innerWidth < 600) {
      SetSlideWidth(300);
    }
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % (insights.length - prev));
      }, 2000);

      return () => clearInterval(timer);
    }
  }, [isPaused, insights.length]);

  useEffect(() => {
    if (window.innerWidth < 600) {
      slideWidth = 300;
    }
    carouselRef.current.style.transform = `translateX(-${
      activeSlide * (slideWidth + 16)
    }px)`;
  }, [activeSlide]);

  const handleDragStop = (e, data) => {
    const newSlide = Math.round(data.lastX / slideWidth) % insights.length;
    setActiveSlide(newSlide);
  };

  return (
    <section className="items-center h-[650px] sm:h-[850px] px-4 bg-[#01132e] text-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl pl-16 pb-2 sm:pb-6 md:text-5xl leading-[54px] md:leading-[84px] text-shadow text-shadow-custom md:text-left">
          Tecoreng insights
        </h2>
        <div
          className="relative h-full w-[350px] sm:w-[1100px] mx-auto px-4 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Draggable
            nodeRef={carouselRef} // Use nodeRef instead of relying on findDOMNode
            axis="x"
            bounds={{
              left: -((insights.length - slidesToShow) * slideWidth),
              right: 0,
            }}
            onStop={handleDragStop}
          >
            <div
              ref={carouselRef}
              className="flex mt-5 h-full space-x-4 transition-transform duration-500 ease-in-out"
            >
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="bg-[#112542] w-[300px] sm:w-[350px] rounded-[17px] h-full flex-shrink-0 relative overflow-hidden text-white"
                >
                  <div className="relative h-full z-10 w-[300px] sm:w-[350px] sm:h-[650px] flex flex-col">
                    <div className="h-[230px] w-full">
                      <img
                        src={insight.img_url}
                        className="h-full w-full object-cover"
                        alt={insight.title}
                      />
                    </div>
                    <div className="py-2 px-3 text-center">
                      <h3 className="text-[18px] font-bold p-4">
                        {insight.title}
                      </h3>
                      <p className="text-[12px] text-[#9ca3af] leading-[20px] mb-2">
                        {insight.date} - {insight.author}
                      </p>
                      <p className="text-white text-[12px] sm:text-[14px] sm:leading-[20px]">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Draggable>
        </div>
      </div>
    </section>
  );
}

export default InsightsSection;
