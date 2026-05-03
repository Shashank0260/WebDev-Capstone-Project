import { useEffect, useState } from "react";
import axios from "axios";

function Properties() {
  const [data, setData] = useState([]);

  const fallbackData = [
    {
      id: 1,
      title: "Luxury Villa",
      description: "Beautiful villa with modern design",
      price: "2,50,00,000",
      location: "San Francisco",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    {
      id: 2,
      title: "Modern Apartment",
      description: "Modern 3BHK apartment with balcony",
      price: "1,20,00,000",
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
    },
    {
      id: 3,
      title: "Beach House",
      description: "Sea-facing 3BHK house",
      price: "3,75,00,000",
      location: "Goa",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156"
    },
    {
      id: 4,
      title: "Mountain Retreat Villa",
      description: "Cozy 4BHK villa with mountain views",
      price: "8,75,00,000",
      location: "Denmark",
      image: "https://www.guptasen.com/wp-content/uploads/2025/08/mountain-retreat-karjat-4-BHK-villa-set-amidts-rolling-hills-misty-forest-1200x900.webp"
    },
    {
      id: 5,
      title: "Mansion",
      description: "Luxury 6BHK mansion with pool",
      price: "10,75,00,000",
      location: "Mumbai",
      image: "https://luxjb.com/wp-content/uploads/2024/10/Villa-Mandarin-Beverly-Hills-by-LuxJB-1024x683.jpg"
    },
    {
      id: 6,
      title: "Lakeside Modern Villa",
      description: "Elegant 4BHK villa with lake view",
      price: "45,00,000",
      location: "Kerala",
      image: "https://artfulliving.com/wp-content/uploads/2023/05/JOHN-KRAEMER-SONS_MODERN-MARVEL_FEAT-1.png"
    },
    {
      id: 7,
      title: "Luxury Penthouse",
      description: "Premium penthouse with skyline view",
      price: "7,95,00,000",
      location: "Los Angeles",
      image: "https://cms.perannum.money/content/images/2025/10/stunning-evening-view-of-mumbai-skyline-from-living-room-godrej-carmichael-1200x900.jpg"
    },
    {
      id: 8,
      title: "Coastal Cottage",
      description: "Charming 2BHK cottage near beach",
      price: "1,15,00,000",
      location: "London",
      image: "https://www.thehousedesigners.com/images/plans/01/JBZ/bulk/6699/1300-updated-front-7_m.webp"
    },
    {
      id: 9,
      title: "Suburban Family Home",
      description: "Comfortable 3BHK home",
      price: "1,99,00,000",
      location: "Canada",
      image: "https://www.shutterstock.com/image-photo/single-home-winter-time-north-260nw-2622088003.jpg"
    },
    {
      id: 10,
      title: "City Studio Apartment",
      description: "Compact studio apartment",
      price: "90,00,000",
      location: "Delhi",
      image: "https://parthsarthigroup.com/wp-content/uploads/2025/02/Studio-Apartments-in-Jaipur.webp"
    },
    {
      id: 11,
      title: "Duplex Smart Home",
      description: "Modern duplex smart home",
      price: "75,00,000",
      location: "Morocco",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_Th7lh9OzTBZ8fRqZlqBXTr5srgNjtl6XA&s"
    },
    {
      id: 12,
      title: "Hill View Bungalow",
      description: "Spacious bungalow with hill view",
      price: "2,75,00,000",
      location: "Switzerland",
      image: "https://cdn.homedit.com/wp-content/uploads/2015/10/Hillside-House-from-Shands-Studio-1024x744.jpg"
    }
  ];

  useEffect(() => {
    axios
      .get("http://localhost:5000/properties")
      .then((res) => setData(res.data))
      .catch(() => {
        console.log("Server not running → using fallback data");
        setData(fallbackData);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">

      <h2 className="text-3xl font-bold text-black text-center mb-8">
        Featured Luxury Properties
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl"
          >

            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
            </div>

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
