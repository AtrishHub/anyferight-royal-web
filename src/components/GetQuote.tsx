
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Truck, Package, MapPin, Clock, Calculator, Shield, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GetQuote = () => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    shipmentType: '',
    origin: '',
    destination: '',
    weight: '',
    dimensions: '',
    value: '',
    urgency: '',
    description: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo([formRef.current, benefitsRef.current],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, quoteRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request:', formData);
    alert('Quote request submitted! We will contact you within 24 hours with a detailed estimate.');
    setFormData({
      shipmentType: '',
      origin: '',
      destination: '',
      weight: '',
      dimensions: '',
      value: '',
      urgency: '',
      description: ''
    });
  };

  const benefits = [
    {
      icon: Calculator,
      title: "Instant Estimates",
      description: "Get preliminary quotes within minutes"
    },
    {
      icon: Shield,
      title: "Insured Shipping",
      description: "Full insurance coverage for peace of mind"
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "24-hour quote turnaround guarantee"
    }
  ];

  return (
    <section id="quote" ref={quoteRef} className="py-20 bg-gradient-to-b from-royal-950 to-royal-900 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Get Your Quote</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tell us about your shipping needs and get a personalized quote from our logistics experts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div ref={formRef} className="lg:col-span-2 glass-effect rounded-3xl p-8 lg:p-12 hover:bg-white/5 transition-all duration-500">
            <h2 className="text-3xl font-bold gradient-text mb-8">Shipping Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="shipmentType" className="block text-slate-300 font-medium mb-3">
                    Shipment Type *
                  </label>
                  <select
                    id="shipmentType"
                    name="shipmentType"
                    value={formData.shipmentType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-royal-800/50 border border-slate-600/50 rounded-xl text-slate-100 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                  >
                    <option value="">Select shipment type</option>
                    <option value="ground">Ground Transportation</option>
                    <option value="air">Air Freight</option>
                    <option value="ocean">Ocean Freight</option>
                    <option value="express">Express Delivery</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="urgency" className="block text-slate-300 font-medium mb-3">
                    Urgency Level *
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-royal-800/50 border border-slate-600/50 rounded-xl text-slate-100 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                  >
                    <option value="">Select urgency</option>
                    <option value="standard">Standard (5-7 days)</option>
                    <option value="expedited">Expedited (2-3 days)</option>
                    <option value="urgent">Urgent (Next day)</option>
                    <option value="emergency">Emergency (Same day)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="origin" className="block text-slate-300 font-medium mb-3">
                    Origin Location *
                  </label>
                  <input
                    type="text"
                    id="origin"
                    name="origin"
                    value={formData.origin}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-royal-800/50 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                    placeholder="City, State, Country"
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="block text-slate-300 font-medium mb-3">
                    Destination Location *
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-royal-800/50 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                    placeholder="City, State, Country"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="weight" className="block text-slate-300 font-medium mb-3">
                    Weight (kg) *
                  </label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-royal-800/50 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                    placeholder="0.0"
                  />
                </div>
                <div>
                  <label htmlFor="dimensions" className="block text-slate-300 font-medium mb-3">
                    Dimensions (L×W×H cm)
                  </label>
                  <input
                    type="text"
                    id="dimensions"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-royal-800/50 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                    placeholder="50×30×20"
                  />
                </div>
                <div>
                  <label htmlFor="value" className="block text-slate-300 font-medium mb-3">
                    Declared Value ($)
                  </label>
                  <input
                    type="number"
                    id="value"
                    name="value"
                    value={formData.value}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-royal-800/50 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-slate-300 font-medium mb-3">
                  Package Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-4 bg-royal-800/50 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-300 resize-none"
                  placeholder="Describe your items, special handling requirements, etc."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-royal-950 px-8 py-5 rounded-xl font-semibold text-lg transition-all duration-300 royal-glow hover:scale-105 transform"
              >
                Get My Quote
              </button>
            </form>
          </div>

          <div ref={benefitsRef} className="space-y-8">
            <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop" 
                alt="Logistics warehouse" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold gradient-text mb-4">Why Choose Us?</h3>
              <p className="text-slate-300 mb-6">
                With over 20 years of experience in global logistics, we deliver excellence in every shipment.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-5 w-5 text-royal-950" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-100">{benefit.title}</h4>
                      <p className="text-sm text-slate-400">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 text-center">
              <Clock className="h-16 w-16 text-gold-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-100 mb-2">Quick Response</h3>
              <p className="text-slate-300 mb-4">
                Get your detailed quote within 24 hours or less
              </p>
              <div className="bg-gold-500/20 rounded-lg p-4">
                <p className="text-gold-400 font-semibold">Average Response Time: 2-4 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
