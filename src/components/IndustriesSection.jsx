import g1 from "../assets/images/g-1.webp";
import g2 from "../assets/images/g-2.webp";
import g3 from "../assets/images/g-3.webp";
import g4 from "../assets/images/g-4.webp";
import g5 from "../assets/images/g-5.webp";
import g6 from "../assets/images/g-6.webp";


function IndustriesSection() {
    const row1 = [
        {
            title: "Supply chain & Logistics",
            image: g1,
            span: "col-span-12 md:col-span-5"
        },
        {
            title: "Healthcare",
            image: g2,
            span: "col-span-12 md:col-span-3"
        },
        {
            title: "Education",
            image: g3,
            span: "col-span-12 md:col-span-3"
        },
    ];

    const row2 = [
        {
            title: "Banking",
            image: g4,
            span: "col-span-12 md:col-span-3"
        },
        {
            title: "E-commerce",
            image: g5,
            span: "col-span-12 md:col-span-3"
        },
        {
            title: "Travel",
            image: g6,
            span: "col-span-12 md:col-span-5"
        }
    ];

    return (
        <section className="items-center h-auto md:h-[560px] py-6 sm:py-0 px-4 md:px-30 bg-[#01132e] text-white">
            <div className="max-w-[1200px] sm:w-[1200px] mx-auto">
                <h2 className="text-2xl md:text-5xl pb-2 sm:py-1 leading-[54px] md:leading-[84px] text-shadow text-shadow-custom text-center md:text-left">Industries We are experts in</h2>

                <div className="grid grid-cols-12 gap-5">
                    {row1.map((industry, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-lg h-[200px] ${industry.span}`}
                        >
                            <div className="relative group h-[200px] w-full">
                                <div className="overflow-hidden">
                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute flex items-center justify-center h-[200px] inset-0 bg-opacity-40 transition-opacity group-hover:bg-opacity-50">
                                    <div className="flex items-center justify-center">
                                        <h3 className="text-xl font-normal text-white">
                                            {industry.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-12 pt-5 gap-5">
                    {row2.map((industry, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-lg h-[200px] ${industry.span}`}
                        >
                            <div className="relative group h-[200px] w-full">
                                <div className="overflow-hidden">
                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute flex items-center justify-center h-[200px]  inset-0 bg-opacity-40 transition-opacity group-hover:bg-opacity-50">
                                    <div className="flex items-center justify-center">
                                        <h3 className="text-xl font-normal text-white">
                                            {industry.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default IndustriesSection;