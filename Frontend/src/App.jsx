import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Home from "./component/Pages/Home/index/Home";

import Company from "./component/Pages/Company";
import Contact from "./component/Pages/Contact";

import WorkDetail from "./component/Pages/CaseStudy/index/WorksPage";

import { ServiceRoutes } from "./component/Pages/Services/ServiceRoutes";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          {ServiceRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          <Route path="/work/:companyName" element={<WorkDetail />} />

          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
