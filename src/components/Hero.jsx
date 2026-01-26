import { CalendarCheck } from 'lucide-react'
import heroVideo from '../assets/hero.mp4'

const Hero = () => {
  return (
    <section id='home' className='scroll-m-20 bg-sky-50 py-16'>
        <div className='container mx-auto px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
            <div className='max-w-xl text-center lg:text-left space-y-6'>
                <h1 className='text-xl sm:text-4xl lg:text-5xl font-bold text-sky-900 leading-tight'>
                Bringing the Glow Back Home with Expert Cleaning Services
                </h1>
                <p className='text-gray-700 text-sm lg:text-lg'>
                Experience a spotless home with HomeGlow's professional cleaning services. Our expert team is dedicated to delivering exceptional results, ensuring your living space is fresh, clean, and inviting. Book your service today and let us bring the glow back to your home!
                </p>
                <a href="#book" className="inline-flex items-center bg-sky-600 text-white px-3 py-1 sm:px-6 sm:py-3 rounded-xl hover:bg-sky-700 transition text-base font-medium">

                    <CalendarCheck className="w-5 h-5 mr-2" />
                    Book Service
                </a>
            </div>

            <div className='flex justify-center items-stretch'>
                <video 
                    src={heroVideo} 
                    className='w-80 lg:w-[429px] h-64 lg:h-[400px] object-cover rounded-4xl' 
                    controls 
                    autoPlay 
                    loop 
                    muted
                />
            </div>


        </div>
    </section>
  );
}

export default Hero