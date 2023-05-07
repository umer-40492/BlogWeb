import { createStoreHook } from 'react-redux';
const initialState = {};
function reducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT_VIEW_COUNT':
        const { postId } = action.payload;
        const currentCount = state[postId] || 0;
        return {
          ...state,
          [postId]: currentCount + 1,
        };
      default:
        return state;
    }
  }
  const store = createStoreHook(reducer);
  export default store;