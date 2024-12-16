import React from 'react';
import style from 'styled-jsx/style';

const Contact = () => {
  return (<div className="about h-screen flex items-center justify-start bg-cover bg-center text-white"
    style={{ backgroundImage: "url('/about.jpg')" }}>
    <section  className="contact-form border-black max-w-lg mx-auto my-20 p-8  bg-black shadow-md rounded-md bg-opacity-60">
        
      <h2 className="text-4xl font-bold mb-6 text-center text-white font-serif" data-aos="fade-up">Contact Us</h2>
      <form>
        <input type="text" placeholder="Full Name" className="w-full mb-4 px-4 py-2 border border-black rounded-md" required />
        <input type="email" placeholder="Email Address" className="w-full mb-4 px-4 py-2 border border-black rounded-md" required />
        <input type="text" placeholder="Phone Number" className="w-full mb-4 px-4 py-2 border border-black rounded-md" />
        <textarea placeholder="Your Message" className="w-full mb-4 px-4 py-2 border border-black rounded-md" rows={5} required></textarea>
        <button type="submit" className="w-full bg-red-950 text-white py-2 rounded-md ">Send Message</button>
      </form>
    </section></div>
  );
};

export default Contact;