import { WHATSAPP_URL } from "./constants";

export const sendConsultancyRequest = (data) => {
  const message = `
\u{1F33F} *New Consultancy Request*

\u{1F464} Name: ${data.name}
\u{1F4DE} Phone: ${data.phone}
\u{1F9D8} Consultation: ${data.type}

\u{1F4DD} Message:
${data.message}
  `.trim();

  window.open(
    `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

export const sendContactInquiry = (formData) => {
  const message = `\u{1F33F} *Guru and Goodness - Contact Inquiry*

\u{1F464} *Name:* ${formData.name}
\u{1F4E7} *Email:* ${formData.email}
\u{1F4DE} *Phone:* ${formData.phone}
\u{1F4CC} *Inquiry Type:* ${formData.type}

\u{1F4DD} *Message:*
${formData.message}`;

  const whatsappUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
};

export const orderOnWhatsApp = (product, quantity) => {
  const message =
    `Hi, I'm interested in purchasing:

Product: ${product.name}
Quantity: ${quantity}

Please share the details.`;
  const whatsappUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
};