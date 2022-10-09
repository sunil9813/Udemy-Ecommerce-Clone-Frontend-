import {
    GET_CATEGORIES, GET_COURSES, GET_SINGLE_COURSE
} from "../actions";

const courses_reducer = (state, action) => {
    if(action.type === GET_COURSES){
        return {
            ...state,
            courses: action.payload
        }
    }

    if(action.type === GET_SINGLE_COURSE){
        return {
            ...state,
            single_course: action.payload
        }
    }

    if(action.type === GET_CATEGORIES){
        return {
            ...state,
            categories: action.payload
        }
    }

    throw new Error(`No matching "${action.type}" - action type`);
}

export default courses_reducer;