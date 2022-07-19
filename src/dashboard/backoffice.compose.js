import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { compose, mapProps } from "recompose";
import withHooks from "../lib/withHooks";
import { filterObjByArray } from "../utils/helper";
import { getUser, getUsers, updateUser } from "../store/userReducer";
import { logout } from "../store/authReducer";
import {
  getCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
  deleteCustomerSuccess,
  addCustomer,
} from "../store/customerReducer";
import {
  addProduct,
  deleteProduct,
  deleteProductSuccess,
  getProduct,
  getProducts,
  updateProduct,
} from "../store/productReducer";

const one_day = 1000 * 60 * 60 * 24;

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const enhancer = compose(
  withHooks(() => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.auth);
    const { users, user } = useSelector((state) => state.user);
    const { customers, customer } = useSelector((state) => state.customer);
    const { products, product } = useSelector((state) => state.product);

    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState({ date: "" });
    const [isHumberger, setIsHamburger] = useState(false);
    const [isState, setIsState] = useState("dashboard");
    const [isAddCustomer, setIsAddCustomer] = useState(false);
    const [isAddProduct, setIsAddProduct] = useState(false);
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
      dispatch(getUsers());
      dispatch(getCustomers());
      dispatch(deleteCustomerSuccess());
      dispatch(deleteProductSuccess());

      dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
      if (currentUser._id) {
        dispatch(getUser(currentUser._id));
      }
    }, [dispatch, currentUser]);

    useEffect(() => {
      if (isState)
        setTimeout(() => {
          setIsHamburger(false);
        }, 500);
    }, [isState]);

    const onChange = useCallback(
      (value) => {
        setSearchValue({ ...searchValue, ...value });
      },
      [searchValue, setSearchValue]
    );

    const onClick = () => {
      setIsHamburger(!isHumberger);
    };

    const selectedCustomer = (id) => {
      dispatch(getCustomer(id));
    };

    const selectedProduct = (id) => {
      dispatch(getProduct(id));
    };

    const onSubmitSetting = (values) => {
      dispatch(
        updateUser(currentUser._id, values, () => {
          // window.location.reload();
        })
      );
    };

    const onSubmitCustomer = (values) => {
      dispatch(
        updateCustomer(values._id, values, () => {
          // window.location.reload();
          dispatch(getCustomers());
        })
      );
    };

    const onSubmitProduct = (values) => {
      dispatch(
        updateProduct(values._id, values, () => {
          // window.location.reload();
          dispatch(getProducts());
        })
      );
    };

    const onDeleteCustomer = (id) => {
      dispatch(
        deleteCustomer(id, () => {
          // window.location.reload();
          dispatch(getCustomers());
        })
      );
    };

    const onDeleteProduct = (id) => {
      dispatch(
        deleteProduct(id, () => {
          // window.location.reload();
          dispatch(getProducts());
        })
      );
    };

    const onAddCustomer = (values) => {
      dispatch(
        addCustomer(values, () => {
          dispatch(getCustomers());
        })
      );
      setIsAddCustomer(false);
    };

    const onAddProduct = (values) => {
      dispatch(
        addProduct(values, () => {
          dispatch(getProducts());
        })
      );
      setIsAddProduct(false);
    };

    const signout = () => {
      dispatch(logout());
    };

    function updateTime(createdAt) {
      var present_date = new Date();
      var create_date = new Date(createdAt);
      var Result =
        Math.round(present_date.getTime() - create_date.getTime()) / one_day;
      var Final_Result = Result.toFixed(0);
      if (Final_Result < 1) {
        return "";
      } else if (Final_Result >= 1 && Final_Result < 31) {
        return `${Final_Result} days`;
      } else {
        return `${Final_Result / 30} months`;
      }
    }

    return {
      onChange,
      onClick,
      searchValue,
      isHumberger,
      signout,
      users,
      user,
      isState,
      setIsState,
      onSubmitSetting,
      customers,
      customer,
      selectedCustomer,
      onSubmitCustomer,
      onDeleteCustomer,
      updateTime,
      isAddCustomer,
      setIsAddCustomer,
      onAddCustomer,
      products,
      product,
      selectedProduct,
      onDeleteProduct,
      isAddProduct,
      setIsAddProduct,
      onAddProduct,
      onSubmitProduct,
    };
  }),
  mapProps((props) =>
    filterObjByArray(props, [
      "onChange",
      "onClick",
      "searchValue",
      "isHumberger",
      "signout",
      "users",
      "user",
      "isState",
      "setIsState",
      "onSubmitSetting",
      "customers",
      "customer",
      "selectedCustomer",
      "onSubmitCustomer",
      "onDeleteCustomer",
      "updateTime",
      "isAddCustomer",
      "setIsAddCustomer",
      "onAddCustomer",
      "products",
      "product",
      "selectedProduct",
      "onDeleteProduct",
      "isAddProduct",
      "setIsAddProduct",
      "onAddProduct",
      "onSubmitProduct",
    ])
  )
);

export default enhancer;
