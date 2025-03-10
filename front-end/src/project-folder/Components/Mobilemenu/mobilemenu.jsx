import React, { useState } from "react";
import "./mobilemenu.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const ProductsList = ({ title, items, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    closeMenu(); // Close the main menu
    setIsOpen(false); // Close the submenu
  };

  return (
    <li>
      <a className="submenu-toggle" onClick={toggleSubmenu}>
        {title}
        <span className="down-arrow">
          <i className="icon fa-solid fa-chevron-down"></i>
        </span>
      </a>
      {isOpen && (
        <ul>
          {Array.isArray(items)
            ? items.map((item, index) => {
                if (item.Indoor || item.Outdoor) {
                  // Handle nested subcategories (Indoor/Outdoor)
                  return Object.keys(item).map((subKey, subIndex) => (
                    <SubCategory
                      key={`${index}-${subIndex}`}
                      title={subKey}
                      items={item[subKey]}
                      closeMenu={closeMenu}
                    />
                  ));
                } else {
                  return (
                    <li key={index}>
                      <Link to={item.path} onClick={handleClick}>
                        {item.label}
                      </Link>
                    </li>
                  );
                }
              })
            : Object.keys(items).map((subCategory, index) => (
                <SubCategory
                  key={index}
                  title={subCategory}
                  items={items[subCategory]}
                  closeMenu={closeMenu}
                />
              ))}
        </ul>
      )}
    </li>
  );
};


const SubCategory = ({ title, items, closeMenu }) => {
  const [isSubOpen, setIsSubOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubOpen(!isSubOpen);
  };

  const handleClick = () => {
    closeMenu(); // Close the main menu
    setIsSubOpen(false); // Close the submenu
  };

  return (
    <li>
      <a className="submenu-toggle" onClick={toggleSubmenu}>
        {title}
        <span className="down-arrow">
          <i className="icon fa-solid fa-chevron-down"></i>
        </span>
      </a>
      {isSubOpen && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item.path} onClick={handleClick}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default function Navbarbtn({sendMessageToParent}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setServiceOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServiceSubmenu = () => {
    setServiceOpen(!isServiceOpen);
  };

  const closeMenu = () => {
    sendMessageToParent(true);
  };

  const productsMenu = {
    "Business Essentials": [
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
    "Graphic Signage": [
      {
        Indoor: [
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
        Outdoor: [
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
    "Gift Items": [
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

  const scrollWithOffset = (el) => {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbarbtn">
      <ul className="navbarbtn-ul">
        <li>
          <a href="/" onClick={closeMenu}>Home</a>
        </li>
        <li>
          <a className="submenu-toggle" onClick={toggleMenu}>
            Products
            <span className="down-arrow">
              <i className="icon fa-solid fa-chevron-down"></i>
            </span>
          </a>

          {isOpen && (
            <ul>
              {Object.keys(productsMenu).map((item, index) => (
                <ProductsList
                  key={index}
                  title={item}
                  items={productsMenu[item]}
                  closeMenu={closeMenu}
                />
              ))}
            </ul>
          )}
        </li>
        <li>
          <a className="submenu-toggle" onClick={toggleServiceSubmenu}>
            Services
            <span className="down-arrow">
              <i className="icon fa-solid fa-chevron-down"></i>
            </span>
          </a>
          {isServiceOpen && (
            <ul>
              <li>
                <Link to={"/services/design"} onClick={closeMenu}>
                  Design
                </Link>
              </li>
              <li>
                <Link to={"/services/digitalprint"} onClick={closeMenu}>
                  Digital print
                </Link>
              </li>
              <li>
                <Link to={"/services/signage"} onClick={closeMenu}>
                  Signages
                </Link>
              </li>
              <li>
                <Link to={"/services/gift"} onClick={closeMenu}>
                  Customized Gifts
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <HashLink
            smooth
            to="/#about"
            scroll={scrollWithOffset}
            className="navbar-link"
            onClick={closeMenu}
          >
            About
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#contact"
            scroll={scrollWithOffset}
            className="navbar-link"
            onClick={closeMenu}
          >
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}
