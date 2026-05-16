import '../App.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message');
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact card fade-in" id="contact">
      <h1>Contact Me</h1>

      <p className="contact-text">
        Feel free to reach out if you’d like to discuss opportunities,
        projects, or just have a conversation.
      </p>

      <div className="contact-container">

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="btn-primary">
            Send Message
          </button>

        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> nandiniraulji1456@gmail.com</p>
          <p><strong>Location:</strong> Vadodara, India</p>
          <p><strong>Open to:</strong> Internship & Entry-Level Roles</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;