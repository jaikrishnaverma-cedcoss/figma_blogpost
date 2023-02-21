import React from "react";
import Footer from "./master/Footer";
import Header from "./master/Header";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import ArticlePage from "./ArticlePage";

const Main = () => {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/BLOG" index element={<ArticlePage />} />
            <Route path="*" index element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Main;
