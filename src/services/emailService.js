import emailjs from '@emailjs/browser';

export const sendBookingEmailToAdmin = async (formData) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateIdAdmin = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    

  return emailjs.send(
    serviceId,
    templateIdAdmin,
    {
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      date: formData.date,
      time: formData.time,
    },
    publicKey
  );
};
