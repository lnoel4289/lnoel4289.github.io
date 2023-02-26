import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Dwelling from "./pages/Dwelling";

import dwellings from "./data/dwellings";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(dwellings);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />}></Route>
        <Route path="/:id" element={<Dwelling data={data} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
