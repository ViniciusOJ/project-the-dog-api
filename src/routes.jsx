import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home/Home";
import Breeds from "./routes/Breeds/Breeds";
import Header from "./components/Header/Header";
import Filter from "./routes/Filter/Filter";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breeds/" element={<Breeds />} />
        <Route path="/filtred/:id" element={<Filter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
