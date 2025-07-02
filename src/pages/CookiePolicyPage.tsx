import Header from '../components/Header';
import Footer from '../components/Footer';
import CookiePolicy from '../components/CookiePolicy';

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Header />
      <main>
        <CookiePolicy />
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicyPage;