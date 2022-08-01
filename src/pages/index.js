import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Title from "../title";
// import Home from "../home";
// import About from "../about";
// import Service from "../service";
import Portfolio from "../portfolio";
import NotFound from "../notfound";
import ComingSoon from "../comingsoon";
import Gallery from "../gallery";
import KfcTemplate from "../kfc";
import AddTemplate from "../add";
import AgentTemplate from "../agent";
import Dashboard from "../dashboard";
import Register from "../register";
import Login from "../login";
import LifeTemplate from "../life";
import FridayTemplate from "../friday";

function Pages() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  let routes = null;
  if (currentUser) {
    routes = (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="example">
          <Route index={true} element={<Title />} />
          {/* <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} /> */}
          <Route path="life" element={<LifeTemplate />} />
          <Route path="add" element={<AddTemplate />} />
          <Route path="kfc" element={<KfcTemplate />} />
          <Route path="agent" element={<AgentTemplate />} />
          {/* <Route path="backoffice" element={<BackofficeTemplate />} /> */}
          <Route path="friday" element={<FridayTemplate />} />
        </Route>
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
    );
  }

  return routes;
}

export default Pages;
