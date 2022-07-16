export const filterObjByArray = (object = {}, filter = []) =>
  Object.keys(object)
    .filter((key) => filter.includes(key))
    .reduce((obj, key) => {
      obj[key] = object[key];
      return obj;
    }, {});

export const go2Top = () => {
  window && window.scrollTo({ top: 0, behavior: "smooth" });
};
