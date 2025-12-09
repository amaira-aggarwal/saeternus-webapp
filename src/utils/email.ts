import { FormData as ContactFormData } from '@/app/contact-us/page';
import { FormData as AdmissionsFormData } from '@/app/admissions-consulting/_components/Contact';

export function sendEmail(data: ContactFormData | AdmissionsFormData) {
  const apiEndpoint = '/api/email';

  const currentPage = window.location.pathname;

  let formDataToSend: any = {};

  if (currentPage === '/contact-us') {
    const contactData = data as ContactFormData;
    formDataToSend = {
      name: contactData.name,
      email: contactData.email,
      number: contactData.number,
      subject: contactData.subject,
      message: contactData.message,
      route: '/contact-us',
      captcha: (contactData as any).captcha,
    };
  } else if (currentPage === '/admissions-consulting') {
    const admissionsData = data as AdmissionsFormData;
    formDataToSend = {
      name: admissionsData.name,
      email: admissionsData.email,
      number: admissionsData.number,
      program: admissionsData.program,
      route: '/admissions-consulting',
      captcha: (admissionsData as any).captcha,
    };
  }
  console.log('Data sent from utils/email.ts:', formDataToSend);
  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formDataToSend),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
