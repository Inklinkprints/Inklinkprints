import React from "react";
import "./reviews.css"; // Import the CSS file for styling
import data from "./data"; // Import data
import img1 from "../../assets/google-symbol.png";
import image from "../../assets/Inklink-google-review.jpg";
// Corrected path typo

const Reviews = () => {
  const reviewsData = data[0] || { result: { name: "", rating: 0 } }; // Fallback for missing data

  // Function to render stars with precision based on 0.1 increments
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        // Full star
        stars.push(
          <span key={i} className="review-star review-star-filled">
            ★
          </span>
        );
      } else if (rating > i - 1 && rating < i) {
        // Partial star
        stars.push(
          <span key={i} className="review-star review-star-partial">
            ★
          </span>
        );
      } else {
        // Empty star
        stars.push(
          <span key={i} className="review-star review-star-empty">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  // Check if reviewsData is valid
  if (!reviewsData || !reviewsData.result) {
    return <div className="review-error">No reviews available.</div>;
  }

  return (
    <div className="review-section">
      <h2 className="review-heading">Our Reviews</h2>
      <div className="review-container">
        <div className="review-header">
          <div className="review-logo-box">
            <div className="google-logo">
              <img src={img1} className="reviews-logo"></img>
            </div>
            <div className="review-info">
              <h2 className="review-title">
                Customer Reviews for{" "}
                {reviewsData.result?.name || "our services"}
              </h2>
              <div className="review-stars">
                {renderStars(reviewsData.result?.rating || 0)}
                {"4.9 out of 5"}
              </div>
            </div>
          </div>

          <div className="review-btn-container">
            <a
              className="review-btn"
              href="https://www.google.com/search?hl=en-IN&gl=in&q=1st+Floor,+InkLink+Prints+-+Digital+Print+%7C+Visiting+Card+%7C+Boucher+%7C+Flyers+%7C+Poster+%7C+Photo+Frame+%7C+Sign+Board+%7C+Flex+Print,+Sai+Gandhi+Square,+Varthur+Main+Rd,+opp.+to+Sigma+Tech+Park,+Ramagondanahalli,+Whitefield,+Bengaluru,+Karnataka+560066&ludocid=6384770485751126047&lsig=AB86z5XbsU8ti8vSki4v1_EWg8OQ#lrd=0x3bae13003dfc2bbf:0x589b42edc798181f,3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Write a Review
            </a>
          </div>
        </div>

        <div className="review-list">
          <div className="review-img-card">
            <div className="review-img-box">
              <img
                src={image}
                alt="Google Reviews Logo"
                className="review-logo-image"
              />
            </div>
            <div className="review-img-desc">
              <h3>Ramasai</h3>
              <p>Data Engineer, KPMG</p>
            </div>
          </div>
          <div className="review-description-box">
            <p className="review-description">
              InkLink Prints sets a remarkable standard in the printing
              industry. As a data engineer based in the KPMG, I am genuinely
              impressed by their exceptional print quality and innovative design
              work. Their attention to detail is unmatched, delivering vibrant,
              precise results that elevate every project. InkLink's team is a
              perfect blend of creativity and professionalism, understanding
              client needs and transforming ideas into stunning realities. Their
              customer service is seamless, with a friendly and responsive staff
              ensuring every experience is hassle-free. InkLink Prints is
              undoubtedly a trusted partner for all design and printing needs,
              consistently exceeding expectations.
            </p>
            <a
              href="https://www.google.com/maps/place/InkLink+Prints+-+Digital+Print+%7C+Visiting+Card+%7C+Boucher+%7C+Flyers+%7C+Poster+%7C+Photo+Frame+%7C+Sign+Board+%7C+Flex+Print/@12.9568146,77.7401882,17z/data=!4m18!1m9!3m8!1s0x3bae13003dfc2bbf:0x589b42edc798181f!2sInkLink+Prints+-+Digital+Print+%7C+Visiting+Card+%7C+Boucher+%7C+Flyers+%7C+Poster+%7C+Photo+Frame+%7C+Sign+Board+%7C+Flex+Print!8m2!3d12.9568146!4d77.7427631!9m1!1b1!16s%2Fg%2F11vwnymlcv!3m7!1s0x3bae13003dfc2bbf:0x589b42edc798181f!8m2!3d12.9568146!4d77.7427631!9m1!1b1!16s%2Fg%2F11vwnymlcv?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="review-link"
            >
              Check our reviews{" "}
              <span className="right-arrow">
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
