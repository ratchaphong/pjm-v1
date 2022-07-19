import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { compose, mapProps } from "recompose";
import withHooks from "../lib/withHooks";
import { filterObjByArray } from "../utils/helper";
import { login } from "../store/authReducer";

const enhancer = compose(
  withHooks(() => {
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.auth);
    const onSubmit = useCallback(
      (values) => {
        dispatch(
          login(values, () => {
            window.location.reload();
          })
        );
      },
      [dispatch]
    );
    useEffect(() => {}, []);
    return { isFetching, error, onSubmit };
  }),

  mapProps((props) =>
    filterObjByArray(props, ["isFetching", "error", "onSubmit"])
  )
);

export default enhancer;
