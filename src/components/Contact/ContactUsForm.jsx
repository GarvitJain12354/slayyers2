import React from "react";

const ContactUsForm = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 lg:p-16 text-center max-w-5xl mx-auto text-black pop">
      <h2 className="text-3xl lg:text-5xl font-semibold mb-4">
        Let’s Start the Conversation
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base lg:text-lg">
        We’d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {/* Name */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Name <span className="text-red-500">*</span></label>
          <input type="text" required placeholder="Enter your name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black" />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Email <span className="text-red-500">*</span></label>
          <input type="email" required placeholder="Enter your email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black" />
        </div>

        {/* Phone (optional) */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Phone Number</label>
          <input type="tel" placeholder="Optional"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black" />
        </div>

        {/* I am a... */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">I am a... <span className="text-red-500">*</span></label>
          <select required
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black">
            <option value="">Select</option>
            <option>Fashion Shopper</option>
            <option>Brand/Retailer</option>
            <option>Content Creator/Influencer</option>
            <option>Investor</option>
            <option>Job Seeker</option>
            <option>Media/Press</option>
            <option>Other</option>
          </select>
        </div>

        {/* Subject */}
        <div className="flex flex-col md:col-span-2">
          <label className="mb-1 font-medium">Subject <span className="text-red-500">*</span></label>
          <input type="text" required placeholder="Enter your subject"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black" />
        </div>

        {/* Message */}
        <div className="flex flex-col md:col-span-2">
          <label className="mb-1 font-medium">Message <span className="text-red-500">*</span></label>
          <textarea rows="5" required placeholder="Write your message here..."
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black resize-none" />
        </div>

        {/* How did you hear about us? */}
        <div className="flex flex-col md:col-span-2">
          <label className="mb-1 font-medium">How did you hear about us?</label>
          <select
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black">
            <option value="">Select</option>
            <option>Social Media</option>
            <option>Word of Mouth</option>
            <option>Search Engine</option>
            <option>News/Media</option>
            <option>Other</option>
          </select>
        </div>

        {/* Privacy Note */}
        <p className="text-sm text-gray-500 md:col-span-2">
          We respect your privacy. Your information will only be used to respond to your inquiry and won't be shared with third parties.
        </p>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-black text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-200"
          >
            Let’s Slay Together 💬
          </button>
        </div>
      </form>

      
    </div>
  );
};

export default ContactUsForm;
