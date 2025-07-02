
import Header from '../components/Header';
import Footer from '../components/Footer';
import TermOfService from '../components/TermsOfService';


const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-black text-slate-50 overflow-x-hidden">
      <Header />
      <main>
     <TermOfService/>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;