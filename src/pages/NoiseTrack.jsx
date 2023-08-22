import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Banner from '../partials/Banner';
import HeroHome from '../partials/HeroHome';
import FeaturesZigzag from '../partials/FeaturesZigzag';
import Footer from '../partials/Footer';

function NoiseTrack() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      
      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <HeroHome />
            <FeaturesZigzag/>
          </div>
        </section>

        <Footer/>
      </main>

      <Banner />

    </div>
  );
}

export default NoiseTrack;