import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./title";
import Home from "./home";
import About from "./about";
import Service from "./service";
import Portfolio from "./portfolio";
import NotFound from "./notfound";
import Gallery from "./gallery";
import KfcTemplate from "./kfc";
import AddTemplate from "./add";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="example">
          <Route index={true} element={<Title />} />
          {/* <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} /> */}
          <Route path="add" element={<AddTemplate />} />
          <Route path="kfc" element={<KfcTemplate />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
