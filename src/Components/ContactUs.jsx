import React from "react";

const ContactUs = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-10 mt-6 mb-6">
      <div>
        <h1 className="text-3xl">Get In Touch</h1>
        <p>Address: [Basundhara] [Dhaka, 1000] [Bangladesh]</p>
        <p>Email: jhondoe@gamil.com</p>
        <p>Phone: 0344424578</p>
      </div>
      <div>
        <h1 className="text-3xl">Office Hours</h1>
        <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactUs;
