



// import React, { useState } from "react";
// import CTASection from "./CTASection";
// import Footer from "./Footer";

// const Demo = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//     product: "Beast",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     // TODO: Submit to backend
//   };

//   return (
//     <div>
//       {/* Top Heading */}
//       <div className="bg-[#4b0051] text-white py-12 text-center"><br />
//         <h2 className="text-4xl font-bold tracking-wide mb-2">DEMO FORM</h2>
//         <p className="text-lg">Fill in the below details to Book a Demo</p>
//       </div>

//       {/* Form Section */}
//       <div className="min-h-screen bg-[#f9f9fb] px-4 py-10 font-sans">
//         <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
//           <form
//             onSubmit={handleSubmit}
//             className="grid grid-cols-1 md:grid-cols-2 gap-6"
//           >
//             {/* Name */}
//             <div>
//               <label className="text-sm font-medium text-gray-800">
//                 Name<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 placeholder="Enter Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 mt-1 border border-purple-800 rounded-md focus:outline-none"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="text-sm font-medium text-gray-800">
//                 Phone Number<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 required
//                 placeholder="Enter Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 mt-1 border border-purple-800 rounded-md focus:outline-none"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="text-sm font-medium text-gray-800">
//                 Email Address<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 placeholder="Enter Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 mt-1 border border-purple-800 rounded-md focus:outline-none"
//               />
//             </div>

//             {/* Address */}
//             <div>
//               <label className="text-sm font-medium text-gray-800">Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Enter Address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 mt-1 border border-purple-800 rounded-md focus:outline-none"
//               />
//             </div>

//             {/* Product */}
//             <div className="md:col-span-2">
//               <label className="text-sm font-medium text-gray-800">
//                 Select product
//               </label>
//               <select
//                 name="product"
//                 value={formData.product}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 mt-1 border border-purple-800 rounded-md focus:outline-none"
//               >
//                 <option value="Beast">Beast</option>
//                 <option value="GLX">GLX</option>
//                 <option value="XLX">XLX</option>
//               </select>
//             </div>

//             {/* Message */}
//             <div className="md:col-span-2">
//               <label className="text-sm font-medium text-gray-800">Message</label>
//               <textarea
//                 name="message"
//                 rows="4"
//                 placeholder="Enter Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 mt-1 border border-purple-800 rounded-md focus:outline-none resize-none"
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <div className="md:col-span-2 text-center mt-4">
//               <button
//                 type="submit"
//                 className="px-10 py-3 border border-purple-800 text-purple-800 rounded-lg font-medium tracking-widest hover:bg-[#4b0051] hover:text-white transition-all"
//               >
//                 BOOK DEMO
//               </button>

//               {/* Bottom Link */}
//               <p className="mt-4 text-sm text-gray-700">
//                 Looking to book product?{" "}
//                 <a href="/order" className="text-purple-800 underline">
//                   Book Product
//                 </a>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>

//     <CTASection />
//     <Footer />
      
//     </div>
//   );
// };

// export default Demo;





import React, { useState } from "react";
import CTASection from "./CTASection";
import Footer from "./Footer";

const Demo = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    product: "Beast",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("http://localhost:5000/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Demo booked successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          product: "Beast",
          message: "",
        });
      } else {
        setStatus(`Error: ${data.error || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Error submitting demo:", error);
      setStatus("Error: Could not connect to the server.");
    }
  };

  return (
    <div>
      {/* Top Heading */}
      <div className="bg-[#4b0051] text-white py-12 text-center">
        <br />
        <h2 className="text-4xl font-bold tracking-wide mb-2">DEMO FORM</h2>
        <p className="text-lg">Fill in the below details to Book a Demo</p>
      </div>

      {/* Form Section */}
      <div className="min-h-screen bg-[#f9f9fb] px-4 py-10 font-sans">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Form Inputs */}
            <div>
              <label className="text-sm font-medium text-gray-800">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-purple-800 rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-800">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-purple-800 rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-800">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-purple-800 rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-800">
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-purple-800 rounded-md focus:outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-800">
                Select product
              </label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-purple-800 rounded-md focus:outline-none"
              >
                <option value="Beast">Beast</option>
                <option value="GLX">GLX</option>
                <option value="XLX">XLX</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-800">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Enter Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-purple-800 rounded-md focus:outline-none resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="px-10 py-3 border border-purple-800 text-purple-800 rounded-lg font-medium tracking-widest hover:bg-[#4b0051] hover:text-white transition-all"
              >
                BOOK DEMO
              </button>
              <p className="mt-4 text-sm text-gray-700">
                Looking to book product?{" "}
                <a href="/order" className="text-purple-800 underline">
                  Book Product
                </a>
              </p>
              {status && (
                <p className="mt-4 text-sm font-semibold text-gray-800">
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Demo;

