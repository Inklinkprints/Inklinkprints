import { Link } from "react-router-dom";
import "./dropdown.css";

// Reusable component for list items
const ListItem = ({ to, label, onClick}) => (
  <li>
    <Link to={to} className="products-list-dropdown-link"  onClick={onClick}>
      {label}
    </Link>
  </li>
);

export default function Products({setDropdownVisibleProducts}) {
  const productsData = {
    digitalPrint: [
      { label: "Business Cards", path: "/products/digital-print/business-cards" },
      { label: "Packaging Boxes", path: "/products/digital-print/packaging-boxes" },
      { label: "Tent Cards", path: "/products/digital-print/tent-cards" },
      { label: "Books", path: "/products/digital-print/books" },
      { label: "Brochures", path: "/products/digital-print/brochures" },
      { label: "Calendars", path: "/products/digital-print/calendars" },
      { label: "Catalogues", path: "/products/digital-print/catalogues" },
      { label: "Danglers", path: "/products/digital-print/danglers" },
      { label: "File Folders", path: "/products/digital-print/file-folders" },
      { label: "Flyers", path: "/products/digital-print/flyers" },
      { label: "Greeting Cards", path: "/products/digital-print/greeting-cards" },
      { label: "Posters", path: "/products/digital-print/posters" },
      { label: "Stickers", path: "/products/digital-print/stickers" },
    ],
    Signage: [
      {
        indoorSignage: [
          { label: "Wall Graphics", path: "/products/signage/indoor/wall-graphics" },
          { label: "Floor Graphics", path: "/products/signage/indoor/floor-graphics" },
          { label: "Directional Signs", path: "/products/signage/indoor/directional-signs" },
          { label: "Office Door Signs", path: "/products/signage/indoor/office-door-signs" },
          { label: "Safety & Compliance", path: "/products/signage/indoor/safety-compliance" },
          { label: "Menu Boards", path: "/products/signage/indoor/menu-boards" },
          { label: "Canvas Prints", path: "/products/signage/indoor/canvas-prints" },
          { label: "Digital Signs", path: "/products/signage/indoor/digital-signs" },
        ],
      },
      {
        outdoorSignage: [
          { label: "Banners", path: "/products/signage/outdoor/banners" },
          { label: "Billboards", path: "/products/signage/outdoor/billboards" },
          { label: "2D & 3D Signs", path: "/products/signage/outdoor/2d-3d-signs" },
          { label: "Channel Letter Signs", path: "/products/signage/outdoor/channel-letter-signs" },
          { label: "Dimensional Signs", path: "/products/signage/outdoor/dimensional-signs" },
          { label: "Vehicle Wraps", path: "/products/signage/outdoor/vehicle-wraps" },
          { label: "Flags", path: "/products/signage/outdoor/flags" },
          { label: "Directional & Information Signs", path: "/products/signage/outdoor/directional-information-signs" },
          { label: "Acrylic Signs", path: "/products/signage/outdoor/acrylic-signs" },
          { label: "Pylon", path: "/products/signage/outdoor/pylon" },
          { label: "Event Show", path: "/products/signage/outdoor/event-show" },
          { label: "Digital Signs", path: "/products/signage/outdoor/digital-signs" },
        ],
      },
    ],
    "Customized Gifts": [
      { label: "T-Shirts", path: "/products/customized-gifting/t-shirts" },
      { label: "Hoodies & Sweatshirts", path: "/products/customized-gifting/hoodies-sweatshirts" },
      { label: "Caps & Hats", path: "/products/customized-gifting/caps-hats" },
      { label: "Mugs", path: "/products/customized-gifting/mugs" },
      { label: "Tumblers", path: "/products/customized-gifting/tumblers" },
      { label: "Water Bottles", path: "/products/customized-gifting/water-bottles" },
      { label: "Photo Frames", path: "/products/customized-gifting/photo-frames" },
      { label: "Notebooks", path: "/products/customized-gifting/notebooks" },
      { label: "Calendars", path: "/products/customized-gifting/calendars" },
      { label: "Backpacks", path: "/products/customized-gifting/backpacks" },
      { label: "Mouse Pads", path: "/products/customized-gifting/mouse-pads" },
      { label: "Acrylic & Metal Keychains", path: "/products/customized-gifting/acrylic-metal-keychains" },
      { label: "Photo Magnets", path: "/products/customized-gifting/photo-magnets" },
      { label: "Business Card Holders", path: "/products/customized-gifting/business-card-holders" },
      { label: "Custom Umbrellas", path: "/products/customized-gifting/custom-umbrellas" },
    ],
  };


  return (
    <div className="products-list-dropdown">
      <div className="products-list-dropdown-head">
        <div className="products-list-dropdown-gridbox">Business essentials</div>
        <div className="products-list-dropdown-gridbox">Graphic signage</div>
        <div className="products-list-dropdown-gridbox">Gift items</div>
      </div>
      <div className="products-list-dropdown-body">
        <div className="products-list-dropdown-col">
          <ul>
            {productsData.digitalPrint.map(({ label, path }) => (
              <ListItem key={label} to={path} label={label}     onClick={() => setDropdownVisibleProducts(false)} />
            ))}
          </ul>
        </div>
        <div className="products-list-dropdown-col">
          <ul>
            <li className="products-list-dropdown-child">Indoor</li>
            <ul>
              {productsData.Signage[0].indoorSignage.map(({ label, path }) => (
                <ListItem key={label} to={path} label={label}     onClick={() => setDropdownVisibleProducts(false)}/>
              ))}
            </ul>
          </ul>
        </div>
        <div className="products-list-dropdown-col">
          <ul>
            <li className="products-list-dropdown-child">Outdoor</li>
            <ul>
              {productsData.Signage[1].outdoorSignage.map(({ label, path }) => (
                <ListItem key={label} to={path} label={label}     onClick={() => setDropdownVisibleProducts(false)} />
              ))}
            </ul>
          </ul>
        </div>
        <div className="products-list-dropdown-col">
          <ul>
          {productsData["Customized Gifts"].map(({ label, path }) => (
              <ListItem key={label} to={path} label={label}     onClick={() => setDropdownVisibleProducts(false)} />
            ))}
       
          </ul>
        </div>
      </div>
    </div>
  );
}
