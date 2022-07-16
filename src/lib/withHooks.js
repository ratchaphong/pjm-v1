import { compose, withProps } from "recompose";

const withHooks = (mapHooksToProps) =>
  compose(
    withProps((props) => {
      return mapHooksToProps(props);
    })
  );

export default withHooks;
