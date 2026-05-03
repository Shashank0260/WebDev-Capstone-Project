function Hero() {
  return (
    <div
      className="relative h-[70vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Your Trusted Real Estate Partner
        </h1>
        <p className="text-lg text-gray-200">
          Helping families find their dream homes for over 15 years.
        </p>
      </div>
    </div>
  );
}

export default Hero;