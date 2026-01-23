import {
    FaInstagram,
    FaMapLocationDot,
    FaPhone,
    FaRegClock,
    FaTiktok,
    FaWhatsapp,
    FaHouseCircleCheck,
  } from "react-icons/fa6";
  import { MdOutlineEmail } from "react-icons/md";
  
  import NewsletterSubscribe from "../components/NewsletterSubscribe";
  import { useNewsletterSubscribe } from "../hooks/useNewsletterSubscribe";
  
  const socialLinks = [
    { icon: <FaInstagram className="text-xl" />, href: "#" },
    { icon: <FaWhatsapp className="text-xl" />, href: "#" },
    { icon: <FaTiktok className="text-xl" />, href: "#" },
  ];
  
  const serviceHours = [
    { day: "Monday - Saturday", time: "8:00 AM - 6:00 PM" },
    { day: "Sunday", time: "10:00 AM - 4:00 PM" },
  ];
  
  const contactInfo = [
    {
      icon: <FaPhone className="mr-4 text-white/70" />,
      text: (
        <a href="tel:+254796578077" className="hover:text-sky-300 transition-colors">
          +254-796-578-077 / +254-798-572-580
        </a>
      ),
    },
    {
      icon: <MdOutlineEmail className="mr-4 text-white/70" />,
      text: (
        <a
          href="mailto:serviceshomeglow@gmail.com"
          className="hover:text-sky-300 transition-colors"
        >
          serviceshomeglow@gmail.com
        </a>
      ),
    },
    {
      icon: <FaMapLocationDot className="mr-4 text-white/70" />,
      text: <span>Juja, Kiambu County, Kenya</span>,
    },
  ];
  
  const Footer = () => {
    const { handleSubscribe, loading, status, message } = useNewsletterSubscribe();
  
    return (
      <footer className="bg-gradient-to-b from-blue-950 to-blue-950 text-white pt-16 pb-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Brand Section */}
          <div className="flex flex-col items-center mb-14">
            <div className="flex items-center mb-6">
              <div className="bg-white/20 p-3 rounded-full mr-4">
                <FaHouseCircleCheck className="text-2xl text-sky-300" />
              </div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-200">
                Glow with Us
              </h2>
            </div>
  
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:-translate-y-1"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
  
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Service Hours */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors">
              <h3 className="text-xl font-semibold mb-5 flex items-center">
                <FaRegClock className="mr-3 text-sky-300" />
                Service Hours
              </h3>
  
              <ul className="space-y-3">
                {serviceHours.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-white/70">{item.day}</span>
                    <span>{item.time}</span>
                  </li>
                ))}
  
                <li className="pt-3 mt-3 border-t border-white/10 text-sky-300 font-medium">
                  Consultancy services available upon request
                </li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors">
              <h3 className="text-xl font-semibold mb-5 flex items-center">
                <FaPhone className="mr-3 text-sky-300" />
                Contact Information
              </h3>
  
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-start">
                    {info.icon}
                    {info.text}
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Newsletter */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-sky-300 transition-colors max-w-md mx-auto w-full">
              <NewsletterSubscribe
                onSubmit={handleSubscribe}
                loading={loading}
              />
  
                {status === "info" && (
                <p className="text-green-400 text-sm mt-4">
                    {message}
                </p>
                )}

                {status === "error" && (
                <p className="text-red-400 text-sm mt-4">
                    {message}
                </p>
                )}
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center border-t border-white/10">
            <p className="text-white/50 text-sm mb-3 md:mb-0">
              &copy; {new Date().getFullYear()} HomeGlow. All rights reserved.
            </p>
  
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 hover:text-sky-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-white/50 hover:text-sky-300 text-sm">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  