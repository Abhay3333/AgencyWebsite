import { MdHomeRepairService, MdOutlinePolicy } from "react-icons/md";
import { VscServerProcess, VscFeedback } from "react-icons/vsc";
import { RiServiceLine } from "react-icons/ri";
import { IoMdContact, IoIosPaper } from "react-icons/io";

const links = [
  { name: "Services", url: "#", icon: RiServiceLine },
  { name: "Process", url: "#", icon: VscServerProcess },
  { name: "Work", url: "#", icon: MdHomeRepairService },
  { name: "Testimonial", url: "#", icon: VscFeedback },
  { name: "Contact", url: "#", icon: IoMdContact },
];

const Footer = () => {
  return (
    <footer className="bg-gray-200 px-8 sm:px-12 md:px-36 dark:text-white dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16 items-center">
        <div>
          <img
            src="Logo-withoutBG.png"
            alt="logo"
            className="w-24 dark:invert"
          />
          <p className="text-lg md:pr-36">
            We&#39;re a software agency on a mission to bridge a gap between
            Marketplace Businesses and Innovation through custom software and
            automations.
          </p>
          <div className="my-4">Email - contact@egma.in</div>
          <i className="fa-brands fa-linkedin text-4xl mr-4 hover:text-blue-700"></i>
          <i className="fa-brands fa-square-instagram text-4xl hover:text-pink-500"></i>
        </div>
        <div>
          <ul className="list-none md:pl-36 space-y-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className="flex items-center space-x-2 text-lg hover:text-indigo-600 transition-all duration-300"
                >
                  <link.icon className="text-2xl" />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between pb-4">
        <div>All rights reserved to Egma</div>
        <div className="mt-2 sm:mt-0">
          <a href="#" className="mr-12 flex items-center space-x-2 hover:text-indigo-600 transition-all duration-300">
            <MdOutlinePolicy className="text-xl" /> <span>Privacy Policy</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-indigo-600 transition-all duration-300">
            <IoIosPaper className="text-xl" /> <span>Terms and Conditions</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;