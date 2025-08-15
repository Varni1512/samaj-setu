import React from 'react';
import { Linkedin } from 'lucide-react'; // ✅ Lucide icon for LinkedIn

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
          {/* ✅ LinkedIn Button */}
          <div className="absolute bottom-4 left-4">
            <a
              href="https://www.linkedin.com/in/amar-singh-baghel-396a58b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#0a66c2] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#004182] transition-all"
            >
              <Linkedin size={20} />
              <span className="text-sm font-medium">Connect on LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right side - Pen of the Founder Content */}
        <div className="md:w-1/2 p-5">
          <div className="space-y-2 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-[#6D4C41] mb-4">
              ✍ Pen of the Founder – Samaj Setu Foundation
            </h2>
            <p className="italic text-gray-800">By Amar Singh Baghel</p>

            <p>
              With immense hope and unwavering belief in the power of collective action, I laid the foundation of Samaj Setu Foundation a bridge between the people and progress, between the challenges of society and the solutions rooted in compassion, inclusion, and sustainability.
            </p>

            <p>
              Our nation is filled with potential, but it needs more platforms that listen, uplift, and empower. Through this foundation, our vision is not just to initiate development projects, but to build a <strong>jan andolan</strong> a people’s movement where every citizen becomes a participant in change.
            </p>

            <p>
              We work for the marginalized, the underserved, and the forgotten from women and youth to tribal communities, from rural innovators to transgender individuals seeking dignity and opportunity. Samaj Setu is not just an organization. It is a Setu a bridge of trust, transformation, and togetherness.
            </p>

            <p>
              Every step we take is guided by values of equity, transparency, and empathy. As the founder, I invite you all changemakers, institutions, and citizens to join hands in this journey. Let us make development not just a goal, but a shared celebration of human potential.
            </p>

            <div className="mt-6 text-right">
              <p className="font-semibold text-gray-900">With gratitude and determination,</p>
              <p className="font-bold text-[#6D4C41]">Amar Singh Baghel</p>
              <p className="text-sm text-gray-700">
                Founder & Chairman<br />
                Samaj Setu Foundation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationCard;
