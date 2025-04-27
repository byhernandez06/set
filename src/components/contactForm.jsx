import React from 'react'
import contact_img from "../assets/img/contact.jpg"
const ContactForm = () => {
    return (
        <div className="contact-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <div className="width">
                                <div className="sub-t">Contacto</div>
                                    <h2>¡Únete a nuestra red de soluciones informáticas!</h2>
                                    <p>Nos encantaría ayudarte a impulsar tus proyectos. Únete a nuestra red de expertos en
                                        soluciones informáticas y tecnología 100% remota.
                                        ¡Juntos podemos hacer realidad tus ideas!
                                    </p>
                            </div>
                        </div>
                        <div className="contact-form">
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" id="name" required data-error="Por favor, ingrese su nombre" placeholder="Nombre" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" name="email" className="form-control" id="email" required data-error="Por favor, ingrese su correo electrónico" placeholder="Correo Electrónico" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" name="subject" className="form-control" id="subject" required data-error="Por favor, ingrese un asunto" placeholder="Asunto" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" name="phone_number" className="form-control" id="phone_number" required data-error="Por favor, ingrese un número de teléfono" placeholder="Número telefónico" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mb-5">
                                        <div className="form-group">
                                            <textarea name="message" id="message" className="form-control" cols="30" rows="6" required data-error="Por favor, ingrese un mensaje" placeholder="Escriba su mensaje..."></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn"><i className="ri-mail-send-line"></i> Enviar Mensaje</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image">
                            <img src={contact_img} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm