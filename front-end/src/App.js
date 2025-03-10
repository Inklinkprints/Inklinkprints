import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./project-folder/layouts/mainpage/mainpage.jsx";
import Productssubpage from "./project-folder/layouts/Productspage/productspage.jsx";
import Servicessubpage from "./project-folder/layouts/Servicespage/servicespage.jsx";
import TermsConditions from "./project-folder/layouts/TermsConditions/termsconditions.jsx";
import Privacy from "./project-folder/pages/Privacy/Privacy.jsx"
import SupportPage from "./project-folder/pages/SupportPage/supportpage.jsx";


function App() {



  return (
    <div className="App">
      {/* Wrap the entire app in the Router */}
      <Router>
        {/* Define routes using Routes and Route */}
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/products/*" element={<Productssubpage />} />
          <Route path="/services/*" element={<Servicessubpage />} />
          <Route path="/termsconditions" element={<TermsConditions/>}/>
          <Route path="/Privacy" element={<Privacy/>}/>
          <Route path="/Support" element={<SupportPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
