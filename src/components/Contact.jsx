import React, { useRef, useState } from "react";
import { Mail, Facebook,  Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const formRef = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        formRef.current,
        "YOUR_PUBLIC_KEY" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <section id="contact" className="mt-16 mb-12 max-w-3xl mx-auto px-4">
      <div className="text-center mb-8">
        <h1 className="relative bottom-2 text-5xl md:text-6xl font-extrabold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
          Get In Touch
        </h1>
        <div className="relative bottom-1 w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
            <p className="text-slate-600 text-md md:text-base mt-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
        </div>

       <div className="flex justify-center gap-6 mb-2">
            <a 
                href="https://www.facebook.com/felixjseph/"
                target="_blank" 
                className="text-blue-600 hover:scale-110"
            >
                <Facebook className="w-7 h-7" />
            </a>
            <a
                href="https://www.instagram.com/felixyuboi/"
                target="_blank"
                className="text-blue-600 hover:scale-110"
            >
                <Instagram className="w-7 h-7"/>
            </a>
            <a
                href="https://www.linkedin.com/in/felixjseph/"
                target="_blank"
                className="text-blue-600 hover:scale-110"
            >
                <Linkedin className="w-7 h-7"/>
            </a>
        </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="mb-2 text-slate-700 font-medium">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="border border-blue-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Name"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-slate-700 font-medium">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="border border-blue-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-slate-700 font-medium">Message</label>
          <textarea
            name="message"
            required
            className="border border-blue-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write your message..."
            rows={6}
          />
        </div>

        <button
          type="submit"
          className="group px-6 py-3 items-center flex bg-linear-to-r from-blue-400 to-purple-600 text-white rounded-md font-medium transition-all duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1 group hover:bg-blue-600 cursor-pointer"
        >
        <Mail className="w-5 h-5 mr-2 transition-all duration-300 ease-in-out group-hover:-translate-y-0.5"/>
          Send Message
        </button>

        {success === true && (
          <p className="text-green-500 mt-2">Message sent successfully!</p>
        )}
        {success === false && (
          <p className="text-red-500 mt-2">Oops! Something went wrong.</p>
        )}
      </form>
      <div className="text-center text-slate-500 md:text-base mt-12">
        <p>@ 2025 Felix Joseph U. Castañeda. All rights reserved. </p>
        <p>Built with ❤️ & lots of espresso.</p>
      </div>
    </section>
  );
}
