import { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";

function AppreciationSection() {
  const testimonials = [
    {
      name: "Juan S Ortiz Salazar",
      role: "Acme Corp",
      text: "They were honest about their abilities from the beginning, have fantastic communication skills, and are overall a dream to work with. Myself and my team felt beyond confident of their abilities and that they were doing the work on a week to week basis just as they stated they would. I will definitely be looking to hiring Tecoreng first before considering anyone else on Upwork!!",
    },
    {
      name: "Tim Loenders",
      role: "BPOS LOENDERS GCV",
      text: "Paresh worked out the infrastructure topology and did a fine job on that. He gave me insights about how to tackle setup that I did not have which saved the project time and money.",
    },
    {
      name: "Denis Cartin",
      role: "CTO, SoSFba",
      text: "They have good timing and quality in task solving. Their project management was outstanding. Always delivered on time and quickly replied to our needs and demands. The Communication was effective and running smoothly, with constant updates on the projects progress. They also shared significant insights and suggestions for developing the project.",
    },
    {
      name: "Chetan Patwardhan",
      role: "CEO, HiQuest Group of IT Companies",
      text: "What most impressed us about Technical Core Engineers was their commitment to delivering a service that exceeded our expectations. Their commitment to the project, dedication to excellence, and willingness to go the extra mile truly distinguish them. They demonstrated a thorough understanding of the business and adjusted their solutions to meet our specific needs.",
    },
    {
      name: "Kean Graham",
      role: "CEO, MonetizeMore",
      text: "What most impressed us about Technical Core Engineers was their wide range of knowledge and commitment to the completion of our project. They exceeded our expectations rather than meeting them. Their ability to quickly understand the difficulties of our business and personalize their solutions to our specific need was absolutely impressive.",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const draggableRef = useRef(null);

  const slidesToShow = 5;
  const cardWidth = window.innerWidth > 600 ? 400 : 340;

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % testimonials.length);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isPaused, testimonials.length]);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const handleDragStop = (e, data) => {
    const newSlide = Math.round(-data.x / cardWidth);
    setActiveSlide(newSlide);
  };

  const position = { x: -activeSlide * cardWidth, y: 0 };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.01)",
    boxShadow:
      "rgba(255, 255, 255, 0.5) 0px 39px 56px -36px inset, rgb(255, 255, 255) 0px 7px 11px -4px inset, rgba(14, 78, 114, 0.3) 0px -82px 68px -64px inset, rgba(0, 161, 253, 0.3) 0px 98px 100px -48px inset, rgba(8, 59, 88, 0.3) 0px 4px 18px inset, rgba(13, 137, 207, 0.2) 0px 1px 40px inset",
    backdropFilter: "blur(12.5px)",
    borderRadius: "25px",
  };

  return (
    <section className="items-center h-auto md:h-[700px] px-2 md:px-30 bg-[#01132e] text-white">
      <div className="w-[360px] sm:w-[1200px]">
        <h2 className="text-2xl pb-5 sm:pb-12 md:text-5xl leading-[54px] md:leading-[84px] text-shadow text-shadow-custom text-center md:text-left">
          Appreciation from Clients
        </h2>
        <div
          className="relative h-[500px] max-w-[340px] sm:max-w-[1160px] mx-auto px-4 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Draggable
            axis="x"
            bounds={{
              left: -((testimonials.length - slidesToShow) * 400),
              right: 0,
            }}
            position={position}
            onStop={handleDragStop}
            nodeRef={draggableRef}
          >
            <div
              // className="flex items-center gap-5 sm:gap-3"
              ref={draggableRef}
              className={`flex items-center gap-5 sm:gap-3 transform transition-transform duration-500 ease-in-out -translate-x-[${
                activeSlide * 320
              }px] sm:-translate-x-[${activeSlide * 400}px]`}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="max-w-[350px] sm:min-w-[380px]">
                  <div
                    className="m-[10px] p-[30px] h-[380px] sm:h-[430px] w-[300px] sm:w-[350px] text-[12px] sm:text-[16px] leading-[20px] sm:leading-[24px]"
                    style={cardStyle}
                  >
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-white text-[20px] sm:text-[22px] font-semibold mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-[14px] sm:text-[18px]">
                          {testimonial.role}
                        </p>
                      </div>
                      <p className="text-[12px] sm:text-[14px]">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Draggable>
          {/* Dot Navigation */}
          <div className="flex  sm:justify-center ml-30 gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeSlide
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppreciationSection;
