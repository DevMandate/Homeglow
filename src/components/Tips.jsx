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
      title: "Dust Smart, Not Just Often",
      content:
        "Focus on high-touch and hidden areas like ceiling fans, light switches, and baseboards. Using microfiber cloths traps dust effectively, reducing allergens and keeping your home healthier for everyone.",
      icon: <FaBroom className="w-10 h-10 text-sky-600" />
    },
    {
      title: "Vacuum Like a Pro",
      content:
        "Target carpet edges, under furniture, and sofa crevices with a vacuum that has HEPA filtration. This not only removes dust, dirt, and pet hair but also reduces allergens and keeps fabrics looking fresh longer.",
      icon: <FaPumpSoap className="w-10 h-10 text-sky-600" />
    },
    {
      title: "Choose Cleaning Products Wisely",
      content:
        "Opt for eco-friendly or plant-based cleaners, and always read labels for harmful chemicals. Safe products protect your family and pets while extending the life of furniture and surfaces—plus, they often smell better too!",
      icon: <FaLeaf className="w-10 h-10 text-green-600" />
    },
    {
      title: "Declutter Smartly Before Cleaning",
      content:
        "Clear countertops, floors, and common surfaces before you start. Sort items into keep, donate, or toss piles—this not only speeds up cleaning but also gives your home a more organized, stress-free vibe.",
      icon: <FaBoxesStacked className="w-10 h-10 text-amber-600" />
    },
    {
      title: "Disinfect High-Touch Spots Effectively",
      content:
        "Focus on door handles, light switches, remotes, and faucet handles daily. Use a safe disinfectant or alcohol wipes to reduce germs and prevent the spread of illness, keeping your home truly hygienic.",
      icon: <FaHandSparkles className="w-10 h-10 text-purple-600" />
    }
  ];

  return (
    <section id="tips" className="scroll-mt-20 max-w-6xl mx-auto px-4 py-15">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Home Cleaning Tips</h2>
            <p className="text-sm lg:text-lg text-gray-600 max-w-2xl mx-auto">Discover simple and effective ways to keep your home clean and organized with these essential tips.</p>
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
                    <h3 className="font-medium text-gray-800 text-sm lg:text-lg md:text-base">{tip.title}</h3>                    
                </button>
            ))}
        </div>
        <div className="bg-gradient-to-r from-sky-50 to-blue-100 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 bg-white p-6 rounded-xl shadow-md">
                    {tips[activeTip].icon}
                </div>
                <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">{tips[activeTip].title}</h3>
                    <p className="text-gray-600 text-sm lg:text-lg leading-relaxed">{tips[activeTip].content}</p>
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