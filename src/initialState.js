const initialState = {
    blogs : [],
    currentBlog: {},
    error : {
        errorMessage: "",
        errorCode: ""
    },
    pageData : {
        successPage: {}
    },
    user : {
        loggedIn : false
    }
}

export default initialState;