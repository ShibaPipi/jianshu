import {SEARCH_BLUR, SEARCH_FOCUS} from "./actionTypes";

const defaultState = {
    focused: false,
};

export default (state = defaultState, action) => {
    if (action.type === SEARCH_FOCUS) {
        return {
            focused: true,
        }
    }
    if (action.type === SEARCH_BLUR) {
        return {
            focused: false,
        }
    }
    return state;
}