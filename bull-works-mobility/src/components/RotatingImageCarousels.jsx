




import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollingLogoSection = () => {
  const navigate = useNavigate();

  const pressLogos = [
    { id: 1, src: 'https://www.bullworkmobility.com/press/press7.webp', alt: 'ICAR' },
    { id: 2, src: 'https://www.bullworkmobility.com/press/press3.webp', alt: 'NSRCEL' },
    { id: 3, src: 'https://www.bullworkmobility.com/press/press4.webp', alt: 'F6S' },
    { id: 4, src: 'https://www.bullworkmobility.com/press/press5.webp', alt: 'StartUs' },
    { id: 5, src: 'https://www.bullworkmobility.com/press/press6.webp', alt: 'Razorpay' },
  ];

  const awardLogos = [
    { id: 1, src: 'https://www.bullworkmobility.com/press/press2.webp', alt: 'Gov Logo 1' },
    { id: 2, src: 'https://www.bullworkmobility.com/press/press8.webp', alt: 'K-Tech' },
    { id: 3, src: 'https://www.bullworkmobility.com/press/press9.webp', alt: 'Aegis Graham Bell Awards' },
    { id: 4, src: 'https://www.bullworkmobility.com/awards/award7.webp', alt: 'MSME Logo' },
    { id: 5, src: 'https://www.bullworkmobility.com/awards/award1.webp', alt: 'Gov Logo 2' },
  ];

  const renderMarquee = (logos, direction) => {
    const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

    return (
      <div className="overflow-hidden w-full">
        <div className={`flex gap-16 w-max ${animationClass}`}>
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={`${logo.id}-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="h-20 sm:h-38 max-w-[180px] object-contain"
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#fbfbfd] py-20 px-6 sm:px-12 md:px-20 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-16">Our Visual Story</h2>

      {/* Press Releases */}
      <div className="mb-16">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">PRESS RELEASES</h3>
        {renderMarquee(pressLogos, 'right')}
      </div>

      {/* Awards and Certifications */}
      <div className="mb-16">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">AWARDS AND CERTIFICATIONS</h3>
        {renderMarquee(awardLogos, 'left')}
      </div>

      {/* Button */}
      <div>
        <button
          onClick={() => navigate('/awards')}
          className="px-6 py-3 bg-gradient-to-l from-[#57115E] to-[#A100B1] text-white rounded-lg shadow hover:scale-105 transition-transform duration-300"
        >
          View More
        </button>
      </div>

      {/* Marquee Animations */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        .animate-marquee-left {
          animation: marquee-left 20s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollingLogoSection;

