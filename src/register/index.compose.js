import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { compose, mapProps } from "recompose";
import withHooks from "../lib/withHooks";
import { filterObjByArray } from "../utils/helper";
import { useNavigate } from "react-router-dom";
import { register } from "../store/authReducer";

const enhancer = compose(
  withHooks(() => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.auth);
    const onSubmit = useCallback(
      (values) => {
        dispatch(
          register(values, () => {
            history(`/login`);
          })
        );
      },
      [dispatch, history]
    );
    return { isFetching, error, onSubmit };
  }),
  mapProps((props) =>
    filterObjByArray(props, ["isFetching", "error", "onSubmit"])
  )
);

export default enhancer;
