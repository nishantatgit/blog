import {
  ADD_BLOGS,
  SET_SUCCESS_PAGE_DATA,
  SET_CURRENT_BLOG_DATA,
  SET_USER_PROFILE
} from "./actions";
function globalReducer(state, action) {
  switch (action.type) {
    case ADD_BLOGS:
      return {
        ...state,
        blogs: [...action.payload],
      };
    case SET_SUCCESS_PAGE_DATA:
      return {
        ...state,
        pageData: {
          ...state.pageData,
          successPage: {
            ...action.payload,
          },
        },
      };
    case SET_CURRENT_BLOG_DATA:
      return {
        ...state,
        currentBlog: {
          ...action.payload,
        },
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        user: {
          ...action.payload
        },
      };
    default:
      return state;
  }
}

export default globalReducer;
