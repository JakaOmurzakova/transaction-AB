import React from "react";
import { Route, Routes } from "react-router-dom";
import SuccessPage from "../pages/SuccessPage";
import UnsuccessPage from "../pages/UnsuccessPage";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/failed" element={<UnsuccessPage />} />
    </Routes>
  );
};

export default MainRoute;
