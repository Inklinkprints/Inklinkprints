import "./about.css";
import img1 from "../../assets/Inklink-target.png"
import img2 from "../../assets/Inklink-mission.png"

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-intro">
        <h1 className="about-title">Who we are</h1>
        <p className="about-text1">
          We are a passionate team turn your ideas into reality with exceptional digital printing
        </p>
        <p className="about-text2">
          
We deliver personalized, high-quality products by blending creativity and innovation, ensuring every project stands out with attention to detail and leaves a lasting impression on your audience.
        </p>
      </div>

      <div className="about-vm">
        <div className="about-vision">
        <img src={img1} className="about-icon"></img>

          <h2 className="about-subtitle-vm">Our Vision</h2>
          <p className="about-desc-vm">
            To lead the way as the most trusted name in digital printing,
            setting new trends in signage, graphics, arts, interiors, and
            exhibitions while inspiring creativity and innovation in every
            project.
          </p>
        </div>
        <div className="about-mission">
       
        <img src={img2} className="about-icon"></img>
          <h2 className="about-subtitle-mission">Our Mission</h2>
          <p className="about-desc-mission">
            To provide end-to-end solutions that empower our clients with
            cutting-edge digital printing services, ensuring success in the
            ever-evolving advertising and creative industries.
          </p>
        </div>
      </div>
    </div>
  );
}
