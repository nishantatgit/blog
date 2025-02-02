import { ADD_BLOGS, SET_SUCCESS_PAGE_DATA } from "./actions";
function globalReducer(state, action){

    switch(action.type){
        case ADD_BLOGS: 
            return {
                ...state,
                blogs : [...action.payload]
            }
        case SET_SUCCESS_PAGE_DATA: 
            return {
                ...state,
                pageData : {
                    ...state.pageData,
                    successPage : {
                        ...action.payload
                    }
                }
            }
        default: 
            return state;
    }
}

export default globalReducer;