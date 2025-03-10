import './productspage.css'
import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Navbar =lazy(() => import("../../Components/Navbar/navbar"));
const Sidebar =lazy(() => import("../../Components/Sidebar-products/sidebarproducts"));
const Footer = lazy(() => import("../../Components/Footer/footer"));
const Businesscards = lazy(() => import("../../pages/Finalgoods/Digitalprint/businesscards"));
const Books = lazy(() => import("../../pages/Finalgoods/Digitalprint/books"));
const Brouchers = lazy(() => import("../../pages/Finalgoods/Digitalprint/brouchers"));
const Calendars = lazy(() => import("../../pages/Finalgoods/Digitalprint/calendars"));
const Catalogue = lazy(() => import("../../pages/Finalgoods/Digitalprint/catalogues"));
const Danglers = lazy(() => import("../../pages/Finalgoods/Digitalprint/danglers"));
const Filefolders = lazy(() => import("../../pages/Finalgoods/Digitalprint/filefolders"));
const Flyers = lazy(() => import("../../pages/Finalgoods/Digitalprint/flyers"));
const Greetingcards = lazy(() => import("../../pages/Finalgoods/Digitalprint/greetingcards"));
const Packagingboxes = lazy(() => import("../../pages/Finalgoods/Digitalprint/packagingboxes"));
const Posters = lazy(() => import("../../pages/Finalgoods/Digitalprint/posters"));
const Stickers = lazy(() => import("../../pages/Finalgoods/Digitalprint/stickers"));
const Tentcards = lazy(() => import("../../pages/Finalgoods/Digitalprint/tentcards"));

const Wallgraphics = lazy(() => import("../../pages/Finalgoods/Signage/wallgraphics"));
const Floorgraphics = lazy(() => import("../../pages/Finalgoods/Signage/floorgraphics"));
const Officedoorsigns = lazy(() => import("../../pages/Finalgoods/Signage/officedoorsigns"));
const Safetyandcompliance = lazy(() => import("../../pages/Finalgoods/Signage/safety&compliance"));
const Menuboards = lazy(() => import("../../pages/Finalgoods/Signage/menuboards"));
const Canvasprints = lazy(() => import("../../pages/Finalgoods/Signage/canvasprints"));
const Banners = lazy(() => import("../../pages/Finalgoods/Signage/banners"));
const Billboards = lazy(() => import("../../pages/Finalgoods/Signage/billboards"));
const Twoandthreed = lazy(() => import("../../pages/Finalgoods/Signage/2d&3dsigns"));
const Channellettersigns = lazy(() => import("../../pages/Finalgoods/Signage/channelletterssigns"));
const Dimensionalsigns = lazy(() => import("../../pages/Finalgoods/Signage/dimensionalsigns"));
const Vehiclewraps = lazy(() => import("../../pages/Finalgoods/Signage/vehiclewraps"));
const Flags = lazy(() => import("../../pages/Finalgoods/Signage/flags"));
const Directionalandinfosigns = lazy(() => import("../../pages/Finalgoods/Signage/directional&infosigns"));
const Acrylicsigns = lazy(() => import("../../pages/Finalgoods/Signage/acrylicsigns"));
const Pylon = lazy(() => import("../../pages/Finalgoods/Signage/pylon"));
const Eventshow = lazy(() => import("../../pages/Finalgoods/Signage/eventshow"));
const Directionalsigns = lazy(() => import("../../pages/Finalgoods/Signage/directionalsigns"))
const Digitalsigns = lazy(() => import("../../pages/Finalgoods/Signage/digitalsigns"));

const Tshirt = lazy(() => import("../../pages/Finalgoods/Customizedgifts/tshirt"));
const Hoodiesandsweatshirts = lazy(() => import("../../pages/Finalgoods/Customizedgifts/hoodiesandsweatshirts"));
const Capsandhats = lazy(() => import("../../pages/Finalgoods/Customizedgifts/capsandhats"));
const Mugs = lazy(() => import("../../pages/Finalgoods/Customizedgifts/mugs"));
const Tumblers = lazy(() => import("../../pages/Finalgoods/Customizedgifts/tumblers"));
const Waterbottles = lazy(() => import("../../pages/Finalgoods/Customizedgifts/waterbottles"));
const Photoframes = lazy(() => import("../../pages/Finalgoods/Customizedgifts/Photoframes"));
const Notebooks = lazy(() => import("../../pages/Finalgoods/Customizedgifts/Notebooks"));
const Calendarsgifts = lazy(() => import("../../pages/Finalgoods/Customizedgifts/calendars"));
const Backpacks = lazy(() => import("../../pages/Finalgoods/Customizedgifts/backpacks"));
const Mousepacks = lazy(() => import("../../pages/Finalgoods/Customizedgifts/mousepads"));
const Acrylicandmetalkeychains = lazy(() => import("../../pages/Finalgoods/Customizedgifts/acrylicandmetalkeychains"));
const Photomagnets = lazy(() => import("../../pages/Finalgoods/Customizedgifts/Photomagnets"));
const Businesscardholders = lazy(() => import("../../pages/Finalgoods/Customizedgifts/businesscardholders"));
const Customumbrellas = lazy(() => import("../../pages/Finalgoods/Customizedgifts/customumbrellas"));


const productsMenu = {
  "Business Essentials": [
    { label: "Business Cards", path: "/products/digital-print/business-cards" },
    { label: "Packaging Boxes", path: "/products/digital-print/packaging-boxes" },
    { label: "Tent Cards", path: "/products/digital-print/tent-cards" },
    { label: "Books", path: "/products/digital-print/books" },
    { label: "Brochures", path: "/products/digital-print/brochures" },
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



export default function Productssubpage() {

  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
    return (
        <div className="Productssubpage-page">
            <div className="Productssubpage-navbar"><Navbar fixedBackground={true} /> </div>
            <div className="Productssubpage-container">
                <div className="Productssubpage-sidebar"> <Sidebar menuData={productsMenu} /></div>
                <div className="Productssubpage-content">
               
        <Routes>
          <Route path="digital-print/business-cards" element={<Businesscards />} />
          <Route path="digital-print/books" element={<Books />} />
          <Route path="digital-print/brochures" element={<Brouchers />} />
          <Route path="digital-print/calendars" element={<Calendars />} />
          <Route path="digital-print/catalogues" element={<Catalogue />} />
          <Route path="digital-print/danglers" element={<Danglers />} />
          <Route path="digital-print/file-folders" element={<Filefolders />} />
          <Route path="digital-print/flyers" element={<Flyers />} />
          <Route path="digital-print/greeting-cards" element={<Greetingcards />} />
          <Route path="digital-print/packaging-boxes" element={<Packagingboxes />} />
          <Route path="digital-print/posters" element={<Posters />} />
          <Route path="digital-print/stickers" element={<Stickers />} />
          <Route path="digital-print/tent-cards" element={<Tentcards />} />
          
        </Routes>

        <Routes>
          <Route path="signage/indoor/wall-graphics" element={<Wallgraphics />} />
          <Route path="signage/indoor/floor-graphics" element={<Floorgraphics />} />
          <Route path="signage/indoor/directional-signs" element={<Directionalsigns />} />
          <Route path="signage/indoor/office-door-signs" element={<Officedoorsigns />} />
          <Route path="signage/indoor/safety-compliance" element={<Safetyandcompliance />} />
          <Route path="signage/indoor/menu-boards" element={<Menuboards />} />
          <Route path="signage/indoor/canvas-prints" element={<Canvasprints />} />
          <Route path="signage/indoor/digital-signs" element={<Digitalsigns />} />
          </Routes>

          <Routes>

          <Route path="signage/outdoor/banners" element={<Banners />} />
          <Route path="signage/outdoor/billboards" element={<Billboards />} />
          <Route path="signage/outdoor/2d-3d-signs" element={<Twoandthreed />} />
          <Route path="signage/outdoor/channel-letter-signs" element={<Channellettersigns />} />
          <Route path="signage/outdoor/dimensional-signs" element={<Dimensionalsigns />} />
          <Route path="signage/outdoor/vehicle-wraps" element={<Vehiclewraps />} />
          <Route path="signage/outdoor/flags" element={<Flags />} />
          <Route path="signage/outdoor/directional-information-signs" element={<Directionalandinfosigns />} />
          <Route path="signage/outdoor/acrylic-signs" element={<Acrylicsigns />} />
          <Route path="signage/outdoor/pylon" element={<Pylon />} />
          <Route path="signage/outdoor/event-show" element={<Eventshow />} />
          <Route path="signage/outdoor/digital-signs" element={<Digitalsigns />} />
          
        </Routes>

        <Routes>
            
          <Route path="customized-gifting/t-shirts" element={<Tshirt/>} />
          <Route path="customized-gifting/hoodies-sweatshirts" element={<Hoodiesandsweatshirts />} />
          <Route path="customized-gifting/caps-hats" element={<Capsandhats />} />
          <Route path="customized-gifting/mugs" element={<Mugs />} />
          <Route path="customized-gifting/tumblers" element={<Tumblers />} />
          <Route path="customized-gifting/water-bottles" element={<Waterbottles />} />
          <Route path="customized-gifting/photo-frames" element={<Photoframes />} />
          <Route path="customized-gifting/notebooks" element={<Notebooks />} />
          <Route path="customized-gifting/calendars" element={<Calendarsgifts />} />
          <Route path="customized-gifting/backpacks" element={<Backpacks />} />
          <Route path="customized-gifting/mouse-pads" element={<Mousepacks />} />
          <Route path="customized-gifting/acrylic-metal-keychains" element={<Acrylicandmetalkeychains />} />
          <Route path="customized-gifting/photo-magnets" element={<Photomagnets />} />
          <Route path="customized-gifting/business-card-holders" element={<Businesscardholders />} />
          <Route path="customized-gifting/custom-umbrellas" element={<Customumbrellas />} />
        </Routes>
   
         
            </div>
            </div>
            <div className="Productssubpage-footer"><Footer/></div>
        </div>
    )
}