




// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// const Apply = () => {
//   const jobs = [
//     { title: 'Electrical Engineer', experience: '1-3 years experience' },
//     { title: 'Finance and Accounting Intern', experience: 'Fresher' },
//     { title: 'Electrical Intern', experience: 'Fresher' },
//     { title: 'Graphic Design Intern', experience: 'Fresher' },
//   ];

//   const email = 'jobs@bullworkmobility.com';

//   return (
//     <div className="bg-gray-50 min-h-screen py-12 px-4">
//       <div className="max-w-5xl mx-auto">
//         {/* Heading */}
//         <h1 className="text-2xl font-bold text-center mb-10 tracking-widest font-sans ">
//           CURRENT OPEN POSITIONS
//         </h1>

//         {/* Job Cards */}
//         {jobs.map((job, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-md p-6 mb-5 flex justify-between items-center"
//           >
//             <div>
//               <h2 className="font-semibold text-lg">{job.title}</h2>
//               <h2 className="text-gray-600">{job.experience}</h2>
//             </div>
//             <button className="bg-gradient-to-r from-fuchsia-600 to-purple-900 text-white font-semibold py-2 px-5 rounded-md hover:from-fuchsia-700 hover:to-purple-950">
//               Apply Now
//             </button>
//           </div>
//         ))}

//         {/* Mail CTA Section */}
//         <div className="bg-white rounded-xl shadow-md p-10 text-center mt-12">
//           <h1 className="text-lg font-semibold tracking-widest mb-2">
//             THINK YOU HAVE WHAT IT TAKES TO INNOVATE WITH US?
//           </h1>
//           <p className="text-md font-semibold mb-6 tracking-wide">MAIL US AT</p>

//           <div className="flex items-center justify-center">
//             <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 shadow-sm w-full max-w-md justify-between">
//               <span className="text-sm md:text-base font-medium text-black">
//                 {email}
//               </span>
//               <a
//                 href={`mailto:${email}`}
//                 className="bg-purple-800 hover:bg-purple-900 text-white p-2 rounded-md transition-colors"
//               >
//                 <ArrowRight size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Apply;














import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Apply = () => {
  const jobs = [
    { title: 'Electrical Engineer', experience: '1-3 years experience' },
    { title: 'Finance and Accounting Intern', experience: 'Fresher' },
    { title: 'Electrical Intern', experience: 'Fresher' },
    { title: 'Graphic Design Intern', experience: 'Fresher' },
  ];

  const email = 'jobs@bullworkmobility.com';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', resumeUrl: '' });
  const [jobTitle, setJobTitle] = useState('');

  const openModal = (title) => {
    setJobTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setForm({ name: '', email: '', resumeUrl: '' });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.resumeUrl) {
      alert('All fields are required.');
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, jobTitle }),
      });

      const data = await res.json();
      alert(data.message);
      closeModal();
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-10 tracking-widest font-sans">
          CURRENT OPEN POSITIONS
        </h1>

        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 mb-5 flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold text-lg">{job.title}</h2>
              <h2 className="text-gray-600">{job.experience}</h2>
            </div>
            <button
              onClick={() => openModal(job.title)}
              className="bg-gradient-to-r from-fuchsia-600 to-purple-900 text-white font-semibold py-2 px-5 rounded-md hover:from-fuchsia-700 hover:to-purple-950"
            >
              Apply Now
            </button>
          </div>
        ))}

        {/* Mail Section */}
        <div className="bg-white rounded-xl shadow-md p-10 text-center mt-12">
          <h1 className="text-lg font-semibold tracking-widest mb-2">
            THINK YOU HAVE WHAT IT TAKES TO INNOVATE WITH US?
          </h1>
          <p className="text-md font-semibold mb-6 tracking-wide">MAIL US AT</p>
          <div className="flex items-center justify-center">
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 shadow-sm w-full max-w-md justify-between">
              <span className="text-sm md:text-base font-medium text-black">
                {email}
              </span>
              <a
                href={`mailto:${email}`}
                className="bg-purple-800 hover:bg-purple-900 text-white p-2 rounded-md transition-colors"
              >
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
              <h2 className="text-lg font-semibold mb-4">Apply for {jobTitle}</h2>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full mb-3 px-4 py-2 border rounded-md"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full mb-3 px-4 py-2 border rounded-md"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="resumeUrl"
                placeholder="Resume URL (e.g. Google Drive)"
                className="w-full mb-4 px-4 py-2 border rounded-md"
                value={form.resumeUrl}
                onChange={handleChange}
              />
              <div className="flex justify-between">
                <button
                  className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-900"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  className="text-gray-600 hover:text-black"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apply;

