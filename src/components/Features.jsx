function Features() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Why Choose DreamSpace Reality?
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-5">
          <h3 className="font-semibold mb-2">✔ 10,000+ Happy Clients</h3>
          <p className="text-gray-600 text-sm">
            We've helped thousands find perfect homes.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3 className="font-semibold mb-2">✔ Verified Listings</h3>
          <p className="text-gray-600 text-sm">
            Legally checked and verified homes.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <h3 className="font-semibold mb-2">✔ Expert Agents</h3>
          <p className="text-gray-600 text-sm">
            Market experts guiding you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;