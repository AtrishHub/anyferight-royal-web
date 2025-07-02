
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrivacyPolicy from '../components/PrivacyPolicy';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-black text-slate-50 overflow-x-hidden">
      <Header />
      <main>
       <PrivacyPolicy/>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;