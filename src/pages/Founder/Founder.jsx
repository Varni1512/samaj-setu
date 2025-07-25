import React from 'react';

const FoundationCard = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Founder Image */}
        <div className="md:w-1/2 relative">
          <img 
            src="founder.jpg" 
            alt="Founder of Samaj Setu Foundation"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h3 className="text-xl font-semibold mb-1">Founder</h3>
            <p className="text-gray-200">Samaj Setu Foundation</p>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="md:w-1/2 p-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                About Samaj Setu Foundation
              </h1>
              <p className="text-lg text-green-600 font-medium mb-4">
                For Sustainable Development in Rural India
              </p>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Samaj Setu Foundation is a non-profit organization committed to empowering rural communities through inclusive, sustainable, and participatory development. Established with a vision to bridge the gap between grassroots realities and national development goals, the foundation works as a "Setu" (bridge) connecting people, policies, and progress.
              </p>

              <p>
                Our mission is rooted in the belief that true development begins at the village level — where challenges are greatest, but the potential for transformation is even greater. Through innovative models, capacity-building programs, and convergence with government schemes, we aim to improve livelihoods, education, health, gender equality, environmental sustainability, and local governance.
              </p>

              <div>
                <p className="font-semibold text-gray-800 mb-2">
                  We actively align our initiatives with the United Nations Sustainable Development Goals (SDGs):
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>No Poverty (SDG 1)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Gender Equality (SDG 5)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Clean Water and Sanitation (SDG 6)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span>Decent Work and Economic Growth (SDG 8)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>Sustainable Communities (SDG 11)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Climate Action (SDG 13)</span>
                  </div>
                </div>
              </div>

              <p>
                From organic farming and cow-based eco-products to skill development for rural youth, digital literacy for women, support for tribal and nomadic communities, and rights-based awareness campaigns — Samaj Setu Foundation is creating models of rural resilience and self-reliance.
              </p>

              <p>
                Our work is guided by the principles of transparency, inclusion, dignity, and collaboration. We invite individuals, organizations, and institutions to join us in building a rural India that is not only developed but sustainable, just, and equitable for all.
              </p>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <p className="text-center font-semibold text-gray-800 italic">
                  "Together, let's build villages of hope, hubs of innovation, and models of sustainable development."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationCard;