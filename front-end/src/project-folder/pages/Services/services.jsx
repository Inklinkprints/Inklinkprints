import './services.css';
import image1 from "../../assets/svg/Inklink-graphic-design.png";
import image2 from "../../assets/svg/Inklink-printer.svg";
import image3 from "../../assets/svg/Inklink-billboard.svg";
import image4 from "../../assets/svg/Inklink-gift.svg";
import { useNavigate } from "react-router-dom";





export default function Services() {



  const navigate = useNavigate();
  const handleButtonDesign = (path) => {
    navigate(path); 
  };


  return (
    <div className="services-main" id="services">
      <div className="services-title-box">
        <h3 className="services-header">Welcome to Ink Link</h3>
        <h1 className="services-desc-main">
          Our services ensure that our clients goals are achieved with exceptional satisfaction and trust.
        </h1>
        <p className="services-desc-secondary">
        We deliver high-quality designs and prints that exceed expectations, showcasing your brand identity with custom logos, business cards, vibrant signage, and personalized gifts for a truly interactive experience.
        </p>
      </div>

      <div className='services-container'>
        <div className="services-card hidden">
          <div className="services-card-head">
        <img className="services-card-logo" src={image1}></img>


          </div>
          <div className='services-card-body'>
            <h3 className="services-card-title">DESIGN</h3>
            <p className="services-card-desc">
            Our expert design team crafts custom logos, business cards, brochures, and more, ensuring each piece aligns with your identity.
            </p>
          </div>
          <button onClick={()=> handleButtonDesign("/services/design")} className="services-card-btn">Explore</button>
        </div>

        <div className="services-card hidden">
          <div className="services-card-head">
          <img className="services-card-logo" src={image2}></img>
          </div>
          <div className='services-card-body'>
            <h3 className="services-card-title">DIGITAL PRINT</h3>
            <p className="services-card-desc">
              Utilizing advanced printing technologies, we deliver vibrant colors, sharp details, and flawless finishes in every project.
            </p>
          </div>
          <button onClick={()=> handleButtonDesign("/services/digitalprint")} className="services-card-btn">Explore</button>
        </div>

        <div className="services-card hidden">
          <div className="services-card-head">
 
          <img className="services-card-logo" src={image3}></img>



          </div>
          <div className='services-card-body'>
            <h3 className="services-card-title">SIGNAGES</h3>
            <p className="services-card-desc">
              From bold outdoor advertising to custom indoor visuals, we bring your ideas to life with impeccable detail and impact.
            </p>
          </div>
          <button onClick={()=> handleButtonDesign("/services/signage")} className="services-card-btn">Explore</button>
        </div>

        <div className="services-card hidden">
          <div className="services-card-head">
          <img className="services-card-logo" src={image4}></img>


          </div>
          <div className='services-card-body'>
            <h3 className="services-card-title">GIFTING</h3>
            <p className="services-card-desc">
              We specialize in creating unique, customized gifts like mugs, T-shirts, and photo frames that add a personal touch to any occasion.
            </p>
          </div>
          <button onClick={()=> handleButtonDesign("/services/gift")} className="services-card-btn">Explore</button>
        </div>
      </div>
    </div>
  );
}
