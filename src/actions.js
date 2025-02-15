const ADD_BLOGS = "ADD_BLOGS";
const SET_SUCCESS_PAGE_DATA = "SET_SUCCESS_PAGE_DATA";
const SET_CURRENT_BLOG_DATA = "SET_CURRENT_BLOG_DATA";
const SET_USER_PROFILE = "SET_USER_PROFILE";

function setBlogsAll(payload) {
  return {
    type: ADD_BLOGS,
    payload,
  };
}

function setSuccessPageData(payload) {
  return {
    type: SET_SUCCESS_PAGE_DATA,
    payload,
  };
}

function setCurrentBlogData(payload) {
  return {
    type: SET_CURRENT_BLOG_DATA,
    payload,
  };
}

function setUserProfile(payload) {
  return {
    type: SET_USER_PROFILE,
    payload : {
      userName: payload.user?.name,
      nickName: payload.user?.nickname,
      userEmail: payload.user?.email,
      loggedIn: payload.isAuthenticated,
      profilePic: payload.user?.picture,
      isProfileLoading: payload.isLoading
    }
  }
}

export {
  setBlogsAll,
  setSuccessPageData,
  setCurrentBlogData,
  setUserProfile,
  SET_USER_PROFILE,
  ADD_BLOGS,
  SET_SUCCESS_PAGE_DATA,
  SET_CURRENT_BLOG_DATA,
};
