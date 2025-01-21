import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const initialState = {
    goods: [],
    currentGoods: [],
    isLoading: true,
    orders: [],
    isCartOpen: false,
    alertName: "",
    currentPage: 1,
    itemsPerPage: 12,
    totalItems: null,
};

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {

    const [value, dispatch] = useReducer(reducer, initialState);

    value.addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    value.handleCartShow = () => {
        dispatch({ type: 'TOGGLE_CART' });
    };

    value.updateOrderAmount = (value, id) => {
        dispatch({ type: 'UPDATE_ORDER_AMOUNT', payload: { value: value, id: id } });
    };

    value.deleteFromCart = (id) => {
        dispatch({ type: 'DELETE_FROM_CART', payload: { id: id } });
    };

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' });
    };

    value.paginate = (pageNumber) => {
        dispatch({ type: 'PAGINATE', payload: { pageNumber } });
    };

    value.setGoods = (data) => {
        dispatch({ type: 'SET_GOODS', payload: { data: data } });
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};