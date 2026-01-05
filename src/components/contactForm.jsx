import React, { useState } from 'react'
import contact_img from "../assets/img/contact.jpeg"

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const form = e.target;
        const formData = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            phone_number: form.phone_number.value,
            message: form.message.value,
        };

        try {
            const res = await fetch("https://us-central1-setonline-18d82.cloudfunctions.net/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            setStatus(data.message);
        } catch (err) {
            console.error(err);
            setStatus("Error al enviar el mensaje ❌");
        } finally {
            setLoading(false);
        }
    };

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
                            <form id="contactForm" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" required placeholder="Nombre" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" required placeholder="Correo Electrónico" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" name="subject" className="form-control" required placeholder="Asunto" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" name="phone_number" className="form-control" required placeholder="Número telefónico" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 mb-5">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" cols="30" rows="6" required placeholder="Escriba su mensaje..."></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn" disabled={loading}>
                                            {loading ? "Enviando..." : <><i className="ri-mail-send-line"></i> Enviar Mensaje</>}
                                        </button>
                                    </div>
                                </div>
                            </form>

                            {status && <p style={{ marginTop: "15px" }}>{status}</p>}
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
