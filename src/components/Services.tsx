
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Truck, Package, MapPin, ArrowUp, ArrowDown, ArrowLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(cardsRef.current?.children,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Truck,
      title: "Ground Transportation",
      description: "Reliable land freight services with full tracking and insurance coverage for domestic and international deliveries.",
      features: ["Real-time GPS tracking", "Insurance included", "24/7 support", "Express delivery options"]
    },
    {
      icon: Package,
      title: "Air Freight",
      description: "Fast and secure air cargo services connecting major airports worldwide with premium handling.",
      features: ["Express air delivery", "Dangerous goods certified", "Temperature controlled", "Priority handling"]
    },
    {
      icon: MapPin,
      title: "Ocean Freight",
      description: "Cost-effective sea freight solutions for large shipments with comprehensive port-to-port services.",
      features: ["Full container load", "Less container load", "Port clearance", "Door-to-door service"]
    },
    {
      icon: ArrowUp,
      title: "Warehousing",
      description: "State-of-the-art storage facilities with inventory management and distribution services.",
      features: ["Climate controlled", "24/7 security", "Inventory management", "Pick & pack services"]
    },
    {
      icon: ArrowDown,
      title: "Supply Chain",
      description: "End-to-end supply chain optimization with advanced analytics and consultation services.",
      features: ["Supply chain analysis", "Cost optimization", "Risk management", "Process automation"]
    },
    {
      icon: ArrowLeft,
      title: "Last Mile Delivery",
      description: "Efficient final delivery solutions with flexible timing and customer notification systems.",
      features: ["Same-day delivery", "Scheduled delivery", "SMS notifications", "Proof of delivery"]
    }
  ];

  return (
    <section id="services" ref={servicesRef} className="py-20 bg-gradient-to-b from-royal-950 to-royal-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23334155\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M20 20c0 11.046-8.954 20-20 20v20h20v-20c11.046 0 20-8.954 20-20H20z\"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to meet your unique business requirements
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:royal-glow cursor-pointer"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  <service.icon className="h-8 w-8 text-royal-950" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-gold-400 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-slate-400 text-sm"
                  >
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <span className="text-gold-400 font-semibold text-sm group-hover:underline">
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
