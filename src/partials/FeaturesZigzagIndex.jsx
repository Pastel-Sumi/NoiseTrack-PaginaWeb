import React from 'react';

import Graphic from '../images/graphic.jpg';
import ProtectorAuditivo from '../images/protectores-auditivos.jpg';

function FeaturesZigzagIndex() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Apuesta por tu salud</div>
            <h1 className="h2 mb-4">Un producto pensado para tu seguridad</h1>
            <p className="text-xl text-gray-400">Estamos comprometidos a mejorar la salud y seguridad de los trabajadores, y creemos que una de las formas de hacerlo es reduciendo su exposición al ruido.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={Graphic} width="405"alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <h3 className="h3 mb-3">¿Por qué NoiseTrack?</h3>
                  <p className="text-xl text-gray-400 mb-4">Al menos el 30% de los trabajadores chilenos están expuestos a altos niveles de ruido en su lugar de trabajo, sumado a la carencia de monitoreo constante, aumenta el riesgo de hipoacusia y la sordera profesional, lo que puede resultar en sanciones para los empleadores; según de COMPIN RM de 1033 casos de enfermos profesionales  entre el 2005 y 2006, el 66,6% corresponde a sordera..</p>
                  
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={ProtectorAuditivo} width="405"alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                <h3 className="h3 mb-3">¿Qué es NoiseTrack?</h3>
                  <p className="text-xl text-gray-400 mb-4"> Software capaz de monitorear los niveles de ruido en el lugar de trabajo y alertar a los supervisores y trabajadores cuando es necesario usar el equipo de protección auditiva.</p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzagIndex;