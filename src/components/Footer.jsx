import xIcon from "../assets/images/x.svg";
import fbIcon from "../assets/images/fb.svg";
import liIcon from "../assets/images/li.svg";
import pinIcon from "../assets/images/pin.svg";
import beIcon from "../assets/images/be.svg";
import bfIcon from "../assets/images/bf.svg";
import mdIcon from "../assets/images/md.svg";
import locationIcon from "../assets/images/location.svg";
import mailIcon from "../assets/images/mail.svg";
import callIcon from "../assets/images/call.webp";
import logoFooter from "../assets/images/logo-footer.svg";

const Footer = () => {

    const left = ["Blog", "Services", "Hire Developer", "Career", "Who We Are"];
    const center = ["Web Development", "Mobile App Development", "Game Development",
        "UI/UX Design", "Graphics Design"];
    const right = ["DevOps", "E-Commerce", "Digital Marketing", "Cloud Computing"];

    return (
        <footer className="bg-[#122743] h-[750px] sm:h-[680px] text-white py-10 px-6 md:px-10">
            <div className="container mx-auto sm:grid md:grid-cols-4 sm:gap-10">
                {/* Features Menu */}
                <div className='pb-5 sm:pb-0'>
                    <h2 className="text-[24px] w-[185px] border-b border-dashed border-white mb-4">Features Menu</h2>
                    <ul className="space-y-4">
                        {
                            left.map((content, index) => (
                                <li key={index}><a href="#" className="cursor-pointer">{content}</a></li>
                            ))
                        }
                    </ul>
                </div>

                {/* Service Menu */}
                <div className='hidden sm:block '>
                    <h2 className="text-[24px] w-[165px] border-b border-dashed border-white mb-4">Service Menu</h2>
                    <ul className="space-y-4">
                        {
                            center.map((content, index) => (
                                <li key={index}><a href="#" className="cursor-pointer">{content}</a></li>
                            ))
                        }
                    </ul>
                </div>

                {/* Right Menu */}
                <div className='hidden sm:block '>
                    <ul className="space-y-4 pt-14">
                        {
                            right.map((content, index) => (
                                <li key={index}><a href="#" className="cursor-pointer">{content}</a></li>
                            ))
                        }
                    </ul>
                </div>

                {/* Contact Information */}
                <div className='pr-0 md:pr-10'>
                    <h2 className="text-[24px] w-[250px] border-b border-dashed border-white mb-4">Contact Information</h2>
                    <p className="text-[14px] sm:text-[16px] flex items-center gap-3 mt-5">
                        <img src={locationIcon} alt="Location" className="pb-4 md:pb-[100px]" />
                        Skywalk, The Element, 904, Godrej Garden City Rd, off Sarkhej - Gandhinagar Highway, Jagatpur, Ahmedabad, Ranip, Gujarat 382481
                    </p>
                    <p className="text-[14px] sm:text-[16px] flex items-center gap-3 mt-5">
                        <img src={locationIcon} alt="Location" className="pb-4 md:pb-[35px]" />
                        1148 S Railroad Ave, Bronxville, New York 10708, USA
                    </p>
                    <p className="text-[14px] sm:text-[16px] flex items-center gap-3 mt-5">
                            <img src={mailIcon} alt="Mail" />   
                        sales@tecoreng.com
                    </p>
                    <p className="text-[14px] sm:text-[16px] flex items-center gap-3 mt-5">
                            <img src={callIcon} alt="Call" />
                        Call Us:
                    </p>
                    <p className="flex items-center gap-3 pb-3 ml-8 md:ml-[32px]">HR -  +91 63527 25452</p>
                    <p className="flex items-center gap-3 ml-8 md:ml-[32px]">Sales -  +91 85117 46476</p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="hidden sm:flex flex-col md:flex-row justify-between mt-10 border-t border-white pt-4">
                <div><img className="h-20 md:h-[100px] pt-3 w-auto" src={logoFooter} alt="Footer Logo" /></div>
                <div className='pt-10 md:pt-0'><p>Copyright &copy; 2025 by Tecoreng</p></div>
                <div className='w-full md:w-[320px] pt-10 md:pt-0'>
                    <ul className="flex justify-around md:justify-between">
                        <li><img src={xIcon} alt="X" /></li>
                        <li><img src={fbIcon} alt="Facebook" /></li>
                        <li><img src={liIcon} alt="LinkedIn" /></li>
                        <li><img src={pinIcon} alt="Pinterest" /></li>
                        <li><img src={beIcon} alt="Behance" /></li>
                        <li><img src={bfIcon} alt="Buffer" /></li>
                        <li><img src={mdIcon} alt="Medium" /></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;