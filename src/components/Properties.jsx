import { useEffect, useState } from "react";
import axios from "axios";

function Properties() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/properties")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-black text-center mb-8">
        Featured Luxury Properties
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">

        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl "
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-black mb-1">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.description}
              </p>

              <p className="text-blue-700 font-bold text-lg">
                ₹ {item.price}
              </p>

              <p className="text-gray-500 text-sm">
                {item.location}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Properties;