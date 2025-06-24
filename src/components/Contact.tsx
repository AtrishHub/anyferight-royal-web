import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo([formRef.current, infoRef.current],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Replace these with your actual EmailJS service, template, and user IDs
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID1;
      const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message
        },
        USER_ID
      );
      alert('Thank you for your inquiry! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Sorry, there was an error sending your message. Please try again later.');
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Global Headquarters",
      details: ["16 dunvegan crescent", " Brampton, ON, L7A2Y3"]
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+1 9099721106 "]
    },
    {
      icon: Mail,
      title: "Email Contact",
      details: ["info@anyfreightlogistic.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 8:00 PM", "Saturday: 9:00 AM - 5:00 PM", "24/7 Emergency Support"]
    }
  ];

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-b from-royal-900 to-royal-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Cpath d='M30 30c16.569 0 30-13.431 30-30H30v30z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to streamline your logistics? Let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div ref={formRef} className="glass-effect rounded-3xl p-8 lg:p-12 hover:bg-white/5 transition-all duration-300">
            <h3 className="text-2xl font-bold gradient-text mb-8">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-royal-800/50 border border-slate-600/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-royal-800/50 border border-slate-600/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-slate-300 font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-royal-800/50 border border-slate-600/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-slate-300 font-medium mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-royal-800/50 border border-slate-600/50 rounded-lg text-slate-100 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="ground">Ground Transportation</option>
                    <option value="air">Air Freight</option>
                    <option value="ocean">Ocean Freight</option>
                    <option value="warehousing">Warehousing</option>
                    <option value="supply-chain">Supply Chain</option>
                    <option value="last-mile">Last Mile Delivery</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-royal-800/50 border border-slate-600/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200 resize-none"
                  placeholder="Tell us about your logistics needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-royal-950 px-8 py-4 rounded-lg font-semibold transition-all duration-200 royal-glow hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          <div ref={infoRef} className="space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <info.icon className="h-6 w-6 text-royal-950" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-gold-400 transition-colors duration-200">
                      {info.title}
                    </h4>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-slate-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="glass-effect rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 royal-glow">
              <h4 className="text-2xl font-bold gradient-text mb-4">Emergency Logistics?</h4>
              <p className="text-slate-300 mb-6">Need urgent shipping solutions? Our emergency team is ready 24/7</p>
              <a
                href="tel:+19099721106"
                className="inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                Call Emergency Line
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
