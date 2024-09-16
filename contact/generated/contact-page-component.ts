import React, { useState } from 'react';
import { AspectRatioBox } from './AspectRatioBox';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>I'd love to hear from you! Feel free to reach out using the form below or through my social media channels.</p>

      <div className="contact-content">
        <section className="contact-info">
          <h2>Get in Touch</h2>
          <p>You can reach me at:</p>
          <ul>
            <li>Email: example@email.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Location: City, Country</li>
          </ul>
        </section>

        <section className="contact-form-container">
          <h2>Send a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </section>
      </div>

      <section className="featured-project">
        <h2>Featured Project</h2>
        <AspectRatioBox>
          <img src="https://picsum.photos/1200/600" alt="Featured project" />
        </AspectRatioBox>
        <p>Check out my latest project! Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
    </div>
  );
};

export default ContactPage;
