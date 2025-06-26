import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Globe, Award, TrendingUp, Shield, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stats animation
      gsap.fromTo(statsRef.current?.children,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Features animation
      gsap.fromTo(featuresRef.current?.children,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Image animation
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Globe, number: "200+", label: "Countries Served" },
    { icon: Users, number: "50K+", label: "Happy Clients" },
    { icon: Award, number: "25+", label: "Years Experience" },
    { icon: TrendingUp, number: "99.9%", label: "On-Time Delivery" }
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Advanced security protocols and insurance coverage for all shipments"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service and real-time tracking support"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive worldwide network of partners and logistics hubs"
    }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">About Anyfreight</span>
            </h2>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              For over 25 years, Anyfreight has been at the forefront of global logistics, 
              connecting businesses worldwide with reliable, efficient, and innovative shipping solutions.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              From small packages to large cargo, we handle every shipment with the same dedication 
              to excellence that has made us a trusted partner for thousands of businesses globally.
            </p>
          </div>

          <div ref={imageRef} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
            <img
              src="./aboutimg.png"
              alt="Global logistics operations center"
              className="relative z-10 w-full h-96 object-fit rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-black/30 rounded-2xl z-20"></div>
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-black" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div ref={featuresRef} className="space-y-8">
          <h3 className="text-3xl font-bold gradient-text mb-8 text-center">Why Choose Anyfreight</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 group text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-black" />
                </div>
                <h4 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-gold-400 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
