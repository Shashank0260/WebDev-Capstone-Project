import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form); // 

    // Example: save to localStorage
    localStorage.setItem("contact", JSON.stringify(form));

    alert("Message sent!");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-100 py-16 flex justify-center">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg"
          ></textarea>

          <button className="w-full bg-blue-800 text-white py-3 rounded-lg">
            Send Message
          </button>

        </form>
      </div>

    </div>
  );
}

export default Contact;