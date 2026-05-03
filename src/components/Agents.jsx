import { useState } from "react";

function Agents() {
  const [selectedAgent, setSelectedAgent] = useState(null);

  const agents = [
    {
      id: 1,
      name: "David",
      role: "Senior Property Consultant",
      experience: "10+ Years",
      specialty: "Luxury Villas & Commercial Properties",
      rating: "4.9",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      advantage: "Strong negotiation skills and premium property access"
    },
    {
      id: 2,
      name: "Eva",
      role: "Real Estate Advisor",
      experience: "7 Years",
      specialty: "Residential Apartments",
      rating: "4.8",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      advantage: "Excellent client support and verified listings expertise"
    },
    {
      id: 3,
      name: "Karan",
      role: "Luxury Property Specialist",
      experience: "12 Years",
      specialty: "High-end Villas & Penthouses",
      rating: "5.0",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      advantage: "Exclusive access to off-market luxury properties"
    },
    {
      id: 4,
      name: "Emily",
      role: "Property Consultant",
      experience: "5 Years",
      specialty: "First-time Buyers",
      rating: "4.7",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      advantage: "Best for budget-friendly home buying guidance"
    },
    {
      id: 5,
      name: "Josh",
      role: "Investment Advisor",
      experience: "8 Years",
      specialty: "Real Estate Investment",
      rating: "4.8",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      advantage: "Helps maximize ROI on property investments"
    },
    {
      id: 6,
      name: "Leslie",
      role: "Rental Specialist",
      experience: "6 Years",
      specialty: "Rental & Lease Properties",
      rating: "4.9",
      image: "https://img.magnific.com/premium-photo/portrait-with-copy-space-caucasian-girl-smiling-camera-outdoors_475667-1220.jpg",
      advantage: "Loved for her friendly approach, transparency, and client care."
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Meet Our Expert Agents
        </h2>
        <p className="text-gray-600 mt-2">
          Trusted professionals helping you find the perfect property
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {agents.map((agent) => (
          <div
            key={agent.id}
            onClick={() => setSelectedAgent(agent)}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer p-6 flex items-center gap-5 border border-gray-100"
          >

            {/* Image */}
            <img
              src={agent.image}
              alt={agent.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
            />

            {/* Info */}
            <div className="text-left">

              <h3 className="text-lg font-semibold text-gray-900">
                {agent.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {agent.role}
              </p>

              <p className="text-blue-600 font-medium mt-2">
                ⭐ {agent.rating}
              </p>

              <div className="mt-3">
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                  Details
                </span>
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Modal */}
      {selectedAgent && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setSelectedAgent(null)}
        >

          <div
            className="bg-white rounded-2xl w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Header */}
            <div className="text-center">
              <img
                src={selectedAgent.image}
                alt={selectedAgent.name}
                className="w-24 h-24 mx-auto rounded-full border-4 border-blue-100"
              />

              <h2 className="text-xl font-bold mt-3">
                {selectedAgent.name}
              </h2>

              <p className="text-gray-500">
                {selectedAgent.role}
              </p>
            </div>

            {/* Details */}
            <div className="mt-5 space-y-2 text-sm text-gray-700">
              <p><b>Experience:</b> {selectedAgent.experience}</p>
              <p><b>Specialty:</b> {selectedAgent.specialty}</p>
            </div>

            {/* Advantage */}
            <div className="mt-4 bg-blue-50 p-3 rounded-lg">
              <p className="text-blue-800 font-semibold text-sm">
                Why choose this agent?
              </p>
              <p className="text-gray-700 text-sm mt-1">
                {selectedAgent.advantage}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setSelectedAgent(null)}
              className="w-full mt-5 bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Agents;