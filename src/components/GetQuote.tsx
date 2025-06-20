import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Package, Truck, MapPin, Calendar, DollarSign, Clock } from 'lucide-react';

const GetQuote = () => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    origin: '',
    destination: '',
    shipmentType: '',
    weight: '',
    dimensions: '',
    value: '',
    urgency: '',
    additionalServices: [] as string[],
    description: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo([formRef.current, stepsRef.current, imageRef.current],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power3.out"
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

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    alert('Thank you for your quote request! We will get back to you within 24 hours with a detailed proposal.');
    // Reset form or redirect as needed
  };

  const steps = [
    {
      icon: Package,
      title: "Tell us about your shipment",
      description: "Provide details about what you're shipping"
    },
    {
      icon: MapPin,
      title: "Specify locations",
      description: "Let us know pickup and delivery addresses"
    },
    {
      icon: Clock,
      title: "Choose timeline",
      description: "Select your preferred delivery timeframe"
    },
    {
      icon: DollarSign,
      title: "Get your quote",
      description: "Receive a customized pricing proposal"
    }
  ];

  return (
    <section ref={quoteRef} className="py-20 bg-black relative overflow-hidden min-h-screen">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get Your Quote</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Get a personalized shipping quote in minutes. Our experts will provide competitive pricing tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div ref={stepsRef} className="lg:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-8">How it works</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 glass-effect rounded-xl p-4 hover:bg-white/5 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-100 mb-1">{step.title}</h4>
                    <p className="text-slate-400 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div ref={imageRef} className="mt-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional logistics team ready to help"
                className="relative z-10 w-full h-64 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/30 rounded-2xl z-20"></div>
            </div>
          </div>

          <div ref={formRef} className="lg:col-span-2">
            <div className="glass-effect rounded-3xl p-8 hover:bg-white/5 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold gradient-text mb-6">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-slate-300 font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-slate-300 font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-slate-300 font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-slate-300 font-medium mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold gradient-text mb-6">Shipment Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="serviceType" className="block text-slate-300 font-medium mb-2">Service Type *</label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-100 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200"
                      >
                        <option value="">Select service type</option>
                        <option value="ground">Ground Transportation</option>
                        <option value="air">Air Freight</option>
                        <option value="ocean">Ocean Freight</option>
                        <option value="warehousing">Warehousing</option>
                        <option value="supply-chain">Supply Chain</option>
                        <option value="last-mile">Last Mile Delivery</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="shipmentType" className="block text-slate-300 font-medium mb-2">Shipment Type *</label>
                      <select
                        id="shipmentType"
                        name="shipmentType"
                        value={formData.shipmentType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-100 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200"
                      >
                        <option value="">Select shipment type</option>
                        <option value="documents">Documents</option>
                        <option value="packages">Packages</option>
                        <option value="freight">Freight</option>
                        <option value="pallets">Pallets</option>
                        <option value="containers">Containers</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="origin" className="block text-slate-300 font-medium mb-2">Origin *</label>
                      <input
                        type="text"
                        id="origin"
                        name="origin"
                        value={formData.origin}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200"
                        placeholder="Pickup location"
                      />
                    </div>
                    <div>
                      <label htmlFor="destination" className="block text-slate-300 font-medium mb-2">Destination *</label>
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200"
                        placeholder="Delivery location"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold gradient-text mb-6">Package Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="weight" className="block text-slate-300 font-medium mb-2">Weight (kg)</label>
                      <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200"
                        placeholder="0.0"
                      />
                    </div>
                    <div>
                      <label htmlFor="dimensions" className="block text-slate-300 font-medium mb-2">Dimensions (cm)</label>
                      <input
                        type="text"
                        id="dimensions"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200"
                        placeholder="L x W x H"
                      />
                    </div>
                    <div>
                      <label htmlFor="value" className="block text-slate-300 font-medium mb-2">Value ($)</label>
                      <input
                        type="number"
                        id="value"
                        name="value"
                        value={formData.value}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-slate-300 font-medium mb-2">Urgency</label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-100 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200"
                  >
                    <option value="">Select urgency</option>
                    <option value="standard">Standard (5-7 days)</option>
                    <option value="express">Express (2-3 days)</option>
                    <option value="overnight">Overnight</option>
                    <option value="same-day">Same Day</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-slate-300 font-medium mb-2">Additional Details</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all duration-200 resize-none"
                    placeholder="Please provide any additional information about your shipment..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 royal-glow hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Get My Quote</span>
                  <Calendar className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
