import MainComponent from "./MainComponent";

export default function AboutUs() {
  return (
    <MainComponent>
      <div className="bg-gray-50 min-h-screen">
        <main className="max-w-4xl mx-auto p-8 md:p-16">
          <div className="bg-white shadow-sm rounded-lg p-8 border border-gray-100">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6 border-b pb-4">
              আমাদের সম্পর্কে (About Us)
            </h1>

            <div className="space-y-6 text-gray-700 leading-relaxed font-serif">
              <p className="text-xl italic text-gray-600">
                "সাহসিকতা • সততা • সাংবাদিকতা"
              </p>

              <p>
                The Bangla Fact Check is Bangladesh's largest circulating Bangla
                daily. Our Bangla portal continues the legacy of providing
                objective, uncompromising news to our readers.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 pt-4">
                Our Mission
              </h2>
              <p>
                To uphold the people's right to know and to ensure transparency
                and accountability in all sectors of the nation. We believe in
                the power of truth to shape a better future.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="p-4 bg-gray-50 rounded-md border-l-4 border-black">
                  <h3 className="font-bold">Bravery</h3>
                  <p className="text-sm">
                    Speaking truth to power without fear.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-md border-l-4 border-black">
                  <h3 className="font-bold">Honesty</h3>
                  <p className="text-sm">
                    Maintaining the highest ethical standards.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-md border-l-4 border-black">
                  <h3 className="font-bold">Journalism</h3>
                  <p className="text-sm">
                    In-depth reporting and factual analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </MainComponent>
  );
}
