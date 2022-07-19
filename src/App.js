import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import {
//   useDispatch,
//   useSelector
// } from "react-redux";
// import { info } from "./store/authReducer";
import Pages from "./pages";
import { go2Top } from "./utils/helper";

function App() {
  const location = useLocation();
  // const dispatch = useDispatch();
  // const initialized = useSelector((state) => state.auth.initialized);

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(info());
  //   }, 5000);
  // }, [dispatch]);

  useEffect(() => {
    go2Top();
  }, [location.pathname]);

  // return initialized ? <Pages /> : null;
  return <Pages />;
}

export default App;
