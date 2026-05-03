function Highlights() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Our Houses Stand Out
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white p-5 rounded-lg shadow border-l-4 border-yellow-400">
          <h3 className="font-bold mb-2"> Modern Architecture</h3>
          <p className="text-gray-600 text-sm">
            Contemporary designs built with premium materials ensuring elegance.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border-l-4 border-green-500">
          <h3 className="font-bold mb-2"> Prime Neighborhoods</h3>
          <p className="text-gray-600 text-sm">
            Clean, peaceful areas with top-rated facilities.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border-l-4 border-blue-500">
          <h3 className="font-bold mb-2"> Energy-Efficient Homes</h3>
          <p className="text-gray-600 text-sm">
            Smart lighting and low energy consumption systems.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow border-l-4 border-gray-500">
          <h3 className="font-bold mb-2"> Secured Community</h3>
          <p className="text-gray-600 text-sm">
            CCTV monitoring and 24/7 security for peace of mind.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Highlights;