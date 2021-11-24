let initialState = 0;

let counterReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "INC_BY_VALUE":
      return state + payload?.value;
    default:
      return state;
  }
};

export default counterReducer;
