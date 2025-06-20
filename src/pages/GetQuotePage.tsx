
import React from 'react';
import Header from '../components/Header';
import GetQuote from '../components/GetQuote';
import Footer from '../components/Footer';

const GetQuotePage = () => {
  return (
    <div className="min-h-screen bg-black text-slate-50 overflow-x-hidden">
      <Header />
      <main>
        <GetQuote />
      </main>
      <Footer />
    </div>
  );
};

export default GetQuotePage;
