import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    CLEAR_CART,
    GET_CART_TOTAL
} from "../actions";

const cart_reducer = (state, action) => {
    if(action.type === ADD_TO_CART){
        const tempArr = state.cart.filter((item) => item.courseID === action.payload.courseID);
        if(tempArr.length < 1){
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }
        return {
            ...state
        }
    }

    if(action.type === REMOVE_CART_ITEM){
        const tempCart = state.cart.filter(item => item.courseID !== action.payload);
        return {
            ...state,
            cart: tempCart
        }
    }

    if(action.type === GET_CART_TOTAL){
        const total_amount = state.cart.reduce((total, cartItem) => {
            total += cartItem.discounted_price;
            return total;
        }, 0);
        return {
            ...state,
            total_items: state.cart.length,
            total_amount
        }
    }

    if(action.type === CLEAR_CART){
        return {
            ...state,
            cart: []
        }
    }

    throw new Error(`No matching "${action.type}" - action type`);
}

export default cart_reducer;