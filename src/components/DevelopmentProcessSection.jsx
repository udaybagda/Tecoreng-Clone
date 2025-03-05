import { useEffect, useState, useRef } from "react";

import p1 from '../assets/images/p-1.webp'
import p2 from '../assets/images/p-2.webp'
import p3 from '../assets/images/p-3.webp'
import p4 from '../assets/images/p-4.webp'
import p5 from '../assets/images/p-5.webp'
import p6 from '../assets/images/p-6.webp'
import p7 from '../assets/images/p-7.webp'
import opening from '../assets/images/ball-opening.svg'
import exit from '../assets/images/ball-exit.webp'
import rollingball from '../assets/images/ball-3d.svg';

function DevelopmentProcessSection() {
    // Add state and ref for ball animation
    const [ballTransform, setBallTransform] = useState('translateX(15px) translateY(0px)');
    const componentRef = useRef(null);   
    const ballRef = useRef(null); 

    //keyframes for ball movement
    const keyframes = [
        { x: 0, y: 0, progress: 0.00 },    
        { x: 400, y: 100, progress: 0.05 }, 
        { x: 800, y: 200, progress: 0.15 }, 
        { x: 800, y: 350, progress: 0.20 }, 
        { x: 0, y: 500, progress: 0.25 },   
        { x: 0, y: 580, progress: 0.30 },   
        { x: 800, y: 750, progress: 0.40 }, 
        { x: 800, y: 900, progress: 0.45 }, 
        { x: 0, y: 1050, progress: 0.50 },  
        { x: 0, y: 1140, progress: 0.55 },  
        { x: 800, y: 1280, progress: 0.65 },
        { x: 800, y: 1450, progress: 0.70 },
        { x: 0, y: 1600, progress: 0.75 },  
        { x: 0, y: 1690, progress: 0.80 },  
        { x: 750, y: 1830, progress: 0.90 },
        { x: 750, y: 1900, progress: 0.95 },
        { x: 750, y: 2050, progress: 1.00 },
    ];

    
    
    useEffect(() => {
        const handleScroll = () => {
            if (!componentRef.current || !ballRef.current) return;

            const component = componentRef.current;
            const componentTop = component.offsetTop;
            const componentHeight = component.offsetHeight;
            const viewportHeight = window.innerHeight;
            
            const scrollStart = componentTop - viewportHeight * 0.5;
            const scrollEnd = componentTop + componentHeight - viewportHeight * 0.5;
            const scrollPosition = window.scrollY;
            
            let scrollProgress = (scrollPosition - scrollStart) / (scrollEnd - scrollStart);
            scrollProgress = Math.min(1, Math.max(0, scrollProgress));

            // Find the correct keyframe segment
            const frameIndex = keyframes.findIndex(frame => frame.progress > scrollProgress) - 1;
            
            if (frameIndex >= 0 && frameIndex < keyframes.length - 1) {
                const start = keyframes[frameIndex];
                const end = keyframes[frameIndex + 1];
                
                const segmentProgress = (scrollProgress - start.progress) / (end.progress - start.progress);
                const easedProgress = 0.5 * (1 - Math.cos(Math.PI * segmentProgress));

                const currentX = start.x + (end.x - start.x) * easedProgress;
                const currentY = start.y + (end.y - start.y) * easedProgress;

                setBallTransform(`translateX(${currentX}px) translateY(${currentY}px)`);
            }
        };

        const throttledScroll = () => requestAnimationFrame(handleScroll);
        window.addEventListener('scroll', throttledScroll);
        
        return () => {
            window.removeEventListener('scroll', throttledScroll);
        };
    }, []); 


    return (
        <div className="w-full sm:min-h-screen sm:p-10 flex flex-col gap-2 text-white bg-[#112542] overflow-x-hidden" ref={componentRef}>
            <h2 className="ml-4 sm:ml-10 p-3 text-3xl sm:text-5xl leading-tight sm:leading-[84px] text-shadow-custom">
                Our Development Process
            </h2>

            <div className='hidden pt-2 w-[200px] sm:flex justify-center'>
                <img src={opening} className='ml-[15px] w-[50px] h-auto invisible sm:visible' alt="opening" />
                {/* Add animated ball */}
                <div 
                    ref={ballRef}
                    className='absolute w-[70px] h-[70px] transition-transform duration-500 ease-in-out'
                    style={{ transform: ballTransform }}
                >
                    <img
                        className='w-full h-full invisible sm:visible'
                        src= { rollingball }
                        alt="rolling ball"
                    /> 
                </div>
            </div>

            {/* Rest of your existing JSX remains exactly the same */}
            {/* First Card */}
            <div
                className="relative h-[100px] w-[280px] sm:w-[750px] sm:h-[275px] flex items-center ml-[15px] p-2 sm:p-8 shadow-lg"
                style={{
                    background: 'linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)',
                    clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 50%, 0% -1%)',
                    borderRadius: '20px',
                    boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)'
                }}
            >
                <div className="flex items-center sm:gap-8">
                    <div className="bg-[#112542] h-[40px] w-[40px] sm:h-[150px] sm:w-[150px] rounded-full sm:p-6 shadow-lg hover:scale-110 transition-transform duration-300"
                        style={{
                            backgroundImage: 'linear-gradient(140deg, rgb(38, 66, 107) 3.04%, rgb(2, 22, 52) 70%), linear-gradient(rgb(255, 255, 255), transparent 60%) !important',
                            boxShadow: 'rgb(1, 19, 46) 0px 12px 17px',
                            borderImageSource: 'linear-gradient(rgb(255, 255, 255), rgba(0, 0, 0, 0.55))'
                        }}
                    >
                        <img src={p1} alt="" />
                    </div>
                    <div className="text-white">
                        <h3 className="text-[10px] sm:text-[22px] font-semibold mb-3">Research and Analysis</h3>
                        <p className="text-[8px] sm:text-[16px]">Idea, Consultation, Research, Goal Definition, & Requirements Gathering</p>
                    </div>
                </div>
            </div>

           {/* Second Card  */}
            <div className="self-end mr-[15px]">
                <div
                    className="relative h-[100px] w-[250px] sm:w-[750px] sm:h-[275px] flex items-center p-2 sm:p-8 shadow-lg"
                    style={{
                        background: 'linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)',
                        clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 50%, 0% -1%)',
                        borderRadius: '20px',
                        boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)',
                        transform: 'scale(-1, 1)'
                    }}
                >
                    <div className="flex items-center gap-8" style={{ transform: 'scale(-1, 1)' }}>
                        <div className="text-white text-right">
                            <h2 className="text-[10px] sm:text-[22px]">Design</h2>
                            <p className="text-[8px] sm:text-[16px]">System Architecture Design, Wireframing, UI/UX Designing, & Prototyping</p>
                        </div>
                        <div className="bg-[#112542] h-[40px] w-[40px] sm:h-[150px] sm:w-[150px] rounded-full sm:p-6 shadow-lg"
                            style={{
                                backgroundImage: 'linear-gradient(140deg, rgb(38, 66, 107) 3.04%, rgb(2, 22, 52) 70%), linear-gradient(rgb(255, 255, 255), transparent 60%) !important',
                                boxShadow: 'rgb(1, 19, 46) 0px 12px 17px',
                                borderImageSource: 'linear-gradient(rgb(255, 255, 255), rgba(0, 0, 0, 0.55))'
                            }}
                        >
                            <img src={p2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Card */}
            <div
                className="relative h-[100px] w-[250px] sm:w-[750px] sm:h-[275px] ml-[15px] flex items-center p-2 sm:p-8 shadow-lg"
                style={{
                    background: 'linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)',
                    clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 50%, 0% -1%)',
                    borderRadius: '20px',
                    boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)'
                }}
            >
                <div className="flex items-center gap-8">
                    <div className="bg-[#112542] h-[50px] w-[50px] sm:h-[150px] sm:w-[150px] rounded-full sm:p-6 shadow-lg"
                        style={{
                            backgroundImage: 'linear-gradient(140deg, rgb(38, 66, 107) 3.04%, rgb(2, 22, 52) 70%), linear-gradient(rgb(255, 255, 255), transparent 60%) !important',
                            boxShadow: 'rgb(1, 19, 46) 0px 12px 17px',
                            borderImageSource: 'linear-gradient(rgb(255, 255, 255), rgba(0, 0, 0, 0.55))'
                        }}
                    >
                        <img src={p3} alt="" />
                    </div>
                    <div className="text-white">
                        <h3 className="text-[10px] sm:text-[22px] font-semibold mb-3">Development</h3>
                        <p className="text-[8px] sm:text-[16px]">Functional Implementation, Software Coding & Optimization</p>
                    </div>
                </div>
            </div>

            {/* Four Card */}
            <div className="self-end mr-[15px]">
                <div
                    className="relative h-[100px] w-[250px] sm:w-[750px] sm:h-[275px] flex items-center p-2 sm:p-8 shadow-lg"
                    style={{
                        background: 'linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)',
                        clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 50%, 0% -1%)',
                        borderRadius: '20px',
                        boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)',
                        transform: 'scale(-1, 1)'
                    }}
                >
                    <div className="flex items-center gap-8" style={{ transform: 'scale(-1, 1)' }}>
                        <div className="text-white text-right">
                            <h2 className="text-[10px] sm:text-[22px] font-semibold mb-3">Testing</h2>
                            <p className="text-[8px] sm:text-[16px]">Quality Assurance, Troubleshooting, & Testing</p>
                        </div>
                        <div className="bg-[#112542] h-[40px] w-[40px] sm:h-[150px] sm:w-[150px] rounded-full sm:p-6 shadow-lg"
                            style={{
                                backgroundImage: 'linear-gradient(140deg, rgb(38, 66, 107) 3.04%, rgb(2, 22, 52) 70%), linear-gradient(rgb(255, 255, 255), transparent 60%) !important',
                                boxShadow: 'rgb(1, 19, 46) 0px 12px 17px',
                                borderImageSource: 'linear-gradient(rgb(255, 255, 255), rgba(0, 0, 0, 0.55))'
                            }}
                        >
                            <img src={p4} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Fifth Card */}
            <div
                className="relative h-[100px] w-[250px] sm:w-[750px] sm:h-[275px] ml-[15px] flex items-center p-2 sm:p-8 shadow-lg"
                style={{
                    background: 'linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)',
                    clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 50%, 0% -1%)',
                    borderRadius: '20px',
                    boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)'
                }}
            >
                <div className="flex items-center gap-8">
                    <div className="bg-[#112542] h-[40px] w-[40px] sm:h-[150px] sm:w-[150px] rounded-full sm:p-6 shadow-lg"
                        style={{
                            backgroundImage: 'linear-gradient(140deg, rgb(38, 66, 107) 3.04%, rgb(2, 22, 52) 70%), linear-gradient(rgb(255, 255, 255), transparent 60%) !important',
                            boxShadow: 'rgb(1, 19, 46) 0px 12px 17px',
                            borderImageSource: 'linear-gradient(rgb(255, 255, 255), rgba(0, 0, 0, 0.55))'
                        }}
                    >
                        <img src={p5} alt="" />
                    </div>
                    <div className="text-white">
                        <h3 className="text-[10px] sm:text-[22px] font-semibold mb-3">Deployment</h3>
                        <p className="text-[8px] sm:text-[16px]">Launch, Beta Live, & Live</p>
                    </div>
                </div>
            </div>

            {/* Six Card */}
            <div className="self-end mr-[15px]">
                <div
                    className="relative h-[100px] w-[250px] sm:w-[750px] sm:h-[275px] flex items-center pp-2 sm:p-8 shadow-lg"
                    style={{
                        background: 'linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)',
                        clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 50%, 0% -1%)',
                        borderRadius: '20px',
                        boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)',
                        transform: 'scale(-1, 1)'
                    }}
                >
                    <div className="flex items-center gap-8" style={{ transform: 'scale(-1, 1)' }}>
                        <div className="text-white text-right">
                            <h2 className="text-[10px] sm:text-[22px] font-semibold mb-3">Evaluation</h2>
                            <p className="text-[8px] sm:text-[16px]">Performance Evaluation, & Analytics Implementation</p>
                        </div>
                        <div className="bg-[#112542] h-[40px] w-[40px] sm:h-[150px] sm:w-[150px] rounded-full sm:p-6 shadow-lg"
                            style={{
                                backgroundImage: 'linear-gradient(140deg, rgb(38, 66, 107) 3.04%, rgb(2, 22, 52) 70%), linear-gradient(rgb(255, 255, 255), transparent 60%) !important',
                                boxShadow: 'rgb(1, 19, 46) 0px 12px 17px',
                                borderImageSource: 'linear-gradient(rgb(255, 255, 255), rgba(0, 0, 0, 0.55))'
                            }}
                        >
                            <img src={p6} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Seventh Card */}
            <div
                className="relative ml-[15px] h-[100px] w-[250px] sm:w-[750px] sm:h-[275px] flex items-center p-2 sm:p-8 shadow-lg"
                style={{
                    background: 'linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)',
                    clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 50%, 0% -1%)',
                    borderRadius: '20px',
                    boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)'
                }}
            >
                <div className="flex items-center gap-8">
                    <div className="bg-[#112542] h-[40px] w-[40px] sm:h-[150px] sm:w-[150px] rounded-full sm:p-6 shadow-lg"
                        style={{
                            backgroundImage: 'linear-gradient(140deg, rgb(38, 66, 107) 3.04%, rgb(2, 22, 52) 70%), linear-gradient(rgb(255, 255, 255), transparent 60%) !important',
                            boxShadow: 'rgb(1, 19, 46) 0px 12px 17px',
                            borderImageSource: 'linear-gradient(rgb(255, 255, 255), rgba(0, 0, 0, 0.55))'
                        }}
                    >
                        <img src={p7} alt="" />
                    </div>
                    <div className="text-white">
                        <h3 className="text-[10px] sm:text-[22px] font-semibold mb-3">Maintenance</h3>
                        <p className="text-[8px] sm:text-[16px]">Monitoring, Feedback, Analysis, & Complete Support</p>
                    </div>
                </div>

            </div>
            <img src={exit} className='ml-[750px] h-[50px] w-[170px] invisible sm:visible' alt="" />


        </div>
    );
}

export default DevelopmentProcessSection