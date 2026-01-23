import { useState } from 'react';
import { FaChevronLeft, FaQuoteLeft, FaStar, FaChevronRight } from 'react-icons/fa6';
import maze from '../assets/maze.jpeg';
import kim from '../assets/kim.jpeg';
import max from '../assets/max.jpeg';
import empress from '../assets/empress.jpeg';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            id: 1,
            name: 'Ephantus Kung`u',
            feedback: 'Great service! Highly recommend HomeGlow for all your home maintenance needs.',
            rating: 5,
            image: maze,
        },
        {
            id: 2,
            name: 'Boniface Kimani',
            feedback: 'Professional and reliable. My go-to for any home repairs.',
            rating: 4,
            image: kim,
        },
        {
            id: 3,
            name: 'Maxwell Njeru',
            feedback: 'Affordable prices and excellent customer service.',
            rating: 5,
            image: max,
        },
        {            
            id: 4,
            name: 'Jacinta Wangari',
            feedback: 'Quick response time and quality work. Very satisfied!',
            rating: 4,
            image: empress,
        },
    ];
    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };
        
  return (
    <section id='testimonials' className='scroll-mt-20 relative py-16 bg-gradient-to-r from-blue-50 to-sky-50 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
            <div className='absolute inset-y-0 left-0 w-1/2 bg-sky-300'></div>
            <div className='absolute inset-y-0 right-0 w-1/2 bg-sky-300'></div>
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-sky-800'>What Our Customers Say</h2>
                <p className='mt-3 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600'>Hear from our satisfied clients</p>
            </div>
            <div className='relative'>
                <div className='flex transition-transform duration-500 ease-in-out'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.id} className='w-full flex-shrink-0 px-4'>
                            <div className='bg-white rounded-3xl shadow-lg sm:shadow-xl flex flex-col md:flex-row items-center p-6 md:p-10 gap-6 md:gap-12'>
                            <div className='md:w-1/3 mb-6 md:mb-0 flex justify-center'>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className='w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 rounded-full object-cover border-4 border-sky-100 shadow-lg'
                                />
                            </div>
                            <div className='md:w-2/3 md:pl-6'>
                            <div className="relative">
  <FaQuoteLeft
    className="text-sky-300 text-xl sm:text-2xl md:text-3xl absolute -top-2 sm:-top-3 md:-top-4 -left-2 sm:-left-4 md:-left-6"
  />

  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 relative z-10 leading-relaxed md:leading-loose">
    {testimonial.feedback}
  </p>
</div>

                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h3 className='text-lg sm:text-xl font-bold text-sky-800'>
                                            {testimonial.name}
                                        </h3>
                                        <div className='flex mt-1'>
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar 
                                                key={i}
                                                className={`text-sm sm:text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className='hidden md:flex space-x-2'>
                                        <button onClick={prevTestimonial} className='p-2 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors'>
                                            <FaChevronLeft />
                                        </button>
                                        <button onClick={nextTestimonial} className='p-2 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors'>
                                            <FaChevronRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    ))}
                </div>
                <div className='mt-8 flex justify-center md:hidden space-x-4'>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index
                            ? 'bg-sky-600' 
                            : 'bg-gray-300'}`}>                            
                        </button>
                    ))}
                </div>
            </div>
            <div className='mt-16 text-center'>
                <button className='px-8 py-3 bg-sky-600 text-white rounded-full font-medium hover:bg-sky-700 transition-colors duration-300 shadow-lg hover:shadow-xl'>
                    Share Your Experience
                </button>
            </div>
        </div>
    </section>
  );
};

export default Testimonials