import React, { useState } from 'react';
import Header from './Header';

function Banner() {

  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
      {bannerOpen && (
        <div className="fixed top-0  w-full z-60">
          <Header/>
        </div>
      )}
    </>
  );
}

export default Banner;