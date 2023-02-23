import React, { useState } from "react";
import image from "../pics/homepaper.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "Enter your Name",
    email: "abcd@efgh.com",
    message: "Write your msg here!!",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your form submission logic here
    console.log(formData);
  };
  return (
    <div>
      <div className="flex w-full items-center sm:flex-col">
        <div
          className="h-screen w-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="flex flex-auto">
            <div className="px-32 py-10 w-3/4">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-secondary text-base font-medium mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg text-white border-gray-400 p-2 bg-black"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-secondary text-base font-medium mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg text-white border-gray-400 p-2 bg-black"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-secondary text-base font-medium mb-2 rounded-full"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-lg text-white border-gray-400 p-2 bg-black"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button
                  className="bg-secondary text-white p-2 rounded hover:bg-white hover:text-black"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
