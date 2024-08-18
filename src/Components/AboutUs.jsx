import React from "react";

const AboutUs = () => {
  return (
    <div>
      <h1 className="lg:text-4xl text-2xl text-center">About Us</h1>
      <p className="text-center lg:w-[900px] mx-auto mt-6">
        Welcome to{" "}
        <span className="text-blue-500 text-xl font-semibold">Pick Place</span>,
        your premier destination for high-quality and stylish uniform solutions.
        With a commitment to excellence and a passion for fashion, we provide a
        wide range of uniforms designed to meet the needs of various industries,
        including corporate, hospitality, healthcare, education, and{" "}
        <span className="text-red-500">more.</span>
      </p>

      <h1 className="lg:text-4xl text-2xl text-center mt-8">Our Products</h1>
      <p className="text-center lg:w-[900px] mx-auto mt-6 mb-6">
        We take pride in offering a diverse selection of uniforms, including:
        Corporate Uniforms: Professional attire that reflects your companys
        values and image. Healthcare Uniforms: Comfortable and practical
        solutions for medical and healthcare professionals. Hospitality
        Uniforms: Stylish and functional uniforms for the hospitality industry.
        Educational Uniforms: Durable and well-designed uniforms for students
        and staff.
      </p>
    </div>
  );
};

export default AboutUs;
