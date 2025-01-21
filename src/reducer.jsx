export function reducer(state, { type, payload }) {
    switch (type) {

        case 'SET_GOODS': {
            const lastGoodIndex = state.currentPage * state.itemsPerPage;
            const firstGoodIndex = lastGoodIndex - state.itemsPerPage;
            const currentGoods = state.goods.slice(firstGoodIndex, lastGoodIndex);

            return {
                ...state,
                goods: payload.data || [],
                currentGoods,
                isLoading: false,
                totalItems: state.goods.length,
            };
        };

        case 'PAGINATE': {
            const { pageNumber } = payload;
            const lastGoodIndex = pageNumber * state.itemsPerPage;
            const firstGoodIndex = lastGoodIndex - state.itemsPerPage;
            const currentGoods = state.goods.slice(firstGoodIndex, lastGoodIndex);

            return {
                ...state,
                currentPage: pageNumber,
                currentGoods,
            };
        };

        case 'ADD_TO_CART': {

            let newOrders = null;
            const itemIndex = state.orders.findIndex(order => order.id === payload.id);

            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    amount: 1,
                }
                newOrders = [...state.orders, newItem];
            }
            else {
                newOrders = state.orders.map((order, index) => {
                    if (index === itemIndex) {
                        return {
                            ...order,
                            amount: order.amount + 1,
                        }
                    } else {
                        return order;
                    }
                })
            }

            return {
                ...state,
                orders: newOrders,
                alertName: payload.name,
            }
        };

        case 'TOGGLE_CART': return {
            ...state,
            isCartOpen: !state.isCartOpen,
        };

        case 'UPDATE_ORDER_AMOUNT': return {
            ...state,
            orders: state.orders.map((order) => {
                if (order.id === payload.id) {
                    if (payload.value === 'inc') {
                        return {
                            ...order,
                            amount: order.amount + 1,
                        };
                    } else {
                        if (order.amount <= 1) {
                            return order;
                        }
                        return {
                            ...order,
                            amount: order.amount - 1,
                        };
                    }
                } else {
                    return order;
                }
            })
        };

        case 'DELETE_FROM_CART': return {
            ...state,
            orders: state.orders.filter((order) => order.id !== payload.id),
        };

        case 'CLOSE_ALERT': return {
            ...state,
            alertName: "",
        };

        default:
            return state;
    }
}