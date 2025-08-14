// import { motion } from 'framer-motion';
// import { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     age: '',
//     whatsapp: '',
//     email: '',
//     city: '',
//     gender: '',
//     instagram: '',
//     shoppingFrequency: ''
//   });

//   const [submitting, setSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState({ text: '', isError: false });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setSubmitMessage({ text: '', isError: false });

//     // Validate required fields
//     if (!formData.fullName || !formData.email || !formData.whatsapp) {
//       setSubmitMessage({ 
//         text: 'Please fill in all required fields', 
//         isError: true 
//       });
//       setSubmitting(false);
//       return;
//     }

//     const scriptURL = 'https://script.google.com/macros/s/AKfycbw-jEoxv1tnJfR2L19d0Ow7t88PjTcCGGnSzSrVTNSj035x2mxcC-rcn3fcFILLrHwYOg/exec';

//     try {
//       const formPayload = {
//         'Timestamp': new Date().toISOString(),
//         'Full Name': formData.fullName,
//         'Age': formData.age,
//         'WhatsApp Number': formData.whatsapp,
//         'Email': formData.email,
//         'City': formData.city,
//         'Gender': formData.gender,
//         'Instagram Handle': formData.instagram,
//         'Shopping Frequency': formData.shoppingFrequency
//       };

//       // Convert to URLSearchParams
//       const formDataToSend = new URLSearchParams();
//       Object.entries(formPayload).forEach(([key, value]) => {
//         formDataToSend.append(key, value);
//       });

//       // Solution 1: Using CORS proxy
//       const proxyURL = 'https://cors-anywhere.herokuapp.com/';
//       const response = await fetch(proxyURL + scriptURL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//           'X-Requested-With': 'XMLHttpRequest'
//         },
//         body: formDataToSend.toString()
//       });

//       // Solution 2: Direct fetch with redirect handling
//       /*
//       const response = await fetch(scriptURL, {
//         method: 'POST',
//         body: formDataToSend,
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow'
//       });
//       */

//       // Handle response
//       const result = await response.text();
      
//       try {
//         const jsonResponse = JSON.parse(result);
//         if (jsonResponse.result === 'success') {
//           setSubmitMessage({
//             text: 'Thank you! Your submission was successful.',
//             isError: false
//           });
//           // Reset form
//           setFormData({
//             fullName: '',
//             age: '',
//             whatsapp: '',
//             email: '',
//             city: '',
//             gender: '',
//             instagram: '',
//             shoppingFrequency: ''
//           });
//         } else {
//           throw new Error(jsonResponse.error || 'Submission failed');
//         }
//       } catch (e) {
//         // If JSON parse fails but submission worked (common with Google Apps Script)
//         if (response.ok) {
//           setSubmitMessage({
//             text: 'Submission successful!',
//             isError: false
//           });
//           // Reset form
//           setFormData({
//             fullName: '',
//             age: '',
//             whatsapp: '',
//             email: '',
//             city: '',
//             gender: '',
//             instagram: '',
//             shoppingFrequency: ''
//           });
//         } else {
//           throw new Error('Unexpected response from server');
//         }
//       }
//     } catch (error) {
//       console.error('Submission error:', error);
//       setSubmitMessage({
//         text: `Error: ${error.message || 'Failed to submit form. Please try again later.'}`,
//         isError: true
//       });
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen pop bg-gradient-to-br from-zinc-900 to-black text-gray-100 font-sans flex flex-col">
//       {/* Main Content */}
//       <main className="flex-grow flex items-center justify-center px-4 py-12">
//         <div className="w-full max-w-6xl mx-auto">
//           {/* Hero Section with Form */}
//           <motion.div 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="flex flex-col lg:flex-row items-center gap-12"
//           >
//             {/* Left Column - Text Content */}
//             <div className="lg:w-1/2 space-y-6">
//               <motion.h1 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
//               >
//                 Fashion Delivered in <span className="whitespace-nowrap">60 Minutes</span>
//               </motion.h1>
              
//               <motion.p 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//                 className="text-lg md:text-xl text-zinc-300"
//               >
//                 Be the first to experience instant fashion delivery. Sign up now for exclusive early access.
//               </motion.p>

//               {submitMessage.text && (
//                 <div className={`p-3 rounded-lg text-center ${
//                   submitMessage.isError ? 'bg-red-900 text-red-100' : 'bg-green-900 text-green-100'
//                 }`}>
//                   {submitMessage.text}
//                 </div>
//               )}
//             </div>

//             {/* Right Column - Form */}
//             <motion.div 
//               initial={{ y: 30, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.7, duration: 0.8 }}
//               className="lg:w-1/2 w-full"
//             >
//               <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-8 shadow-2xl border border-zinc-700">
//                 <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400">
//                   Get Early Access – Your Style Delivered Fast
//                 </h2>
                
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="fullName" className="block text-sm font-medium text-zinc-300 mb-1">
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         id="fullName"
//                         name="fullName"
//                         required
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
//                         placeholder="Your full name"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="age" className="block text-sm font-medium text-zinc-300 mb-1">
//                         Age
//                       </label>
//                       <input
//                         type="number"
//                         id="age"
//                         name="age"
//                         required
//                         value={formData.age}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
//                         placeholder="Your age"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="whatsapp" className="block text-sm font-medium text-zinc-300 mb-1">
//                       WhatsApp Number
//                     </label>
//                     <input
//                       type="tel"
//                       id="whatsapp"
//                       name="whatsapp"
//                       required
//                       value={formData.whatsapp}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
//                       placeholder="Your WhatsApp number"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
//                       placeholder="Your email"
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="city" className="block text-sm font-medium text-zinc-300 mb-1">
//                         City / Area
//                       </label>
//                       <input
//                         type="text"
//                         id="city"
//                         name="city"
//                         required
//                         value={formData.city}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
//                         placeholder="Your city"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="gender" className="block text-sm font-medium text-zinc-300 mb-1">
//                         Gender Identity
//                       </label>
//                       <select
//                         id="gender"
//                         name="gender"
//                         required
//                         value={formData.gender}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
//                       >
//                         <option value="">Select gender</option>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                         <option value="Non-binary">Non-binary</option>
//                         <option value="Prefer not to say">Prefer not to say</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="instagram" className="block text-sm font-medium text-zinc-300 mb-1">
//                       Instagram Handle (optional)
//                     </label>
//                     <input
//                       type="text"
//                       id="instagram"
//                       name="instagram"
//                       value={formData.instagram}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
//                       placeholder="@yourhandle"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="shoppingFrequency" className="block text-sm font-medium text-zinc-300 mb-1">
//                       How often do you shop for fashion online?
//                     </label>
//                     <select
//                       id="shoppingFrequency"
//                       name="shoppingFrequency"
//                       required
//                       value={formData.shoppingFrequency}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
//                     >
//                       <option value="">Select frequency</option>
//                       <option value="Daily">Daily</option>
//                       <option value="Weekly">Weekly</option>
//                       <option value="Monthly">Monthly</option>
//                       <option value="Rarely">Rarely</option>
//                     </select>
//                   </div>

//                   <motion.button
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.98 }}
//                     type="submit"
//                     disabled={submitting}
//                     className="w-full py-3 px-6 bg-gradient-to-r from-pink-600 to-violet-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
//                   >
//                     {submitting ? (
//                       <>
//                         <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Submitting...
//                       </>
//                     ) : 'Unlock Early Access'}
//                   </motion.button>
//                 </form>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </main>

//       {/* Footer */}
//       <motion.footer 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 0.8 }}
//         className="py-6 text-center text-zinc-500 text-sm"
//       >
//         <p>© {new Date().getFullYear()} SLAYYER. All rights reserved.</p>
//       </motion.footer>
//     </div>
//   );
// };

// export default ContactForm;


import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    whatsapp: '',
    email: '',
    city: '',
    gender: '',
    instagram: '',
    shoppingFrequency: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ text: '', isError: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage({ text: '', isError: false });

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.whatsapp) {
      setSubmitMessage({ 
        text: 'Please fill in all required fields', 
        isError: true 
      });
      setSubmitting(false);
      return;
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw-jEoxv1tnJfR2L19d0Ow7t88PjTcCGGnSzSrVTNSj035x2mxcC-rcn3fcFILLrHwYOg/exec';

    try {
      const formPayload = {
        'Timestamp': new Date().toISOString(),
        'Full Name': formData.fullName,
        'Age': formData.age,
        'WhatsApp Number': formData.whatsapp,
        'Email': formData.email,
        'City': formData.city,
        'Gender': formData.gender,
        'Instagram Handle': formData.instagram,
        'Shopping Frequency': formData.shoppingFrequency
      };

      // Solution 1: Direct fetch with redirect handling
      const formDataToSend = new URLSearchParams();
      Object.entries(formPayload).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow'
      });

      // Solution 2: Alternative JSONP approach if direct fetch fails
      if (!response.ok) {
        return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          const callbackName = `jsonp_${Date.now()}`;
          const params = new URLSearchParams({
            ...formPayload,
            callback: callbackName
          });
          script.src = `${scriptURL}?${params.toString()}`;
          
          window[callbackName] = (response) => {
            delete window[callbackName];
            document.body.removeChild(script);
            if (response.result === 'success') {
              setSubmitMessage({
                text: 'Thank you! Your submission was successful.',
                isError: false
              });
              // Reset form
              setFormData({
                fullName: '',
                age: '',
                whatsapp: '',
                email: '',
                city: '',
                gender: '',
                instagram: '',
                shoppingFrequency: ''
              });
              resolve();
            } else {
              reject(new Error(response.error || 'Submission failed'));
            }
          };
          
          script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            reject(new Error('Failed to submit form'));
          };
          
          document.body.appendChild(script);
        });
      }

      // Handle direct fetch response
      const result = await response.text();
      
      try {
        const jsonResponse = JSON.parse(result);
        if (jsonResponse.result === 'success') {
          setSubmitMessage({
            text: 'Thank you! Your submission was successful.',
            isError: false
          });
          // Reset form
          setFormData({
            fullName: '',
            age: '',
            whatsapp: '',
            email: '',
            city: '',
            gender: '',
            instagram: '',
            shoppingFrequency: ''
          });
        } else {
          throw new Error(jsonResponse.error || 'Submission failed');
        }
      } catch (e) {
        // If JSON parse fails but submission worked (common with Google Apps Script)
        if (response.url.includes('https://script.google.com')) {
          setSubmitMessage({
            text: 'Submission successful!',
            isError: false
          });
          // Reset form
          setFormData({
            fullName: '',
            age: '',
            whatsapp: '',
            email: '',
            city: '',
            gender: '',
            instagram: '',
            shoppingFrequency: ''
          });
        } else {
          throw new Error('Unexpected response from server');
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage({
        text: `Error: ${error.message || 'Failed to submit form. Please try again later.'}`,
        isError: true
      });
    } finally {
      setSubmitting(false);
    }
  };

  // ... rest of your component JSX remains the same ...
  return (
    <div className="min-h-screen pop bg-gradient-to-br from-zinc-900 to-black text-gray-100 font-sans flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl mx-auto">
          {/* Hero Section with Form */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            {/* Left Column - Text Content */}
            <div className="lg:w-1/2 space-y-6">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
              >
                Fashion Delivered in <span className="whitespace-nowrap">60 Minutes</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-xl text-zinc-300"
              >
                Be the first to experience instant fashion delivery. Sign up now for exclusive early access.
              </motion.p>

              {submitMessage.text && (
                <div className={`p-3 rounded-lg text-center ${
                  submitMessage.isError ? 'bg-red-900 text-red-100' : 'bg-green-900 text-green-100'
                }`}>
                  {submitMessage.text}
                </div>
              )}
            </div>

            {/* Right Column - Form */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="lg:w-1/2 w-full"
            >
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-8 shadow-2xl border border-zinc-700">
                <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400">
                  Get Early Access – Your Style Delivered Fast
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-zinc-300 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-zinc-300 mb-1">
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        required
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
                        placeholder="Your age"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-zinc-300 mb-1">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
                      placeholder="Your WhatsApp number"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
                      placeholder="Your email"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-zinc-300 mb-1">
                        City / Area
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
                        placeholder="Your city"
                      />
                    </div>

                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-zinc-300 mb-1">
                        Gender Identity
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        required
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                      >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Non-binary">Non-binary</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="instagram" className="block text-sm font-medium text-zinc-300 mb-1">
                      Instagram Handle (optional)
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
                      placeholder="@yourhandle"
                    />
                  </div>

                  <div>
                    <label htmlFor="shoppingFrequency" className="block text-sm font-medium text-zinc-300 mb-1">
                      How often do you shop for fashion online?
                    </label>
                    <select
                      id="shoppingFrequency"
                      name="shoppingFrequency"
                      required
                      value={formData.shoppingFrequency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
                    >
                      <option value="">Select frequency</option>
                      <option value="Daily">Daily</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Rarely">Rarely</option>
                    </select>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={submitting}
                    className="block mx-auto md:mt-8  py-3 px-6 bg-gradient-to-r from-pink-600 to-violet-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : 'Unlock Early Access'}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="py-6 text-center text-zinc-500 text-sm"
      >
        <p>© {new Date().getFullYear()} Binary Threads. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default ContactForm;