import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Home from "./component/Pages/Home/index/Home";




import AboutPages from "./component/Pages/About/index/About";

import Contact from "./component/Pages/Contact";
import WorkDetail from "./component/Pages/CaseStudy/index/WorksPage";

import { ServiceRoutes } from "./component/Pages/Services/ServiceRoutes";
import ContactNew from "./component/UI/Contactnew";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutPages />  } />

          {ServiceRoutes.map(({ path, element }) => ( 
            <Route key={path} path={path} element={element} />
          ))}

          <Route path="/work/:companyName" element={<WorkDetail />} />

        
         
       
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact12" element={<ContactNew />} />
        </Routes>
      </Layout>
    </Router>
  );
}
