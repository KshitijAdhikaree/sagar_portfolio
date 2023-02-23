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
          <div className="flex flex- md:flex-row">
            <div className=" px-10 py-10 w-1/2">
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
                    className="w-full border border-gray-400 p-2"
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
                    className="w-full border border-gray-400 p-2"
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
                    className="w-full border border-gray-400 p-2"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button
                  className="bg-white text-primary p-2 rounded hover:bg-secondary"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="w-1/2 mt-10">
              <h2 className="text-2xl  text-secondary font-bold mb-4">
                Contact Information
              </h2>
              <ul className="flex flex-col text-white text-base px-6 gap-3 py-10">
                <dd>Email: sagaradhikaree@gmail.com</dd>
                <dd>Location: Sinamangal, Kathmandu</dd>
                <dd>Hello</dd>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
