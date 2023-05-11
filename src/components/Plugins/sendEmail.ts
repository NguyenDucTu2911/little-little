import emailjs from '@emailjs/browser';


export function sendEmail() {
    const serviceId = "service_n4895xg" || process.env.YOUR_SERVICE_ID;
    const templateId = "template_tn80jia" || process.env.YOUR_TEMPLATE_ID;
    const userId = "o3Cbjm-DMJh0v7Vee" || process.env.YOUR_USER_ID;

    emailjs.send(serviceId, templateId, {}, userId)
        .then((response) => {
            console.log('Email sent successfully', response);
        })
        .catch((error) => {
            console.error('Email failed to send', error);
        });
}
