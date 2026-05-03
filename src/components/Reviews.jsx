function Reviews() {
  const reviews = [
    {
      name: "Rahul Sharma",
      text: "Found my dream home easily. Great experience!",
    },
    {
      name: "Anjali Verma",
      text: "Very professional service and verified listings.",
    },
    {
      name: "William",
      text: "Smooth buying process and helpful agents.",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Clients Say
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow text-center">
            <p className="text-gray-600 mb-4">"{item.text}"</p>
            <h3 className="font-semibold text-black">{item.name}</h3>
            <p className="mt-2">{item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;