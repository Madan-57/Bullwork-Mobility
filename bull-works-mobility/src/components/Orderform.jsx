





// import React, { useState } from 'react';
// import CTASection from './CTASection';
// import Footer from './Footer';



// const OrderForm = () => {
//   const [tab, setTab] = useState('individual');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const body = `
// Name: ${form.name.value}
// Phone: ${form.phone.value}
// Email: ${form.email.value}
// Address: ${form.address.value}
// Country: ${form.country.value}
// State: ${form.state.value}
// City: ${form.city.value}
// Pincode: ${form.pincode.value}
// Aadhar: ${form.aadhar.value}
// PAN: ${form.pan.value}
// Product: ${form.product.value}
// Message: ${form.message.value}
//     `;
//     window.location.href = `mailto:madhangnagu2004@gmail.com?subject=Order%20Request&body=${encodeURIComponent(body)}`;
//   };

//   return (
//     <div className="min-h-screen bg-[#fafafc]">
//       {/* Header */}
//       <div className="bg-[#4b0051] text-white py-12 text-center"><br />
//         <h2 className="text-4xl font-bold tracking-wide mb-2">ORDER FORM</h2>
//         <p className="text-lg">Fill in the below details to order products</p>
//       </div>

//       {/* Form Container */}
//       <div className="flex justify-center px-4 py-10">
//         <div className="bg-white w-full max-w-4xl p-8 rounded-xl shadow-md">
//           {/* Tabs */}
//           <div className="flex justify-center mb-6">
//             <button
//               type="button"
//               className={`px-6 py-2 font-semibold rounded-md ${
//                 tab === 'individual'
//                   ? 'bg-[#4b0051] text-white'
//                   : 'bg-white text-black border border-purple-900'
//               }`}
//               onClick={() => setTab('individual')}
//             >
//               Individual
//             </button>
//             <button
//               type="button"
//               className={`px-6 py-2 font-semibold rounded-md ml-4 ${
//                 tab === 'company'
//                   ? 'bg-[#4b0051] text-white'
//                   : 'bg-white text-black border border-purple-900'
//               }`}
//               onClick={() => setTab('company')}
//             >
//               Company
//             </button>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
//             <input type="text" name="name" placeholder="Enter Name" required className="border border-purple-900 px-4 py-2 rounded-md" />
//             <input type="text" name="phone" placeholder="Enter Phone Number" required className="border border-purple-900 px-4 py-2 rounded-md" />
//             <input type="email" name="email" placeholder="Enter Email Address" required className="border border-purple-900 px-4 py-2 rounded-md" />
//             <input type="text" name="address" placeholder="Enter Address" className="border border-purple-900 px-4 py-2 rounded-md" />
//             <select name="country" className="border border-purple-900 px-4 py-2 rounded-md">
//               <option>Select country</option>
//               <option>India</option>
//               <option>USA</option>
//             </select>
//             <select name="state" className="border border-purple-900 px-4 py-2 rounded-md">
//               <option>Select state</option>
//               <option>Tamil Nadu</option>
//               <option>Karnataka</option>
//             </select>
//             <select name="city" className="border border-purple-900 px-4 py-2 rounded-md">
//               <option>Select city</option>
//               <option>Chennai</option>
//               <option>Bangalore</option>
//             </select>
//             <input type="text" name="pincode" placeholder="Enter Pincode" className="border border-purple-900 px-4 py-2 rounded-md" />
//             <input type="text" name="aadhar" placeholder="Enter Aadhar Number" className="border border-purple-900 px-4 py-2 rounded-md" />
//             <input type="text" name="pan" placeholder="Enter Pan Number" className="border border-purple-900 px-4 py-2 rounded-md" />
//             <select name="product" className="border border-purple-900 px-4 py-2 rounded-md md:col-span-2">
//               <option>Warrior</option>
//               <option>Ranger</option>
//               <option>Elite</option>
//             </select>
//             <textarea
//               name="message"
//               placeholder="Enter Message"
//               rows="4"
//               className="border border-purple-900 px-4 py-2 rounded-md md:col-span-2"
//             ></textarea>

//             <div className="md:col-span-2 flex justify-center">
//               <button
//                 type="submit"
//                 className="bg-white border-2 border-purple-900 text-purple-900 px-8 py-3 rounded-md hover:bg-purple-900 hover:text-white transition"
//               >
//                 BOOK PRODUCT
//               </button>
//             </div>
//           </form>

//           <p className="text-center mt-4 text-sm text-gray-600">
//             Looking for a Product Demo?{" "}
//             <a href="/demo" className="text-purple-700 underline">
//               Book a Demo
//             </a>
//           </p>

          
//         </div>
        
//       </div>
//       <CTASection/>
//       <Footer/>
//     </div>
//   );
// };

// export default OrderForm;






import React, { useState } from 'react';
import CTASection from './CTASection';
import Footer from './Footer';

const OrderForm = () => {
  const [tab, setTab] = useState('individual');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      address: form.address.value,
      country: form.country.value,
      state: form.state.value,
      city: form.city.value,
      pincode: form.pincode.value,
      aadhar: form.aadhar.value,
      pan: form.pan.value,
      product: form.product.value,
      message: form.message.value,
    };

    try {
      const response = await fetch('http://localhost:5000/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Order submitted successfully!');
        form.reset();
      } else {
        alert(`Failed to submit order: ${result.error}`);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafc]">
      {/* Header */}
      <div className="bg-[#4b0051] text-white py-12 text-center">
        <h2 className="text-4xl font-bold tracking-wide mb-2">ORDER FORM</h2>
        <p className="text-lg">Fill in the below details to order products</p>
      </div>

      {/* Form Container */}
      <div className="flex justify-center px-4 py-10">
        <div className="bg-white w-full max-w-4xl p-8 rounded-xl shadow-md">
          {/* Tabs */}
          <div className="flex justify-center mb-6">
            <button
              type="button"
              className={`px-6 py-2 font-semibold rounded-md ${
                tab === 'individual'
                  ? 'bg-[#4b0051] text-white'
                  : 'bg-white text-black border border-purple-900'
              }`}
              onClick={() => setTab('individual')}
            >
              Individual
            </button>
            <button
              type="button"
              className={`px-6 py-2 font-semibold rounded-md ml-4 ${
                tab === 'company'
                  ? 'bg-[#4b0051] text-white'
                  : 'bg-white text-black border border-purple-900'
              }`}
              onClick={() => setTab('company')}
            >
              Company
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <input type="text" name="name" placeholder="Enter Name" required className="border border-purple-900 px-4 py-2 rounded-md" />
            <input type="text" name="phone" placeholder="Enter Phone Number" required className="border border-purple-900 px-4 py-2 rounded-md" />
            <input type="email" name="email" placeholder="Enter Email Address" required className="border border-purple-900 px-4 py-2 rounded-md" />
            <input type="text" name="address" placeholder="Enter Address" className="border border-purple-900 px-4 py-2 rounded-md" />
            <select name="country" className="border border-purple-900 px-4 py-2 rounded-md">
              <option>Select country</option>
              <option>India</option>
              <option>USA</option>
            </select>
            <select name="state" className="border border-purple-900 px-4 py-2 rounded-md">
              <option>Select state</option>
              <option>Tamil Nadu</option>
              <option>Karnataka</option>
            </select>
            <select name="city" className="border border-purple-900 px-4 py-2 rounded-md">
              <option>Select city</option>
              <option>Chennai</option>
              <option>Bangalore</option>
            </select>
            <input type="text" name="pincode" placeholder="Enter Pincode" className="border border-purple-900 px-4 py-2 rounded-md" />
            <input type="text" name="aadhar" placeholder="Enter Aadhar Number" className="border border-purple-900 px-4 py-2 rounded-md" />
            <input type="text" name="pan" placeholder="Enter Pan Number" className="border border-purple-900 px-4 py-2 rounded-md" />
            <select name="product" className="border border-purple-900 px-4 py-2 rounded-md md:col-span-2">
              <option>Warrior</option>
              <option>Ranger</option>
              <option>Elite</option>
              <option>Vamana</option>
              <option>Beast</option>
              <option>Glx</option>



            </select>
            <textarea
              name="message"
              placeholder="Enter Message"
              rows="4"
              className="border border-purple-900 px-4 py-2 rounded-md md:col-span-2"
            ></textarea>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-white border-2 border-purple-900 text-purple-900 px-8 py-3 rounded-md hover:bg-purple-900 hover:text-white transition"
              >
                BOOK PRODUCT
              </button>
            </div>
          </form>

          <p className="text-center mt-4 text-sm text-gray-600">
            Looking for a Product Demo?{" "}
            <a href="/demo" className="text-purple-700 underline">
              Book a Demo
            </a>
          </p>
        </div>
      </div>

      <CTASection />
      <Footer />
    </div>
  );
};

export default OrderForm;

