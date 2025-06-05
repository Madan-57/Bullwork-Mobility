// import React from 'react';

// // Updated imageData for the marquee.
// // Each item now has a `marqueeItemClass` defining its size and spacing in the scroll.
// // All items will have a height of h-64 (16rem or 256px) for vertical consistency in the marquee.
// const imageData = [
//   {
//     id: 1,
//     src: 'https://www.bullworkmobility.com/careers/gallery2.webp',
//     alt: 'Team enjoying an outdoor activity',
//     // Tailwind classes: w-96 (width 24rem/384px), h-64 (height 16rem/256px), p-2 (padding 0.5rem), flex-shrink-0 (prevents shrinking in flex container)
//     marqueeItemClass: 'w-96 h-100 p-2 flex-shrink-0',
//   },
//   {
//     id: 2,
//     src: 'https://www.bullworkmobility.com/careers/gallery3.webp',
//     alt: 'Productive team meeting in the office',
//     marqueeItemClass: 'w-64 h-100 p-2 flex-shrink-0', // Width 16rem/256px
//   },
//   {
//     id: 3,
//     src: 'https://www.bullworkmobility.com/careers/gallery4.webp',
//     alt: 'A happy group photo of the team',
//     marqueeItemClass: 'w-80 h-100 p-2 flex-shrink-0', // Width 20rem/320px
//   },
//   {
//     id: 4,
//     src: 'https://www.bullworkmobility.com/careers/gallery1.webp',
//     alt: 'Team building exercise',
//     marqueeItemClass: 'w-64 h-100 p-2 flex-shrink-0',
//   },
//   {
//     id: 5,
//     src: 'https://www.bullworkmobility.com/careers/gallery5.webp',
//     alt: 'Team celebrating a milestone',
//     marqueeItemClass: 'w-80 h-100 p-2 flex-shrink-0',
//   },
//   {
//     id: 6,
//     src: 'https://www.bullworkmobility.com/careers/gallery4.webp',
//     alt: 'Large company event photo',
//     marqueeItemClass: 'w-96 h-100 p-2 flex-shrink-0',
//   },
// ];

// const Life = () => {
//   const handleApplyNow = () => {
//     console.log('Apply Now button clicked!');
//     // Example: window.location.href = '/careers';
//   };

//   // Combine imageData with itself for a seamless loop
//   const duplicatedImageData = [...imageData, ...imageData];

//   return (
//     <>
//       {/* Styles for the marquee animation */}
//       <style jsx global>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%); /* Scrolls one full set of original images */
//           }
//         }
//         .animate-marquee {
//           animation: marquee 60s linear infinite; /* Adjust duration for speed */
//         }
//         .animate-marquee:hover {
//            animation-play-state: paused; /* Pause animation on hover */
//         }
//       `}</style>

//       <div className="bg-white min-h-screen font-['Inter'] text-gray-800">
//         <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
//           {/* Section 1: Join Our Awesome Team */}
//           <section className="text-center mb-12 md:mb-16 lg:mb-20">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
//               JOIN OUR AWESOME TEAM
//             </h2>
//             <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 mb-8">
//               At Bullwork Mobility, we are on the lookout for individuals who are driven and dedicated to
//               making a difference and contribute to the acceleration of innovative solutions in sustainable
//               agriculture and construction.
//             </p>
//             <button
//               onClick={handleApplyNow}
//               className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
//             >
//               Apply Now
//             </button>
//           </section>

//           {/* Section 2: Bullwork Gallery */}
//           <section>
//             <header className="text-center mb-8 md:mb-12">
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
//                 BULLWORK GALLERY
//               </h2>
//               <p className="text-lg sm:text-xl text-gray-500">
//                 A sneak peek into life at Bullwork Mobility
//               </p>
//             </header>

//             {/* Main content area for the image marquee */}
//             <main>
//               {/* Outer container to clip the scrolling content and hide overflow */}
//               <div className="w-full overflow-hidden">
//                 {/* Inner container that holds all images (duplicated) and scrolls */}
//                 <div className="flex flex-nowrap animate-marquee">
//                   {duplicatedImageData.map((image, index) => (
//                     // Each image item in the marquee
//                     <div key={`marquee-item-${image.id}-${index}`} className={image.marqueeItemClass}>
//                       {/* Container for image styling (rounded corners, shadow) */}
//                       <div className="overflow-hidden rounded-lg shadow-lg w-full h-full">
//                         <img
//                           src={image.src}
//                           alt={image.alt}
//                           // Image fills its container, covering the area, cropping if aspect ratio differs.
//                           className="w-full h-full object-cover"
//                           onError={(e) => {
//                             e.target.onerror = null;
//                             // Dynamic placeholder based on actual rendered width of parent, trying to maintain 16:9 or a reasonable height
//                             const parentWidth = e.target.parentElement.clientWidth || 256; // Fallback width
//                             const placeholderHeight = Math.round(parentWidth * (9/16));
//                             e.target.src = `https://placehold.co/${parentWidth}x${placeholderHeight}/F3F4F6/9CA3AF?text=Not+Found`;
//                           }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </main>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Life;






import React from 'react';

const imageData = [
  {
    id: 1,
    src: 'https://www.bullworkmobility.com/careers/gallery2.webp',
    alt: 'Team enjoying an outdoor activity',
    marqueeItemClass: 'w-96 h-110 p-6 flex-shrink-0', // Increased padding to p-6
  },
  {
    id: 2,
    src: 'https://www.bullworkmobility.com/careers/gallery3.webp',
    alt: 'Productive team meeting in the office',
    marqueeItemClass: 'w-86 h-110 p-6 flex-shrink-0',
  },
  {
    id: 3,
    src: 'https://www.bullworkmobility.com/careers/gallery4.webp',
    alt: 'A happy group photo of the team',
    marqueeItemClass: 'w-96 h-110 p-6 flex-shrink-0',
  },
  {
    id: 4,
    src: 'https://www.bullworkmobility.com/careers/gallery1.webp',
    alt: 'Team building exercise',
    marqueeItemClass: 'w-96 h-110 p-6 flex-shrink-0',
  },
  {
    id: 5,
    src: 'https://www.bullworkmobility.com/careers/gallery5.webp',
    alt: 'Team celebrating a milestone',
    marqueeItemClass: 'w-96 h-110 p-6 flex-shrink-0',
  },
  {
    id: 6,
    src: 'https://www.bullworkmobility.com/careers/gallery4.webp',
    alt: 'Large company event photo',
    marqueeItemClass: 'w-96 h-110 p-6 flex-shrink-0',
  },
];

const Life = () => {
  const handleApplyNow = () => {
    console.log('Apply Now button clicked!');
    // Example: window.location.href = '/careers';
  };

  const duplicatedImageData = [...imageData, ...imageData];

  return (
    <>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite; /* Increased speed (reduced from 40s to 30s) */
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-white min-h-screen font-['Inter'] text-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          {/* Section 1: Join Our Awesome Team */}
          <section className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              JOIN OUR AWESOME TEAM
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 mb-8">
              At Bullwork Mobility, we are on the lookout for individuals who are driven and dedicated to
              making a difference and contribute to the acceleration of innovative solutions in sustainable
              agriculture and construction.
            </p>
            <button
              onClick={handleApplyNow}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            >
              Apply Now
            </button>
          </section>

          {/* Section 2: Bullwork Gallery */}
          <section>
            <header className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                BULLWORK GALLERY
              </h2>
              <p className="text-lg sm:text-xl text-gray-500">
                A sneak peek into life at Bullwork Mobility
              </p>
            </header>

            {/* Main content area */}
            <main className="my-12"> {/* Increased vertical spacing */}
              <div className="w-full overflow-hidden px-4"> {/* Added horizontal padding */}
                {/* Added gap-x-8 (2rem gap between items) */}
                <div className="flex flex-nowrap animate-marquee gap-x-8">
                  {duplicatedImageData.map((image, index) => (
                    <div key={`marquee-item-${image.id}-${index}`} className={image.marqueeItemClass}>
                      <div className="overflow-hidden rounded-xl shadow-lg w-full h-full"> {/* Increased rounded corners */}
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" /* Added hover effect */
                          onError={(e) => {
                            e.target.onerror = null;
                            const parentWidth = e.target.parentElement.clientWidth || 256;
                            const placeholderHeight = Math.round(parentWidth * (9/16));
                            e.target.src = `https://placehold.co/${parentWidth}x${placeholderHeight}/F3F4F6/9CA3AF?text=Not+Found`;
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
            
          </section>
        </div>
      </div>
    </>
  );
};

export default Life;