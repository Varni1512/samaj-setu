import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Globe, Target, CheckCircle } from 'lucide-react';

const SamajSetuFoundation = () => {
  const [expandedSDG, setExpandedSDG] = useState(null);

  const toggleSDG = (index) => {
    setExpandedSDG(expandedSDG === index ? null : index);
  };

  const sdgData = [
    {
      number: 1,
      title: "No Poverty",
      color: "bg-[#8bc34a]",
      objectives: [
        "Implement livelihood generation programs for rural, tribal, and marginalized communities.",
        "Promote access to government welfare schemes and financial literacy."
      ]
    },
    {
      number: 2,
      title: "Zero Hunger",
      color: "bg-[#8bc34a]",
      objectives: [
        "Encourage sustainable agriculture and organic farming.",
        "Support kitchen gardens, nutrition awareness, and food security programs."
      ]
    },
    {
      number: 3,
      title: "Good Health and Well-being",
      color: "bg-[#8bc34a]",
      objectives: [
        "Facilitate basic healthcare access, hygiene awareness, and wellness camps.",
        "Promote mental health support, menstrual hygiene, and traditional therapies."
      ]
    },
    {
      number: 4,
      title: "Quality Education",
      color: "bg-[#8bc34a]",
      objectives: [
        "Run learning centers, vocational training, and digital literacy programs.",
        "Ensure inclusive education for women, children, transgender, and differently-abled individuals."
      ]
    },
    {
      number: 5,
      title: "Gender Equality",
      color: "bg-[#8bc34a]",
      objectives: [
        "Promote leadership among women and LGBTQ+ communities.",
        "Prevent gender-based violence and advocate for equal rights."
      ]
    },
    {
      number: 6,
      title: "Clean Water and Sanitation",
      color: "bg-[#8bc34a]",
      objectives: [
        "Work on water conservation, clean drinking water access, and sanitation drives.",
        "Promote rainwater harvesting and safe hygiene practices."
      ]
    },
    {
      number: 7,
      title: "Affordable and Clean Energy",
      color: "bg-[#8bc34a]",
      objectives: [
        "Promote use of solar energy, clean cookstoves, and rural electrification through renewables."
      ]
    },
    {
      number: 8,
      title: "Decent Work and Economic Growth",
      color: "bg-[#8bc34a]",
      objectives: [
        "Encourage micro-enterprises, self-help groups (SHGs), and entrepreneurship.",
        "Provide job-oriented skills and support green employment."
      ]
    },
    {
      number: 9,
      title: "Industry, Innovation and Infrastructure",
      color: "bg-[#8bc34a]",
      objectives: [
        "Support rural infrastructure like roads, digital access, and eco-industries.",
        "Innovate low-cost, sustainable solutions through community research and labs."
      ]
    },
    {
      number: 10,
      title: "Reduced Inequalities",
      color: "bg-[#8bc34a]",
      objectives: [
        "Empower socially and economically excluded groups.",
        "Ensure equal access to services and opportunities."
      ]
    },
    {
      number: 11,
      title: "Sustainable Cities and Communities",
      color: "bg-[#8bc34a]",
      objectives: [
        "Develop model eco-villages with waste management, green transport, and community planning."
      ]
    },
    {
      number: 12,
      title: "Responsible Consumption and Production",
      color: "bg-[#8bc34a]",
      objectives: [
        "Promote eco-friendly products (like cow dung items), upcycling, and zero-waste habits.",
        "Encourage conscious consumer behavior and circular economy models."
      ]
    },
    {
      number: 13,
      title: "Climate Action",
      color: "bg-[#8bc34a]",
      objectives: [
        "Organize awareness campaigns, tree plantations, and promote climate-smart practices.",
        "Integrate community-led climate resilience planning."
      ]
    },
    {
      number: 14,
      title: "Life Below Water",
      color: "bg-[#8bc34a]",
      objectives: [
        "Raise awareness about water pollution and marine ecosystem conservation.",
        "Support clean river and water body initiatives."
      ]
    },
    {
      number: 15,
      title: "Life on Land",
      color: "bg-[#8bc34a]",
      objectives: [
        "Engage in afforestation, biodiversity conservation, and soil restoration projects."
      ]
    },
    {
      number: 16,
      title: "Peace, Justice and Strong Institutions",
      color: "bg-[#8bc34a]",
      objectives: [
        "Promote civic awareness, legal aid, and inclusive governance.",
        "Strengthen local leadership and social accountability mechanisms."
      ]
    },
    {
      number: 17,
      title: "Partnerships for the Goals",
      color: "bg-[#8bc34a]",
      objectives: [
        "Collaborate with NGOs, government agencies, CSR arms, and international bodies.",
        "Build networks for knowledge exchange, co-development, and policy advocacy."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="text-[#6D4C41] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Samaj Setu Foundation</h1>
          <p className="text-lg opacity-90">Bridging Communities for Sustainable Development</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Vision & Mission Section */}
        {/* Vision & Mission Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Left Side - Vision Statement */}
            <div>
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Vision Statement</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  To create a just, inclusive, and sustainable society where every individual regardless of gender, identity, or economic status has access to quality education, healthcare, clean environment, and dignified livelihoods, in harmony with the goals of global sustainable development.
                </p>
                <p className="text-lg">
                  We envision a future where communities are empowered, ecosystems are protected, and development is people-centered and planet-conscious.
                </p>
              </div>
            </div>

            {/* Right Side - Mission Statement */}
            <div className="md:border-l md:border-gray-300 md:pl-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Mission Statement</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Samaj Setu Foundation aims to serve as a bridge between communities, governments, and changemakers to achieve the 17 Sustainable Development Goals (SDGs). Through grassroots initiatives, innovation, and inclusive collaboration, we promote education, gender equality, climate action, sustainable agriculture, clean energy, and social equity for long-term human and environmental well-being.
              </p>
            </div>

          </div>
        </section>



        {/* SDGs Section */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-8">
              <CheckCircle className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">Objectives Aligned with the SDGs</h2>
            </div>

            <div className="grid gap-4">
              {sdgData.map((sdg, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSDG(index)}
                    className="w-full flex items-center cursor-pointer justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${sdg.color} rounded-full flex items-center justify-center text-white font-bold`}>
                        {sdg.number}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {sdg.title}
                      </h3>
                    </div>
                    {expandedSDG === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </button>

                  {expandedSDG === index && (
                    <div className="p-4 bg-white border-t">
                      <ul className="space-y-2">
                        {sdg.objectives.map((objective, objIndex) => (
                          <li key={objIndex} className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SamajSetuFoundation;