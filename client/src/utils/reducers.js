import {

} from "./actions";

const defaultState = {
    products: []
}

export const reducer = (state=defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;