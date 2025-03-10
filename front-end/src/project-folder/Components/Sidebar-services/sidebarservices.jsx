import "./sidebarservices.css";
import { Link, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState } from "react";



export default function Sidebarservices() {
  const location = useLocation();
  const activeStyle = {
    color: "#333",
    background: "#ddd",
  };


  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded((prev) => prev);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [status, setStatus] = useState("");

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
    <>
      {/* Overlay */}
      <div
        className={`overlay ${isExpanded ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>

      <nav
        className={`service-sidebar ${isExpanded ? "expanded" : "collapsed"}`}
      >
        <header className="service-sidebar-header" >
          {isExpanded && <h1>Services</h1>}
         
        </header>
        
        <ul className="service-sidebar-list">
          <li>
            <Link
              to="/services/design"
              style={{
                ...(location.pathname === "/services/design"
                  ? activeStyle
                  : {}),
                ...(!isExpanded
                  ? { display: "flex", flexDirection: "column" }
                  : {}),
              }}
              className="service-sidebar-link"
            >
              <i
                class="fas fa-palette  service-icon"
                style={{ marginRight: !isExpanded ? "0em" : "" }}
              ></i>
              <span
                style={{
                  fontSize: !isExpanded ? "0.6em" : "",
                  marginTop: !isExpanded ? "1em" : "",
                }}
              >
                Design
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/services/digitalprint"
              style={{
                ...(location.pathname === "/services/digitalprint"
                  ? activeStyle
                  : {}),
                ...(!isExpanded
                  ? { display: "flex", flexDirection: "column" }
                  : {}),
              }}
              className="service-sidebar-link"
            >
              <i
                className="fa-solid fa-print service-icon"
                style={{ marginRight: !isExpanded ? "0em" : "" }}
              ></i>
              <span
                style={{
                  fontSize: !isExpanded ? "0.6em" : "",
                  marginTop: !isExpanded ? "1em" : "",
                }}
              >
                Digital Print
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/services/signage"
              style={{
                ...(location.pathname === "/services/signage"
                  ? activeStyle
                  : {}),
                ...(!isExpanded
                  ? { display: "flex", flexDirection: "column" }
                  : {}),
              }}
              className="service-sidebar-link"
            >
              <i
                className="fa-solid fa-sign-hanging service-icon"
                style={{ marginRight: !isExpanded ? "0em" : "" }}
              ></i>
              <span
                style={{
                  fontSize: !isExpanded ? "0.6em" : "",
                  marginTop: !isExpanded ? "1em" : "",
                }}
              >
                Signages
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/services/gift"
              style={{
                ...(location.pathname === "/services/gift" ? activeStyle : {}),
                ...(!isExpanded
                  ? { display: "flex", flexDirection: "column" }
                  : {}),
              }}
              className="service-sidebar-link"
            >
              <i
                className="fa-solid fa-gift service-icon"
                style={{ marginRight: !isExpanded ? "0em" : "" }}
              ></i>
              <span
                style={{
                  fontSize: !isExpanded ? "0.6em" : "",
                  marginTop: !isExpanded ? "1em" : "",
                }}
              >
                Gifts
              </span>
            </Link>
          </li>
        </ul>
        {isExpanded&&<div className="service-sidebar-form-box">
        <h1 className="service-form-title">Enquiry Now</h1>
        <form
          action="/submit-form"
          method="POST"
          className="service-sidebar-form"
          onSubmit={handleSubmit}
        >
          <div className="service-form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="service-sidebar-input"
            />
          </div>
          <div className="service-form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="service-sidebar-input"
            />
          </div>
          <div className="service-form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="service-sidebar-input"
            />
          </div>
          <div className="service-form-group">
            <textarea
              name="message"
              placeholder="Message"
              required
              value={formData.message}
            onChange={handleChange}
              className="service-sidebar-textarea"
            ></textarea>
          </div>
          <div className="service-form-group">
            <button type="submit" className="service-sidebar-btn">
              Submit
            </button>
          </div>
        </form>
        {status && <p className="form-status">{status}</p>}
      </div>}
        

      </nav>
    </>
  );
}
