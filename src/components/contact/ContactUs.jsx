import React from 'react';
import emailjs from 'emailjs-com';

import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ef3e5fd', 'template_e9fkwrv', e.target, 'user_7hFjUnV0zZyaEOaFaIKsq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  
  return (
      <div className="form">
       <h1 data-text="Hey you! Do not hesitate to contact us">Hey you! Do not hesitate to contact us</h1>
       <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" placeholder="Write your name..." />
      <label>Email</label>
      <input type="email" name="user_email" placeholder="  Write your Email..."/>
      <label>Message</label>
      <textarea name="message" placeholder="Write your Message..."/>
      <input type="submit" value="Send" />
    </form>
      </div>
      
  );
  
}