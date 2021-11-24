export let generalizeFunction = (value) => {
  return {
    type: "INC_BY_VALUE",
    payload: {
      value,
    },
  };
};
