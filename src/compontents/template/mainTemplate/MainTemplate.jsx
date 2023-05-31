import React from "react";
import styles from "./MainTemplate.module.scss";
import HomePage from "../homePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LaunchDetailsPage from '../launchDetailsPage/LaunchDetailsPage.jsx'
const MainTemplate = (props) => {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="details/:title" element={<LaunchDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainTemplate;
