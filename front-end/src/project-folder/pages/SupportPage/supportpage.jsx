import { useState } from 'react';
import './SupportPage.css';
import emailjs from "@emailjs/browser";

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    message: ''
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    // Replace these with your EmailJS credentials
    const serviceID = "service_gsl940b";
    const templateID = "template_foy4zzg";
    const publicKey = "gE_-LI79rfQXAisu_";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({ name: "", email: "", product: "", message: "" });// Clear the form
         
          alert('Support request submitted! We will contact you shortly.');
          
        },
        (error) => {
          console.log("FAILED...", error);
         
          alert('Failed to send support request. Please try again.');
        }
      );
  };


  const faqItems = [
    { question: "How long does printing typically take?", answer: "Standard orders take 3-5 business days. Rush services available for select products." },
    { question: "What file formats do you accept?", answer: "We prefer PDF, AI, EPS, and high-resolution JPEG/PNG files." },
    { question: "Do you offer design services?", answer: "Yes, we provide professional design services at an additional cost." },
    { question: "What is your return policy?", answer: "We accept returns for printing errors within 7 days of delivery." }
  ];



  return (
    <div className="support-container">
      <header className="support-header">
        <h1>Inklink Prints Support Center</h1>
        <p>We're here to help with all your printing needs</p>
      </header>

      {/* Contact Information Section */}
      <section className="support-contact-section">
        <h2>Contact Information</h2>
        <div className="support-contact-details">
          <div className="support-contact-block">
            <h3>Visit Us</h3>
            <address>
              1st Floor, Sai Gandhi Square<br />
              Varthur Main Rd, Opp. to Sigma Tech Park<br />
              Ramagondanahalli, Whitefield<br />
              Bengaluru, Karnataka 560066
            </address>
          </div>
          <div className="support-contact-block">
            <h3>Reach Out</h3>
            <p>Phone: +91 73376 89898 / +91 73376 79898</p>
            <p>Email: <a href="mailto:contact@inklinkprints.com">contact@inklinkprints.com</a></p>
          </div>
        </div>
      </section>

      {/* Support Ticket Form */}
      <section className="support-ticket-section">
        <h2>Submit Support Request</h2>
        <form className="support-form" onSubmit={handleSubmit}>
          <div className="support-form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
        
            />
          </div>
          <div className="support-form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
           
            />
          </div>
          <div className="support-form-group">
            <label>Product/Service:</label>
            <select 
  name="product"
  required
  value={formData.product}
  onChange={handleChange}
>
              <option value="">Select Product</option>
              <option>Business Cards</option>
              <option>Vehicle Wraps</option>
              <option>Custom Apparel</option>
              <option>Signage Solutions</option>
            </select>
          </div>
          <div className="support-form-group">
            <textarea
              name="message"
              placeholder="Message"
              required
              value={formData.message}
            onChange={handleChange}
         
            ></textarea>
          </div>
          <div className="support-form-group">
            <button type="submit" className="support-submit-btn" >Submit</button>
          </div>
        </form>
        
      </section>

      {/* FAQ Section */}
      <section className="support-faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="support-faq-list">
          {faqItems.map((item, index) => (
            <div key={index} className="support-faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products/Services List */}
      <section className="support-products-section">
        <h2>Our Products & Services</h2>
        <div className="support-product-categories">
          <div className="support-product-category">
            <h3>Gifts & Merchandise</h3>
            <ul className="support-product-list">
              {['T-Shirts', 'Mugs', 'Backpacks', 'Custom Umbrellas', 'Acrylic Keychains'].map((item, i) => (
                <li key={i} className="support-product-item">{item}</li>
              ))}
            </ul>
          </div>
          <div className="support-product-category">
            <h3>Signage Solutions</h3>
            <ul className="support-product-list">
              {['Indoor Signs', 'Vehicle Wraps', 'Billboards', '3D Signs', 'Safety Signs'].map((item, i) => (
                <li key={i} className="support-product-item">{item}</li>
              ))}
            </ul>
          </div>
          <div className="support-product-category">
            <h3>Print Products</h3>
            <ul className="support-product-list">
              {['Business Cards', 'Brochures', 'Catalogs', 'Posters', 'Packaging Boxes'].map((item, i) => (
                <li key={i} className="support-product-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;