import { useEffect, useState } from "react";
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from "./GoodsList";
import Cart from './Cart';
import CartList from "./CartList";
import Alert from "./Alert";

export default function Shop() {

    const [goods, setGoods] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [isCartOpen, setCartOpen] = useState(false);
    const [alertName, setAlertName] = useState('');

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        })
            .then(response => response.json())
            .then((data) => {
                data.shop && setGoods(data.shop);
                setLoading(false)
            })
    }, [])

    const addToCart = (item) => {

        const itemIndex = orders.findIndex(order => order.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                amount: 1,
            }
            setOrders([...orders, newItem])
        } else {
            const newOrders = orders.map((order, index) => {
                if (index === itemIndex) {
                    return {
                        ...order,
                        amount: order.amount + 1,
                    }
                }
                else {
                    return order;
                }
            })

            setOrders(newOrders);
        }
        setAlertName(item.name);
    }

    const deleteFromCart = (id) => {
        const newOrder = orders.filter((order) => order.id !== id);
        setOrders(newOrder);
    }

    const handleCartShow = () => {
        setCartOpen(!isCartOpen);
    }

    const updateOrderAmount = (value, id) => {
        const newOrders = orders.map((order) => {
            if (order.id === id) {
                if (value === 'inc') {
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
        });

        setOrders(newOrders);
    };

    const closeAlert = () => {
        setAlertName('');
    }

    return (
        <div className="container">
            <Cart
                quantity={orders.length}
                handleCartShow={handleCartShow}
            />
            {
                isLoading ? (
                    <Preloader />
                ) : (
                    <GoodsList
                        goods={goods}
                        addToCart={addToCart}
                    />
                )
            }
            {
                isCartOpen &&
                <CartList
                    orders={orders}
                    deleteFromCart={deleteFromCart}
                    updateOrderAmount={updateOrderAmount}
                />
            }
            {
                alertName &&
                <Alert
                    name={alertName}
                    closeAlert={closeAlert}
                />
            }
        </div>
    )
}