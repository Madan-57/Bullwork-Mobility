// // import React from "react";

import React from 'react';
import Life from './Lifeat';
import Apply from './Apply';
import CTASection from './CTASection';
import Footer from './Footer';


const imageData = [
  {
    id: 1,
    src: 'https://www.bullworkmobility.com/careers/life/life1.webp', 
    alt: 'Team enjoying an outdoor activity',
    
    containerClass: 'w-full sm:w-1/2 p-1.5 md:p-2',
  },
  {
    id: 2,
    src: 'https://www.bullworkmobility.com/careers/life/life2.webp', 
    alt: 'Productive team meeting in the office',

    containerClass: 'w-full sm:w-1/4 p-1.5 md:p-2',
  },
  {
    id: 3,
    src: 'https://www.bullworkmobility.com/careers/life/life3.webp', 
    alt: 'A happy group photo of the team',
    containerClass: 'w-full sm:w-1/4 p-1.5 md:p-2',
  },
  {
    id: 4,
    src: 'https://www.bullworkmobility.com/careers/life/life4.webp', 
    alt: 'Team building exercise',
    containerClass: 'w-full sm:w-1/4 p-1.5 md:p-2',
  },
  {
    id: 5,
    src: 'https://www.bullworkmobility.com/careers/life/life5.webp', 
    alt: 'Team celebrating a milestone',
    containerClass: 'w-full sm:w-1/4 p-1.5 md:p-2',
  },
  {
    id: 6,
    src: 'https://www.bullworkmobility.com/careers/life/life6.webp', 
    alt: 'Large company event photo',
    containerClass: 'w-full sm:w-1/2 p-1.5 md:p-2',
  },
];

const Careers = () => {
  return (
    
    <div className="bg-white min-h-screen font-['Inter'] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <header className="text-center mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            <br />
            LIFE @ BULLWORK MOBILITY
          </h1>
        </header>

        <main>
          
          <div className="flex flex-wrap -m-1.5 md:-m-2">
            {imageData.map((image) => (
              <div key={image.id} className={image.containerClass}>
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <img
                    src={image.src}
                    alt={image.alt}
                    
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Life/>
      <Apply/>
      <CTASection/>
      <Footer/>
    </div>
    
  );
};

export default Careers;










