import React from "react";
import Checkout from "pages/Checkout";
import CategorieswithSidebar from "pages/CategorieswithSidebar";
import HomepageV3 from "pages/HomepageV3";
import HomepageV2 from "pages/HomepageV2";
import HomepageV1 from "pages/HomepageV1";
import Frame1 from "pages/Frame1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageV1 />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/frame1" element={<Frame1 />} />
        <Route path="/homepagev2" element={<HomepageV2 />} />
        <Route path="/homepagev3" element={<HomepageV3 />} />
        <Route
          path="/categorieswithsidebar"
          element={<CategorieswithSidebar />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
