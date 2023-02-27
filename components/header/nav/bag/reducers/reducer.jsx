import actionType from '../../bag/action/actionType';

const initialState = {
    cartAt: [],
};

const cartReducer = (state = initialState , action) => {
    switch (action.type) {
        case actionType.BUY_PRODUCT:
            const productCart = state.cartAt.find(
                (p) => p.id === action.payload.id
            );
            if (!productCart) { // xử lý nếu sp ch tồn tại
                return {
                    cartAt:[...state.cartAt, action.payload],
                };
            } else {
                let newcart = state.cartAt;
                const objIndex = newcart.findIndex(
                    (obj) => obj.id === action.payload.id
                );
                if(newcart[objIndex].qantity ===undefined) {
                    newcart[objIndex].qantity = 2;
                } else {
                    newcart[objIndex].qantity = newcart[objIndex].qantity + 1;
                }
                return {cartAt: [...newcart] };
            }
        case actionType.DELETE_PRODUCT:
            let newcart = state.cartAt;
            const objIndex = cartAt.findIndex((obj) =>obj.id === action.payload.id);
            newcart.splice(objIndex,1);
            return {cartAt: [...newcart] };
        default:
            break;
    }
};

export default cartReducer;