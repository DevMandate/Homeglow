import { FaUserMd } from 'react-icons/fa'
import about from '../assets/about.png'


const About = () => {
  return (
    <section id="about" className="scroll-mt-20 bg-sky-50 py-20">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 flex justify-center">
            <img src={about} alt="About" className='w-80 lg:w-[420px] rounded-full shadow-md'/>
            </div>
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                <div className='flex items-center justify-center lg:justify-start space-x-2'>
                    <FaUserMd className='w-7 h-7 text-sky-600'/>
                    <h2 className="text-3xl font-bold text-sky-900">About HomeGlow Services</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                    At HomeGlow Services, we are dedicated to providing top-notch cleaning solutions that transform your living spaces. With a team of experienced professionals and a commitment to excellence, we ensure that every corner of your home shines with cleanliness and freshness. Our eco-friendly products and advanced techniques guarantee a safe and healthy environment for you and your family. Trust HomeGlow Services to bring a new level of sparkle to your home.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Our mission is to deliver exceptional cleaning services that exceed your expectations. We believe in building lasting relationships with our clients through reliability, professionalism, and attention to detail. Whether it's a one-time deep clean or regular maintenance, HomeGlow Services is here to make your home a brighter, more comfortable place to live.
                </p>
            </div>
        </div>
        </section>
  )
}

export default About