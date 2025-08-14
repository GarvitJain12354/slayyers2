
import { motion } from 'framer-motion';
import { useState } from 'react';

const BrandForm = () => {
  const [formData, setFormData] = useState({
    brandName: '',
    contactPerson: '',
    contactNumber: '',
    email: '',
    website: '',
    productTypes: [],
    city: '',
    collaborationReason: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ text: '', isError: false });

  const productOptions = [
    "Men's Wear",
    "Women's Wear",
    "Accessories",
    "Footwear",
    "Unisex",
    "Others"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProductSelect = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const currentTypes = Array.isArray(prev.productTypes) ? prev.productTypes : [];
      return {
        ...prev,
        productTypes: checked 
          ? [...currentTypes, value]
          : currentTypes.filter(item => item !== value)
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage({ text: '', isError: false });

    // Validate required fields
    if (!formData.brandName || !formData.email || !formData.contactNumber) {
      setSubmitMessage({ 
        text: 'Please fill in all required fields', 
        isError: true 
      });
      setSubmitting(false);
      return;
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxVNFKpinhPIEnfnr4yXptbKp7GAQz0htb9a8x7CgUedbSZiQjvIa6yDfXSr864wiVM/exec';

    try {
      const formPayload = {
        'Timestamp': new Date().toISOString(),
        'Brand Name': formData.brandName,
        'Contact Person': formData.contactPerson,
        'Contact Number': formData.contactNumber,
        'Email': formData.email,
        'Website/Instagram': formData.website,
        'Product Types': formData.productTypes.join(', '),
        'City': formData.city,
        'Collaboration Reason': formData.collaborationReason
      };

      // Convert to URLSearchParams
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

      // Handle response
      const result = await response.text();
      
      // Try to parse JSON (Google Apps Script returns HTML on redirect)
      try {
        const jsonResponse = JSON.parse(result);
        if (jsonResponse.result === 'success') {
          setSubmitMessage({
            text: 'Thank you! Your submission was successful.',
            isError: false
          });
          // Reset form
          setFormData({
            brandName: '',
            contactPerson: '',
            contactNumber: '',
            email: '',
            website: '',
            productTypes: [],
            city: '',
            collaborationReason: ''
          });
        } else {
          throw new Error(jsonResponse.error || 'Submission failed');
        }
      } catch (e) {
        // If JSON parse fails, check if it's the Google redirect page
        if (response.url.includes('https://script.google.com')) {
          setSubmitMessage({
            text: 'Submission successful! (Redirect detected)',
            isError: false
          });
          // Reset form
          setFormData({
            brandName: '',
            contactPerson: '',
            contactNumber: '',
            email: '',
            website: '',
            productTypes: [],
            city: '',
            collaborationReason: ''
          });
        } else {
          throw new Error('Unexpected response from server');
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage({
        text: `Error: ${error.message || 'Failed to submit form'}`,
        isError: true
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-gray-100 font-sans pop flex flex-col">
      <Navbar/>
      <main className="flex-grow flex items-center justify-center pt-32 px-4 pb-12">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row-reverse items-center gap-12"
          >
            {/* Form Column */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="lg:w-2/3 w-full"
            >
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-8 shadow-2xl border border-zinc-700">
                <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-400">
                  Collaborate with SLAYYER – Let's Slay Together!
                </h2>
                
                {submitMessage.text && (
                  <div className={`mb-4 p-3 rounded-lg text-center ${
                    submitMessage.isError ? 'bg-red-900 text-red-100' : 'bg-green-900 text-green-100'
                  }`}>
                    {submitMessage.text}
                  </div>
                )}
                
                {/* <form onSubmit={handleSubmit} className="space-y-4"> */}
                  {/* Form fields remain the same as in your original code */}
                  {/* ... include all your form fields here ... */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="brandName" className="block text-sm font-medium text-zinc-300 mb-1">
                      Brand Name
                    </label>
                    <input
                      type="text"
                      id="brandName"
                      name="brandName"
                      required
                      value={formData.brandName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
                      placeholder="Your brand name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contactPerson" className="block text-sm font-medium text-zinc-300 mb-1">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        id="contactPerson"
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
                        placeholder="Contact name"
                      />
                    </div>

                    <div>
                      <label htmlFor="contactNumber" className="block text-sm font-medium text-zinc-300 mb-1">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        required
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
                        placeholder="Phone number"
                      />
                    </div>
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
                      placeholder="Your business email"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-zinc-300 mb-1">
                      Website / Instagram Link
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
                      placeholder="https://yourwebsite.com or @instagram"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Type of Products Offered
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {productOptions.map((option) => (
                        <div key={option} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`product-${option}`}
                            value={option}
                            checked={formData.productTypes.includes(option)}
                            onChange={handleProductSelect}
                            className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-zinc-700 rounded bg-zinc-800"
                          />
                          <label htmlFor={`product-${option}`} className="ml-2 text-sm text-zinc-300">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-zinc-300 mb-1">
                      Current City of Operation
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
                      placeholder="Your operating city"
                    />
                  </div>

                  <div>
                    <label htmlFor="collaborationReason" className="block text-sm font-medium text-zinc-300 mb-1">
                      Why do you want to collaborate with SLAYYER?
                    </label>
                    <textarea
                      id="collaborationReason"
                      name="collaborationReason"
                      required
                      value={formData.collaborationReason}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-zinc-500"
                      placeholder="Tell us why you'd like to collaborate..."
                    ></textarea>
                  </div>

                  
                
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={submitting}
                    className=" block mx-auto py-3 px-6 bg-gradient-to-r from-pink-600 to-violet-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : 'Submit Collaboration Request'}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Content Column */}
            <div className="lg:w-1/3 space-y-6">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
              >
                Elevate Your Brand with <span className="whitespace-nowrap">60-Minute <br /> Fashion</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-xl text-zinc-300"
              >
                Join SLAYYER's network of premium fashion brands and reach customers who demand instant delivery.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </main>

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

export default BrandForm;