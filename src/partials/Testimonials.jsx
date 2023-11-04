import React from 'react';

import BastianImage from '../images/bastian.jpg';
import CamilaImage from '../images/camila.jpg';
import DiegoImage from '../images/diego.jpg';
import EstebanImage from '../images/esteban.jpg';
import RobertoImage from '../images/roberto.jpg';
import SofiaImage from '../images/sofia.jpg';

function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4"> Conoce al equipo</h2>
            <p className="text-xl text-gray-400">Somos un equipo compuesto por seis estudiantes de Ingeniería Civil Informática, Te invitamos a conocer lo que cada uno te puede ofrecer.
            </p>
            <br/>
            
          </div>

          {/* Miembros */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none">

            {/* Camila */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img  className="rounded-full" src={CamilaImage} width="80" height="80" alt="Camila Arancibia" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                        </div>
                </div>
                <blockquote className="text-lg text-gray-400 grow">— Encargada de organizar al equipo. Siempre me encontrarás con una lista de todo's con lo que tengo que hacer en el día.</blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">Camila Arancibia</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/camila-arancibia/" target='_blank'>Scrum Master</a>
                    <a href= "https://www.linkedin.com/in/camila-arancibia/" className="justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" target='_blank' aria-label="Linkedin">
                      <svg className="linkedin-icon"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                      </svg>
                    </a>
                </div>
                
              </div>

            {/* Sofia */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={SofiaImage} width="80" height="80" alt="Sofia Martínez - Product Owner" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                      </div>
                </div>
                <blockquote className="text-lg text-gray-400 grow">— Encargada de buscar soluciones para los usuarios ayudando a mejorar procesos y entregar el máximo valor.</blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">Sofia Martínez</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/sofia-martinez-alvarez/" target='_blank'>Product Owner</a>
                    <a href= "https://www.linkedin.com/in/sofia-martinez-alvarez/" className="justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" target='_blank' aria-label="Linkedin">
                      <svg className="linkedin-icon"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                      </svg>
                    </a>
                </div>
              </div>
                
            {/* Diego */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={DiegoImage} width="80" height="80" alt="Diego Aguilera - Marketing" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                      </div>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">— Encargado de comunicar y crear algo de lo que se este orgulloso.</blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">Diego Aguilera</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/diegoaguileram/" target='_blank'> Marketing y Comunicaciones</a>
                    <a href= "https://www.linkedin.com/in/diegoaguileram/" className="justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" target='_blank' aria-label="Linkedin">
                        <svg className="linkedin-icon"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                      </svg>
                      </a>
                </div>
              </div>

            {/* Roberto */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={RobertoImage} width="80" height="80" alt="Roberto Covarrubias - Testing" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                      </div>
                    </div>
                    <blockquote className="text-lg text-gray-400 grow">— Tester encargado de asegurar el cumplimiento de los objetivos para asegurar la conformidad del usuario.</blockquote>
                    <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                      <cite className="text-gray-200 not-italic">Roberto Covarrubias</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/roberto-covarrubias-figueroa-739843258/" target='_blank'> Encargado de Testing</a>
                      {/*Linkedin */}
                      <a href= "https://www.linkedin.com/in/roberto-covarrubias-figueroa-739843258/" className="justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" target='_blank' aria-label="Linkedin">
                        <svg className="linkedin-icon"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                      </svg>
                      </a>
                </div>
              </div>

            {/* Bastian */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={BastianImage} width="80" height="80" alt="Bastian Lara - Encargado de Tecnologías" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                      </div>
                    </div>
                    <blockquote className="text-lg text-gray-400 grow">— Encargado de transformar las ideas en realidad a través de la tecnología y el trabajo en equipo.</blockquote>
                    <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                      <cite className="text-gray-200 not-italic">Bastian Lara</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/bastian-lara-q/" target='_blank'> Encargado de Tecnologías</a>
                      <a href= "https://www.linkedin.com/in/bastian-lara-q/" className="justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" target='_blank' aria-label="Linkedin">
                        <svg className="linkedin-icon"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                      </svg>
                      </a>
                </div>
              </div>

            {/* Esteban */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <img className="rounded-full" src={EstebanImage} width="80" height="80" alt="Esteban Manríquez - Encargado UX" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                      </svg>
                        </div>
                    </div>
                    <blockquote className="text-lg text-gray-400 grow">— Encargado de velar porque nuestras soluciones entreguen la mejor experiencia al usuario.</blockquote>
                    <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                      <span className="text-gray-200 not-italic">Esteban Manríquez</span> - 
                      <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.linkedin.com/in/esmanri/" target='_blank'> Encargado UX</a> 
                      <a href= "https://www.linkedin.com/in/esmanri/" className="justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" target='_blank' aria-label="Linkedin">
                        <svg className="linkedin-icon"  xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                      </svg>
                      </a>
                </div>
                
              </div>
          </div>
              </div>

           </div>

</section>
  );
}

export default Testimonials;
