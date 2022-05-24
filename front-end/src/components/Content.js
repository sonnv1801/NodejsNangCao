import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Logo from "../assets/img/Logo.jpg";
import PageBonus from "./HomePage/PageBonus";
import SingleProductPage from "./SingleProduct/SingleProductPage";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<PageBonus />}></Route>
        {/* <Route
          exact
          path="/chocanh/:id"
          element={<SingleProductPage />}
        ></Route> */}
        <Route path="/chocanh" element={"404"}></Route>
      </Routes>
    </div>
  );
};

export default Content;
