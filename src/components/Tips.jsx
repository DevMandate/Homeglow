import { useState } from "react";
import {
    FaBroom,
    FaPumpSoap,
    FaLeaf,
    FaBoxesStacked,
    FaHandSparkles
  } from "react-icons/fa6";
  

const Tips = () => {
  const [activeTip, setActiveTip] = useState(0);

  const tips = [
    {
      title: "Dust Surfaces Regularly",
      content:
        "Regular dusting prevents buildup on furniture and surfaces, keeping your home fresh and improving indoor air quality.",
      icon: <FaBroom className="w-10 h-10 text-sky-600" />
    },
    {
      title: "Vacuum Carpets & Sofas Often",
      content:
        "Frequent vacuuming helps remove dirt, pet hair, and allergens from carpets and upholstered furniture.",
      icon: <FaPumpSoap className="w-10 h-10 text-sky-600" />
    },
    {
      title: "Choose Safe Cleaning Products",
      content:
        "Using gentle or eco-friendly cleaners protects your family, pets, and surfaces from harsh chemical damage.",
      icon: <FaLeaf className="w-10 h-10 text-green-600" />
    },
    {
      title: "Declutter Before Cleaning",
      content:
        "Removing unnecessary items makes cleaning faster and more effective, especially during deep cleaning sessions.",
      icon: <FaBoxesStacked className="w-10 h-10 text-amber-600" />
    },
    {
      title: "Disinfect High-Touch Areas",
      content:
        "Frequently clean door handles, switches, and remote controls to reduce germs and maintain a hygienic home.",
      icon: <FaHandSparkles className="w-10 h-10 text-purple-600" />
    }
  ];

  return (
    <section id="tips" className="scroll-mt-20 max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Home Cleaning Tips</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover simple and effective ways to keep your home clean and organized with these essential tips.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {tips.map ((tip, index) => (
                <button
                    key={index}
                    onClick={() => setActiveTip(index)}
                    className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center ${
                        activeTip === index
                            ? "bg-white shadow-lg border-b-4 border-sky-400"
                            : "bg-gray-100 hover:bg-blue-200"
                    }`}
                >
                    <div className="mb-2">
                        {tip.icon}
                    </div>
                    <h3 className="font-medium text-gray-800 text-sm md:text-base">{tip.title}</h3>                    
                </button>
            ))}
        </div>
        <div className="bg-gradient-to-r from-sky-50 to-blue-100 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 bg-white p-6 rounded-xl shadow-md">
                    {tips[activeTip].icon}
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{tips[activeTip].title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{tips[activeTip].content}</p>
                </div>
            </div>
        </div>
        <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
                {tips.map((_, index)=>(
                    <button
                        key={index}
                        onClick={()=> setActiveTip(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            activeTip === index
                                ? "bg-sky-500 w-6"
                                : "bg-gray-400"
                        }`} aria-label={`Go to tip ${index + 1}`}>                      
                    </button>
                ))}                
            </div>
        </div>
    </section>
  );
};

export default Tips