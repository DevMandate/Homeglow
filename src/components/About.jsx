import aboutVideo from '../assets/about.mp4'
import { FaShieldAlt } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 bg-sky-50 py-15">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-stretch gap-12">
        
        {/* Video */}
        <div className='flex-1 flex justify-center items-stretch'>
          <video 
            src={aboutVideo} 
            className='w-full max-w-xs lg:max-w-md h-full object-cover rounded-4xl' 
            controls 
            autoPlay 
            loop 
            muted
          />
        </div>

        {/* Text */}
        <div className="flex-1 flex flex-col justify-center space-y-6 text-center lg:text-left">
          <div className='flex items-center justify-center lg:justify-start space-x-2'>
            <FaShieldAlt className='w-7 h-7 text-sky-600'/>
            <h2 className="text-3xl font-bold text-sky-900">About HomeGlow Services</h2>
          </div>
          <p className="text-sm lg:text-lg text-gray-700 leading-relaxed text-justify">
            At HomeGlow Services, we are dedicated to providing top-notch cleaning solutions that transform your living spaces. With a team of experienced professionals and a commitment to excellence, we ensure that every corner of your home shines with cleanliness and freshness. Our eco-friendly products and advanced techniques guarantee a safe and healthy environment for you and your family. Trust HomeGlow Services to bring a new level of sparkle to your home.
          </p>
          <p className="text-sm lg:text-lg text-gray-700 leading-relaxed text-justify">
            Our mission is to deliver exceptional cleaning services that exceed your expectations. We believe in building lasting relationships with our clients through reliability, professionalism, and attention to detail. Whether it's a one-time deep clean or regular maintenance, HomeGlow Services is here to make your home a brighter, more comfortable place to live.
          </p>

        </div>

      </div>
    </section>
  )
}

export default About
