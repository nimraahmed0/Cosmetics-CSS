import React from 'react';

const About = () => {
  return (
    <section className="about h-screen flex items-center justify-start bg-cover bg-center text-white pl-0 md:pl-96"
     style={{ backgroundImage: "url('/bnrr.jpg')" }}>
      <div className="bg-black bg-opacity-80 p-8 rounded-md max-w-lg">
        <h2 className="text-4xl font-bold mb-4 text-center font-serif" data-aos="fade-up">About Us</h2>
        <p>We believe beauty should be clean, effective, 
        and kind to both you and the planet. Our products are made with 
        high-quality, cruelty-free ingredients that enhance your natural 
        beauty, leaving you feeling confident and radiant. Free from 
        harmful chemicals, our formulations are designed for all skin 
        types and are sustainably sourced to protect the environment.</p>
      </div>
    </section>
  );
};

export default About;