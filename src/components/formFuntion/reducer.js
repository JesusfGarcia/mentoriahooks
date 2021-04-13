import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.setInput:
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.payload,
        },
      };
    case actions.toggleLoading:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
