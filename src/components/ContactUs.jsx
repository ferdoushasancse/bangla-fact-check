import { useState } from "react";
import MainComponent from "./MainComponent";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <MainComponent>
      <div className="bg-gray-100 min-h-screen">
        <main className="max-w-3xl mx-auto p-6 md:py-12">
          <div className="bg-white shadow-md rounded-sm overflow-hidden">
            <div className="bg-black text-white p-6 text-center">
              <h1 className="text-3xl font-serif font-bold italic">
                Contact Us
              </h1>
              <p className="text-gray-400 text-sm mt-2">
                We value your feedback and inquiries
              </p>
            </div>

            <div className="p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <h2 className="text-2xl font-bold text-green-600">
                    ধন্যবাদ!
                  </h2>
                  <p className="text-gray-600">
                    আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে।
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-blue-600 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:ring-1 focus:ring-black outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:ring-1 focus:ring-black outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Subject
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded outline-none">
                      <option>General Inquiry</option>
                      <option>Advertisement</option>
                      <option>Letter to the Editor</option>
                      <option>Technical Issue</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full p-3 border border-gray-300 rounded focus:ring-1 focus:ring-black outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white font-bold py-3 uppercase tracking-widest hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="bg-gray-50 p-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <h4 className="font-bold text-black">Office Address</h4>
                <p>64-65, Kazi Nazrul Islam Avenue</p>
                <p>Dhaka-1215, Bangladesh</p>
              </div>
              <div>
                <h4 className="font-bold text-black">Phone & Email</h4>
                <p>Phone: +880 2-XXXXXXX</p>
                <p>Email: news@thedailystar.net</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </MainComponent>
  );
}
