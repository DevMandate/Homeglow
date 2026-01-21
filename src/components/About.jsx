import React from 'react'

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 bg-sky-50 py-20">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 flex justify-center">
            <img src="" alt="About" className='w-80 lg:w-[420px] rounded-full shadow-md'/>
            </div>
            <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-sky-900">About HomeGlow Services</h2>
                <p className="text-gray-700 text-lg mt-4">
                    At HomeGlow Services, we are dedicated to providing top-notch cleaning solutions that transform your living spaces. With a team of experienced professionals and a commitment to excellence, we ensure that every corner of your home shines with cleanliness and freshness. Our eco-friendly products and advanced techniques guarantee a safe and healthy environment for you and your family. Trust HomeGlow Services to bring a new level of sparkle to your home.
                </p>
            </div>
        </div>
        </section>
  )
}

export default About