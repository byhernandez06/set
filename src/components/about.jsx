import React from 'react'
import { Link } from 'react-router-dom';
import SlotCounter from 'react-slot-counter';
import { motion } from "framer-motion";

import about_2 from "../assets/img/tech2.jpg"

const About = () => {

    return (
        <div className="about-area ptb-100 section-bg">
            <div className="container">
                <motion.div className="row align-items-center"
                    initial={{
                        opacity: 0,
                        y: 200
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                        },
                    }}
                    viewport={{ once: true }}
                >
                    <div className="col-lg-6">
                        <div className="image">
                            <img src={about_2} alt="image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="content">
                            <div className="sub-t">Sobre nosotros</div>
                            <h2>Impulsa tu negocio con tecnología web y sistemas a medida.</h2>
                            <p>Desarrollamos plataformas web y sistemas personalizados que se adaptan a las necesidades de tu negocio, optimizando procesos, mejorando la experiencia del usuario y potenciando tu crecimiento en el entorno digital.</p>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="sub-counter">
                                        <h3>
                                            <SlotCounter
                                                value={200}
                                                animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
                                            />
                                        </h3>
                                        <p>Clientes</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="sub-counter">
                                        <h3 className='d-flex  align-items-center '>
                                            <SlotCounter
                                                value={100}
                                                animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
                                            />
                                            <span className="target">+</span>
                                        </h3>
                                        <p>Proyectos</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-4">
                                    <div className="sub-counter">
                                        <h3>
                                            <SlotCounter
                                                value={10}
                                                animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
                                            />
                                        </h3>
                                        <p>Años</p>
                                    </div>
                                </div>
                            </div>
                            <Link className="main-btn" href="/about"><span></span><i className="ri-quill-pen-line"></i> Sobre Nosotros</Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About