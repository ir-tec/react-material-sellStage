const initialValues = {
  width: window.innerWidth,
};

export const Reducer = (state = initialValues, action) => {
  switch (action.type) {
    case "WIDTH":
      return {
        ...state,
        width: action.payload,
      };

    default:
      return state;
  }
};
