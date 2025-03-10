import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebarproducts.css";
import emailjs from "@emailjs/browser";

const SidebarItem = ({ label, to}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const activeStyle = {
    color: "black",
    background: "#ddd",
    borderRadius: "2px",
  };

  return (
    <li className="sidebar-item">
     
        <Link
          to={to}
          className={`sidebar-link ${isActive ? "active" : ""}`}
          style={isActive ? activeStyle : {}}
        >
          {label}
        </Link>
      
    </li>
  );
};

const SidebarMenu = ({
  title,
  items,
  isOpen,
  toggleMenu,
  activePath,
  hasActiveChild,

}) => {
  // Define icons based on title
  const getIconForTitle = (sectionTitle) => {
    switch (sectionTitle) {
      case "Business Essentials":
        return (
          <i
            className="fas fa-briefcase"
            style={{
              fontSize: "0.9em",

              color: hasActiveChild ? "#333" : "",
              margin: "0 1em  0 0.3em",
            }}
          ></i>
        );
      case "Graphic Signage":
        return (
          <i
            className="fas fa-calendar"
            style={{
              fontSize: "0.9em",

              color: hasActiveChild ? "#333" : "",
              margin:"0 1em  0 0.3em",
            }}
          ></i>
        );
      case "Gift Items":
        return (
          <i
            className="fas fa-gifts"
            style={{
              fontSize: "0.9em",
              marginRight: "10px",
              color: hasActiveChild ? "#333" : "",
              margin: "0 1em 0 0.3em",
            }}
          ></i>
        );
      default:
        return null;
    }
  };

  return (
    <li>
      <div
        className="menu-header"
        onClick={toggleMenu}
        style={{
          background: hasActiveChild ? "#ddd" : "",
          color: hasActiveChild ? "#333" : "",
        
        
       
          borderRadius: "5px",
    
        }}
      >
        {getIconForTitle(title)}
        <span >
    {title}
</span>
        <i
          className={`icon fa-solid fa-chevron-${
            isOpen || hasActiveChild ? "down" : "right"
          }`}
          style={{
            marginLeft: "auto",
         
          }}
        ></i>
      </div>
      {(isOpen || hasActiveChild) && (
        <ul className="sidebar-sublist">
          {items.map((item, index) =>
            item.label ? (
              <SidebarItem
                key={index}
                label={item.label}
                to={item.path}
          
              />
            ) : (
              <SidebarMenuRecursive
                key={Object.keys(item)[0]}
                title={Object.keys(item)[0]}
                items={Object.values(item)[0]}
                activePath={activePath}
             
              />
            )
          )}
        </ul>
      )}
    </li>
  );
};

const SidebarMenuRecursive = ({ title, items, activePath}) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasActiveChild = isActiveInMenu(items, activePath);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarMenu
      title={title}
      items={items}
      isOpen={isOpen}
      toggleMenu={toggleMenu}
      activePath={activePath}
      hasActiveChild={hasActiveChild}
   
    />
  );
};

const isActiveInMenu = (items, activePath) => {
  for (const item of items) {
    if (item.path === activePath) {
      return true;
    }
    if (typeof item === "object" && !item.label) {
      const subMenuItems = Object.values(item)[0];
      if (isActiveInMenu(subMenuItems, activePath)) {
        return true;
      }
    }
  }
  return false;
};

export default function Sidebar({ menuData }) {
  const location = useLocation();
  const activePath = location.pathname;
  const [openMenus, setOpenMenus] = useState({}); // State to track the open menu

  const handleToggleMenu = (menuName) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };


  return (
    <>
   

    <nav className="sidebar-box">
       <h1 className="sidebar-title">Products</h1>
      <div className="sidebar-container">
        <ul className="sidebar-list">
          {Object.keys(menuData).map((menuName) => {
            const isActive = isActiveInMenu(menuData[menuName], activePath);
            const isOpen = openMenus[menuName] || isActive;

            return (
              <SidebarMenu
                key={menuName}
                title={menuName}
                items={menuData[menuName]}
                isOpen={isOpen}
                toggleMenu={() => handleToggleMenu(menuName)}
                activePath={activePath}
                hasActiveChild={isActive}
               
              />
            );
          })}
        </ul>
      </div>
    </nav>
    </>
  );
}
