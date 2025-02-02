const ADD_BLOGS = "ADD_BLOGS";
const SET_SUCCESS_PAGE_DATA = "SET_SUCCESS_PAGE_DATA";

function setBlogsAll(payload){
    return {
        type: ADD_BLOGS,
        payload
    }
}

function setSuccessPageData(payload){
    return {
        type: SET_SUCCESS_PAGE_DATA,
        payload
    }
}

export { setBlogsAll, setSuccessPageData, ADD_BLOGS, SET_SUCCESS_PAGE_DATA };