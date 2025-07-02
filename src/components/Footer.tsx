import React from 'react';
import { Truck, MapPin, Mail, Phone, InstagramIcon, LinkedinIcon, FacebookIcon } from 'lucide-react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [subscriberEmail, setSubscriberEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID1;
      const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { email: subscriberEmail },
        USER_ID
      );
      alert('Thank you for subscribing! You will now receive updates.');
      setSubscriberEmail('');
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Sorry, there was an error subscribing. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleNavigation = (href: string) => {
    if (href === '/') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (href.startsWith('/#')) {
      const id = href.slice(1); // remove leading '/'
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' }
  ];

  const services = [
    'Ground Transportation',
    'Air Freight',
    'Ocean Freight',
    'Warehousing',
    'Supply Chain',
    'Last Mile Delivery'
  ];

  return (
    <footer className="bg-white border-t border-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230ea5e9' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h20v-20c11.046 0 20-8.954 20-20H20z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Truck className="h-8 w-8 text-gold-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Anyfreight</h3>
                <p className="text-xs text-gray-500 -mt-1">Logistics</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your trusted partner in global logistics solutions. Connecting businesses worldwide with reliable, efficient, and innovative transportation services.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-royal-100 hover:bg-gold-100 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group"
              >
                <InstagramIcon className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors duration-200" />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-10 h-10 bg-royal-100 hover:bg-gold-100 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group"
              >
                <FacebookIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
              </a>
              <a
                href="https://www.linkedin.com/company/anyfreightlogistics/"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-royal-100 hover:bg-gold-100 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group"
              >
                <LinkedinIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-600 hover:text-gold-500 transition-colors duration-200 hover:translate-x-1 inline-block bg-transparent border-none p-0 m-0 cursor-pointer focus:outline-none"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-600 hover:text-gold-500 transition-colors duration-200 cursor-pointer hover:translate-x-1 inline-block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-400 mt-1 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  <p>16 dunvegan crescent</p>
                  <p>Brampton, ON, L7A2Y3</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <a
                  href="tel:+12898138987"
                  className="text-gray-600 hover:text-gold-500 transition-colors duration-200 text-sm"
                >
                  +12898138987
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <a
                  href="mailto:info@anyfreight.com"
                  className="text-gray-600 hover:text-gold-500 transition-colors duration-200 text-sm"
                >
               info@anyfreightlogistic.com
                </a>
              </div>
            </div>

            <div className="mt-8 p-4 glass-effect rounded-lg">
              <h5 className="text-sm font-semibold text-gray-900 mb-2">Stay Updated</h5>
              <p className="text-xs text-gray-500 mb-3">Get logistics insights & updates</p>
              <form className="flex" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email"
                  value={subscriberEmail}
                  onChange={e => setSubscriberEmail(e.target.value)}
                  required
                  className="flex-1 px-3 py-2 bg-royal-100/50 border border-gray-300 rounded-l-lg text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-gold-400"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white rounded-r-lg text-sm font-semibold transition-all duration-200"
                >
                  {loading ? '...' : '→'}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © {currentYear} Anyfreight Logistics. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <Link to="/privacy-policy" className="hover:text-gold-500 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-gold-500 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="hover:text-gold-500 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
