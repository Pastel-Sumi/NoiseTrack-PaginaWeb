import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Banner from '../partials/Banner';
import Testimonials from '../partials/Testimonials';
import Roku6its from '../partials/Roku6its';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Footer from '../partials/Footer';

function Nosotros() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-WTN5QW9FYK"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-WTN5QW9FYK');
        </script>

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Roku6its></Roku6its>
            <FeaturesBlocks></FeaturesBlocks>
            <Testimonials></Testimonials>
          </div>
        </section>
        
        <Footer/>
      </main>

      <Banner />

    </div>
  );
}

export default Nosotros;