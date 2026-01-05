const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

// Configura tu cuenta de Zoho
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465, // SSL
  secure: true,
  auth: {
    user: "nelson@setdatacr.com",
    pass: "RhTFW4R1UNrR"
  }
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send({ message: "Método no permitido" });
    }

    const { name, email, subject, phone_number, message } = req.body;

    const mailOptions = {
      from: '"Formulario Web" <nelson@setdatacr.com>', // tu correo de Zoho
      replyTo: email,
      to: "nelson@setdatacr.com",
      subject: `Nuevo mensaje: ${subject}`,
      text: `
Nombre: ${name}
Email: ${email}
Teléfono: ${phone_number}

Mensaje:
${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send({ message: "✅ Mensaje enviado con éxito" });
    } catch (error) {
      console.error("Error enviando correo:", error);
      res.status(500).send({ message: "❌ Error al enviar el mensaje" });
    }
  });
});
