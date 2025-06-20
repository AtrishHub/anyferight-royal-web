
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Package, Truck, MapPin, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 80, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.4"
    )
    .fromTo(imageRef.current,
      { opacity: 0, x: 100, scale: 0.8 },
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(iconsRef.current?.children,
      { opacity: 0, scale: 0.8, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 1, stagger: 0.2, ease: "back.out(1.7)" },
      "-=0.6"
    );

    // Floating animation for icons
    gsap.to(iconsRef.current?.children, {
      y: -15,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.4
    });

    // Subtle parallax for background elements
    gsap.to(".floating-bg", {
      y: -30,
      x: 20,
      duration: 6,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 1
    });

  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-royal"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-pulse floating-bg"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse floating-bg"></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-green-500/5 rounded-full blur-2xl animate-pulse floating-bg"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Global Logistics</span>
              <br />
              <span className="text-slate-100">Solutions</span>
            </h1>

            <p ref={subtitleRef} className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Delivering excellence across continents with cutting-edge technology and unmatched reliability
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16">
              <button
                onClick={() => {
                  const element = document.querySelector('#services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-royal-950 px-8 py-4 rounded-full font-semibold transition-all duration-300 royal-glow hover:scale-105 flex items-center space-x-2 transform"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => navigate('/quote')}
                className="group glass-effect hover:bg-white/10 text-slate-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 border border-gold-400/30 hover:border-gold-400/60 backdrop-blur-sm"
              >
                Get Free Quote
              </button>
            </div>

            <div ref={iconsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0">
              <div className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-500 group cursor-pointer backdrop-blur-sm">
                <Package className="h-12 w-12 text-gold-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Smart Packaging</h3>
                <p className="text-slate-400 text-sm">Advanced packaging solutions for maximum protection</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-500 group cursor-pointer backdrop-blur-sm">
                <Truck className="h-12 w-12 text-gold-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Fast Delivery</h3>
                <p className="text-slate-400 text-sm">Express shipping with real-time tracking</p>
              </div>
              
              <div className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-500 group cursor-pointer backdrop-blur-sm">
                <MapPin className="h-12 w-12 text-gold-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-slate-100 mb-2">Global Reach</h3>
                <p className="text-slate-400 text-sm">Worldwide network covering 200+ countries</p>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=500&fit=crop" 
                alt="Modern logistics warehouse with automated systems" 
                className="w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950/60 via-transparent to-transparent"></div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-6 transition-all duration-300 hover:scale-110 transform">
                  <Play className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
                </button>
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="glass-effect rounded-lg p-3 text-center backdrop-blur-sm">
                    <div className="text-lg font-bold text-gold-400">99.9%</div>
                    <div className="text-xs text-slate-300">On-Time</div>
                  </div>
                  <div className="glass-effect rounded-lg p-3 text-center backdrop-blur-sm">
                    <div className="text-lg font-bold text-gold-400">200+</div>
                    <div className="text-xs text-slate-300">Countries</div>
                  </div>
                  <div className="glass-effect rounded-lg p-3 text-center backdrop-blur-sm">
                    <div className="text-lg font-bold text-gold-400">24/7</div>
                    <div className="text-xs text-slate-300">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
