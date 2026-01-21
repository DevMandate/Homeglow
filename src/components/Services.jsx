import {
    FaCouch,
    FaBed,
    FaRug,
    FaHouse,
    FaSprayCanSparkles,
    FaHelmetSafety,
    FaBug
  } from "react-icons/fa6";
import { motion } from "framer-motion";
  
  


const services = [
    {
      icon: <FaCouch className="w-10 h-10 text-sky-500" />,
      title: "Sofa & Bed Cleaning",
      description:
        "Professional cleaning of sofas and beds to remove stains, dust, and odors, restoring freshness and comfort."
    },
    {
      icon: <FaBed className="w-10 h-10 text-green-500" />,
      title: "Mattress Cleaning",
      description:
        "Deep mattress cleaning that eliminates allergens, bacteria, and dirt for a healthier sleeping environment."
    },
    {
      icon: <FaRug className="w-10 h-10 text-purple-500" />,
      title: "Carpet Cleaning",
      description:
        "Expert carpet and rug cleaning services that lift stubborn stains and improve indoor air quality."
    },
    {
      icon: <FaHouse className="w-10 h-10 text-pink-500" />,
      title: "General House Cleaning",
      description:
        "Routine home cleaning covering floors, surfaces, kitchens, and bathrooms to keep your home neat and tidy."
    },
    {
      icon: <FaSprayCanSparkles className="w-10 h-10 text-yellow-500" />,
      title: "Deep Home Cleaning",
      description:
        "Intensive deep cleaning service targeting hard-to-reach areas for a truly spotless and hygienic home."
    },
    {
      icon: <FaHelmetSafety className="w-10 h-10 text-red-500" />,
      title: "Post-Construction Cleaning",
      description:
        "Thorough cleaning after renovations or construction, removing dust, debris, and paint residue."
    },
    {
      icon: <FaBug className="w-10 h-10 text-orange-500" />,
      title: "Fumigation & Pest Control",
      description:
        "Safe and effective fumigation services to eliminate pests and protect your home from infestations."
    }
  ];
  

const Services = () => {
  return (
    <section id='services' className='scroll-m-20 py-24 bg-gradient-to-br from-white to-sky-50'>
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-sky-900 mb-4">Our Services</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    At HomeGlow Services, we offer a comprehensive range of cleaning solutions tailored to meet your specific needs. Our expert team is dedicated to delivering exceptional results, ensuring your home is spotless and comfortable.
                </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-all border border-sky-100 hover:border-sky-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <div className="flex items-center justify-center mb-4">
                            {service.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-sky-800 mb-2 text-center">{service.title}</h3>
                        <p className="text-gray-600 text-sm text-center">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services