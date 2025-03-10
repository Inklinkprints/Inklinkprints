import InklinkCatalogue from '../../assets/catalogue/Inklink-Product-Catalogue.pdf'
import './catalogue.css';

function Catalogue() {
  return (
    <div className="Catalogue">
      <a
        href={InklinkCatalogue}
        target="_blank"
        rel="noopener noreferrer"
        className="catalogue-btn"
       download="Inklink-Product-Catalogue.pdf"
      >
        Download Catalogue
      </a>
      
    </div>
  );
}

export default Catalogue;
