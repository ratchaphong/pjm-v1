import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { compose, mapProps } from "recompose";
import withHooks from "../lib/withHooks";
import { filterObjByArray } from "../utils/helper";
import { info } from "../store/authReducer";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const enhancer = compose(
  withHooks(() => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState({ date: "" });
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);

    useEffect(() => {
      console.log("Width:", windowSize.innerWidth);
      if (windowSize.innerWidth < 768) {
        navigate("/comingsoon", { replace: true });
      }
    }, [navigate, windowSize]);

    useEffect(() => {
      dispatch(info());
    }, [dispatch, searchValue]);

    useEffect(() => {
      console.log(currentUser);
    }, [currentUser]);

    const onChange = useCallback(
      (value) => {
        setSearchValue({ ...searchValue, ...value });
      },
      [searchValue, setSearchValue]
    );

    return {
      //   products,
      onChange,
      searchValue,
    };
  }),
  mapProps((props) =>
    filterObjByArray(props, [
      //   "products",
      "onChange",
      "searchValue",
    ])
  )
);

export default enhancer;
