import { useEffect, useState } from "react";
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from "./GoodsList";
import Cart from './Cart';

export default function Shop() {

    const [goods, setGoods] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [orders, setOrder] = useState([]);
    const [isCartOpen, setCartOpen] = useState(false);

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
            setOrder([...orders, newItem])
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

            setOrder(newOrders);
        }
    }

    const handleCartShow = () => {
        setCartOpen(!isCartOpen);
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
        </div>
    )
}