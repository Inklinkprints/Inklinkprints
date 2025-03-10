import "./contact.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
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
       
          setFormData({ name: "", email: "", message: "", phone: "" });// Clear the form
          alert('Message submitted successfully! We will contact you shortly.');
          
        },
        (error) => {
          console.log("FAILED...", error);
     
          alert("Failed to send the message request. Please try again.");
        }
      );
  };

  return (
    <main className="contact-main" id="contact">
        <div className="contact-title">
            <h1>Contact Us</h1>
        </div>

        <div className="contact-details-box">
      <section className="contact-info">
        <div className="contact-intro">
          <h1>GET IN TOUCH</h1>
          <p>
            We’re here to bring your ideas to life with exceptional design and
            printing services. Whether you’re looking for creative solutions,
            personalized gifts, or impactful marketing materials, we’re just a
            message away. Reach out to us, and let’s start your next project
            today!
          </p>
        </div>

        <div className="contact-details">
          <div className="contact-card">
            <i className="fas fa-map-marker-alt"></i>
            <div className="contact-box">
              <h1>Address</h1>
              <p>
                1st Floor, Sai Gandhi Square, Varthur Main Rd, Opp. to Sigma
                Tech Park, Ramagondanahalli, Whitefield, Bengaluru, Karnataka
                560066
              </p>
            </div>
          </div>
          <div className="contact-card">
            <i className="fas fa-phone-alt"></i>
            <div className="contact-box">
              <h1>Phone</h1>
               <a className="contact-phone"href="tel:+919078133352">+91 73376 89898</a> /
              <a className="contact-phone" href="tel:+919845110504">+91 73376 79898</a>
            </div>
          </div>
          <div className="contact-card">
            <i className="fas fa-envelope"></i>
            <div className="contact-box">
              <h1>E-Mail</h1>
              <a className="contact-email" href="mailto:contact@inklinkprints.com">contact@inklinkprints.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-box">
        <h1>SEND US A MESSAGE</h1>
        <form action="/submit-form" method="POST" className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="contact-input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="contact-input"
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              value={formData.phone}
            onChange={handleChange}
              className="contact-input"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              required
              value={formData.message}
            onChange={handleChange}
              className=" contact-input contact-textarea"
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="contact-btn">Submit</button>
          </div>
        </form>
      </section>
      </div>

      <div className="contact-ofc-timing">
        <p>Working Hours: Monday to Saturday 10:00 AM to 8:00 PM (Sunday Holiday)</p>
      </div>

      
    </main>
  );
}
