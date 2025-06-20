
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(contentRef.current?.children,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stats counter animation
      gsap.fromTo(statsRef.current?.children,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate counters
      const counters = aboutRef.current?.querySelectorAll('.counter');
      counters?.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        gsap.to(counter, {
          innerHTML: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: 15, suffix: 'K+', label: 'Deliveries Completed' },
    { number: 200, suffix: '+', label: 'Countries Served' },
    { number: 50, suffix: '+', label: 'Expert Team Members' },
    { number: 99, suffix: '%', label: 'On-Time Delivery' }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-royal-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-royal-800/50 to-royal-950/50"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">About Anyferight</span>
                <br />
                <span className="text-slate-100">Logistics</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mb-6"></div>
            </div>

            <p className="text-xl text-slate-300 leading-relaxed">
              With over a decade of excellence in global logistics, Anyferight Logistics has established itself as a trusted partner for businesses worldwide.
            </p>

            <p className="text-slate-400 leading-relaxed">
              We combine cutting-edge technology with industry expertise to deliver seamless logistics solutions. Our commitment to innovation and customer satisfaction has made us a leader in the transportation and supply chain industry.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-gold-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-100 mb-2">Global Network</h4>
                  <p className="text-slate-400">Extensive worldwide presence with strategic partnerships</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-gold-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-100 mb-2">Advanced Technology</h4>
                  <p className="text-slate-400">State-of-the-art tracking and management systems</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-gold-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-100 mb-2">24/7 Support</h4>
                  <p className="text-slate-400">Round-the-clock customer service and support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-200">
                  <span className="counter" data-target={stat.number}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-slate-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-12 hover:bg-white/5 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-6">Our Mission</h3>
            <p className="text-xl text-slate-300 leading-relaxed">
              "To revolutionize global logistics through innovative technology, exceptional service, and unwavering commitment to our clients' success. We bridge distances and connect opportunities worldwide."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
