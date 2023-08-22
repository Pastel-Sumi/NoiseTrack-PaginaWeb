import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import FeaturesZigzagIndex from '../partials/FeaturesZigzagIndex';
import Testimonials from '../partials/Testimonials';


import Banner from '../partials/Banner';
import Footer from '../partials/Footer';





function Home() {
  return (
   
    <div className="flex flex-col min-h-screen overflow-hidden">
      <link rel='icon' type='image/png' href='../images/image.png'></link>
      
      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        {/* <FeaturesBlocks /> */}
        {/* <FeaturesZigZag /> */}
        <FeaturesZigzagIndex />
        {/* <Testimonials /> */}
      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;