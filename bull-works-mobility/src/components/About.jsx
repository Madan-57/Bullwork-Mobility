// import React from 'react';
// import { motion } from 'framer-motion';
// import CountUp from 'react-countup';
// import Footer from '../components/Footer';




// const About = () => {
//   return (
//     <>
//       {/* Top Banner Section */}
//       <section className="bg-white py-12">
//         <div>
//         <img
//             src="https://www.bullworkmobility.com/aboutus/teampic.webp"
//             className="w-full h-[400px] md:h-[737px] object-cover mb-6"

//           />
//         </div>
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
//             WE WANT TO CHANGE THE WORLD,<br />
//             WE THINK WE ARE CRAZY ENOUGH TO DO IT
//           </h1>
//         </div>
//       </section>

//       {/* Guiding Partner Section */}
//       <section className="bg-[#f5f0f9] py-16">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-2xl md:text-4xl font-semibold mb-8 w-full h-[140px] md:h[737] object-cover">
//             OUR GUIDING PARTNER
//           </h2>

//           <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
//             {/* Image Section */}
//             <div className="relative">
//               <img
//                 src="https://www.bullworkmobility.com/aboutus/mahesh%20shetty.webp"
//                 alt="Mr. Mahesh Shetty"
//                 className="w-[300px] md:w-[350px] rounded"
//               />
             
//             </div>

//             {/* Text Section */}
//             <div className="text-left max-w-md">
//               <h3 className="text-xl md:text-2xl font-bold mb-2">
//                 MR. MAHESH SHETTY
//               </h3>
//               <p className="text-gray-700 leading-relaxed">
//                 Joining in our journey to change the landscape of utility vehicles: 
//                 Multiplex Group has been our guiding partner with Mr. Mahesh Shetty 
//                 donning the role of Chairman to take the organization to its next level.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="bg-white text-center py-12 px-4">
//   <h2 className="text-3xl md:text-4xl font-bold mb-10">OUR CO-FOUNDERS</h2>

//   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//     {/* Hemanth Kumar */}
//     <div>
//       <img
//         src="https://www.bullworkmobility.com/aboutus/hemanth.webp"
//         alt="Hemanth Kumar"
//         className="mx-auto rounded-lg shadow-md h-64 w-64 object-cover"
//       />
//       <h3 className="mt-4 font-semibold text-lg">Hemanth Kumar</h3>
//       <p className="font-bold">CEO</p>
//       <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//         <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6 mx-auto mt-2" />
//       </a>
//     </div>

//     {/* Dr. Sriharsha Sheshanarayana */}
//     <div>
//       <img
//         src="https://www.bullworkmobility.com/aboutus/harsha.webp"
//         alt="Dr. Sriharsha Sheshanarayana"
//         className="mx-auto rounded-lg shadow-md h-64 w-64 object-cover"
//       />
//       <h3 className="mt-4 font-semibold text-lg">Dr. Sriharsha Sheshanarayana</h3>
//       <p className="font-bold">CTO</p>
//       <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//         <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6 mx-auto mt-2" />
//       </a>
//     </div>

//     {/* Vinay Raghuram */}
//     <div>
//       <img
//         src="https://www.bullworkmobility.com/aboutus/vinay.webp"
//         alt="Vinay Raghuram"
//         className="mx-auto rounded-lg shadow-md h-64 w-64 object-cover"
//       />
//       <h3 className="mt-4 font-semibold text-lg">Vinay Raghuram</h3>
//       <p className="font-bold">COO</p>
//       <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//         <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6 mx-auto mt-2" />
//       </a>
//     </div>
//   </div>

//   {/* R&D Section */}
//   <div className="mt-16 ">
//     <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR R&D FACILITY</h2>
//     <p className="max-w-2xl mx-auto text-gray-700 text-lg">
//       Driving the forefront of technological advancement, Our R&D facility is located in Nelamangala, Bangalore where ideas are transformed into reality
//     </p>
//   </div>
// </section>

// <section className="bg-white py-10 px-4">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        
//         {/* Left: Vertical image */}
//         <div className="h-[700px]">
//           <img
//             src="https://www.bullworkmobility.com/facility/facility3.webp"
//             alt="Welding"
//             className="w-full h-full object-cover rounded-xl shadow-md"
//           />
//         </div>

//         {/* Right: Two stacked horizontal images */}
//         <div className="md:col-span-2 flex flex-col gap-6">
//           <div className="h-[345px]">
//             <img
//               src="https://www.bullworkmobility.com/facility/facility1.webp"
//               alt="Factory Interior"
//               className="w-full h-full object-cover rounded-xl shadow-md"
//             />
//           </div>
//           <div className="h-[345px]">
//             <img
//               src="https://www.bullworkmobility.com/facility/facility2.webp"
//               alt="Team"
//               className="w-full h-full object-cover rounded-xl shadow-md"
//             />
//           </div>
//         </div>

//       </div>

//       <div className="mt-12 text-center">
//           <h2 className="text-2xl md:text-3xl font-bold mb-6">
//             JOIN THE BULLWORK FAMILY
//           </h2>
//           <div className="flex justify-center gap-4">
//             <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
//               Order
//             </button>
//             <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
//               Book Demo
//             </button>
//           </div>
//         </div>
//     </section>
//     <Footer/>




//     </>
//   );
// };

// export default About;





import React from 'react';
import Footer from '../components/Footer';
import CTASection from './CTASection';

const About = () => {
  return (
    <>
      {/* Top Banner */}
      <section className="bg-white py-12">
        <div>
          <img
            src="https://www.bullworkmobility.com/aboutus/teampic.webp"
            className="w-full h-[400px] md:h-[737px] object-cover mb-6"
            alt="Team Banner"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
            WE WANT TO CHANGE THE WORLD,<br />
            WE THINK WE ARE CRAZY ENOUGH TO DO IT
          </h1>
        </div>
      </section>

      {/* Guiding Partner */}
      <section className="bg-[#f5f0f9] py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold mb-8">
            OUR GUIDING PARTNER
          </h2>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
            <img
              src="https://www.bullworkmobility.com/aboutus/mahesh%20shetty.webp"
              alt="Mr. Mahesh Shetty"
              className="w-[300px] md:w-[350px] rounded"
            />
            <div className="text-left max-w-md">
              <h3 className="text-xl md:text-2xl font-bold mb-2">MR. MAHESH SHETTY</h3>
              <p className="text-gray-700 leading-relaxed">
                Joining in our journey to change the landscape of utility vehicles: 
                Multiplex Group has been our guiding partner with Mr. Mahesh Shetty 
                donning the role of Chairman to take the organization to its next level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Co-founders */}
      <section className="bg-white text-center py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">OUR CO-FOUNDERS</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Each founder */}
          {[
            {
              name: 'Hemanth Kumar',
              title: 'CEO',
              img: 'https://www.bullworkmobility.com/aboutus/hemanth.webp'
            },
            {
              name: 'Dr. Sriharsha Sheshanarayana',
              title: 'CTO',
              img: 'https://www.bullworkmobility.com/aboutus/harsha.webp'
            },
            {
              name: 'Vinay Raghuram',
              title: 'COO',
              img: 'https://www.bullworkmobility.com/aboutus/vinay.webp'
            }
          ].map((person, idx) => (
            <div key={idx}>
              <img
                src={person.img}
                alt={person.name}
                className="mx-auto rounded-lg shadow-md h-64 w-64 object-cover"
              />
              <h3 className="mt-4 font-semibold text-lg">{person.name}</h3>
              <p className="font-bold">{person.title}</p>
              <a
                href="https://www.linkedin.com/in/hemanth-kumar-30a07b85/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="w-6 h-6 mx-auto mt-2"
                />
              </a>
            </div>
          ))}
        </div>

        {/* R&D Facility Intro */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR R&D FACILITY</h2>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg">
            Driving the forefront of technological advancement, Our R&D facility is located in Nelamangala, Bangalore where ideas are transformed into reality
          </p>
        </div>
      </section>

      {/* R&D Image Layout */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Left tall image */}
          <div className="h-[700px]">
            <img
              src="https://www.bullworkmobility.com/facility/facility3.webp"
              alt="Welding"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Right stacked images */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="h-[345px]">
              <img
                src="https://www.bullworkmobility.com/facility/facility1.webp"
                alt="Factory"
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="h-[345px]">
              <img
                src="https://www.bullworkmobility.com/facility/facility2.webp"
                alt="Team"
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            JOIN THE BULLWORK FAMILY
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              Order
            </button>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
              Book Demo
            </button>
          </div>
        </div> */}
      </section>
      <CTASection/>

      <Footer />
    </>
  );
};

export default About;

