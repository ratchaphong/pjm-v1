import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Title from "./title";
// import Home from "./home";
// import About from "./about";
// import Service from "./service";
import Portfolio from "./portfolio";
import NotFound from "./notfound";
import ComingSoon from "./comingsoon";
import Gallery from "./gallery";
import KfcTemplate from "./kfc";
import AddTemplate from "./add";
import AgentTemplate from "./agent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="example">
          <Route index={true} element={<Title />} />
          {/* <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} /> */}
          <Route path="add" element={<AddTemplate />} />
          <Route path="kfc" element={<KfcTemplate />} />
          <Route path="agent" element={<AgentTemplate />} />
        </Route>
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
