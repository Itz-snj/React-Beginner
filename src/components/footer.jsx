import { Twitter, Facebook, Linkedin } from "lucide-react";
import logoBlack from "../assests/logow.png";

const Footer = () => {
    const links = ["About Us", "Services", "Use Cases", "Pricing", "Blog"];
    const socialIcons = [
        { Icon: Twitter, link: "#" },
        { Icon: Facebook, link: "#" },
        { Icon: Linkedin, link: "#" },
    ];
    const contactInfo = {
        email: "info@positivus.com",
        phone: "555-567-8901",
        address: "1234 Main St, Moonstone City, Stardust State 12345",
    };
    return (
        <footer className="bg-[#191A23] text-white md:px-10 lg:px-16 px-6 pt-10 md:pt-8 md:mx-20 md:rounded-t-4xl mb-0 mt-8">
            <div className="w-full  mx-auto  flex flex-col md:justify-center gap-6 md:flex-row md:flex-wrap md:gap-4">
                <div className="flex flex-row gap-2 justify-center md:pb-4 md:justify-start md:w-[calc(100%/3-1rem)] items-center md:order-1">
                    <img src={logoBlack} className=" w-[20px] h-[20px]" alt="logo" />
                    <p className="text-xl">Positivus</p>
                </div>
                <ul className="flex flex-col items-center md:justify-center md:justify-items-center md:whitespace-nowrap md:gap-2 md:text-xs md:pb-4 lg:text-sm md:flex-row gap-4 md:max-w-full text-sm md:w-[calc(100%/3-1rem)] md:order-2">
                    {links.map((link, index) => (
                        <li key={index} className="hover:underline md:underline cursor-pointer">
                            {link}
                        </li>
                    ))}
                </ul>

                <div className="md:w-[calc(100%/3-1rem)] md:order-4 md:mr-2">
                    <div className="flex flex-row justify-center mb-4 items-center md:justify-start ">
                        <span className="bg-green-300 text-base lg:text-lg text-center px-2 rounded-lg text-black font-bold">Contact Us:</span>

                    </div>
                    <div className="flex flex-col items-center md:items-start md:justify-items-start justify-center  md:pl-0 px-4 lg:pr-20 gap-4 text-sm">
                        <p className="">Email:info@positivus.com</p>
                        <p className="whitespace-nowrap">Phone: 555-567-8901</p>
                        <p className="text-center px-16 md:px-0 md:text-left ">Address: 1234 Main St Moonstone City, Stardust State 12345</p>
                    </div>
                </div>

                <div className="text-sm flex flex-col gap-4 justify-center md:order-5 md:w-[calc(200%/3-1rem)] md:flex-row items-center p-6 rounded-xl bg-[#292A32]">
                    <input
                        type="email"
                        placeholder="Email"
                        className="mt-1 p-4 w-full md:w-1/2 md:flex-1 rounded-lg  text-white placeholder-white placeholder:font-light lg:placeholder:text-lg placeholder:text-base  border border-white"
                    />
                    <button className="font-normal w-full md:w-1/2 md:flex-1 text-[#292A32] md:whitespace-nowrap md:text-xs lg:text-lg rounded-lg bg-green-300 p-4 md:p-4 ">Subscribe to News</button>

                </div>

                <div className="flex md:flex-row justify-center md:pb-4 items-center gap-4 md:justify-end md:order-3 md:w-[calc(100%/3-1rem)]">
                    <div className="flex space-x-4 md:space-x-2 lg:space-x-4">
                        {socialIcons.map(({ Icon, link }, index) => (
                            <a
                                key={index}
                                href={link}
                                className="bg-white p-2 rounded-full hover:bg-gray-200 transition flex items-center justify-center"
                            >
                                <Icon className="text-black " size={14} strokeWidth={1.5} />
                            </a>
                        ))}
                    </div>

                </div>
                <div className="text-center md:flex md:flex-row md:justify-start md:items-center md:gap-8 font-light text-bsae text-white md:w-full md:text-left md:order-6 mt-6 border-t-1 pt-8 md:pt-4 md:py-6 pb-4 px-8 md:px-0">
                    <p className="text-base">&copy; 2025 Positivus. All Rights Reserved.</p>
                    <p className="text-sm">An open-source project by Team ByteBlaster for Apertre2.0</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
