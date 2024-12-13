import { useEffect, useState } from "react";
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from "./GoodsList";
import Cart from './Cart';

export default function Shop() {

    const [goods, setGoods] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [orders, setOrder] = useState([]);


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

    let ordersCopy = Object.assign([], orders);

    const addToCart = (item) => {
        if (item) {
            ordersCopy.push(item);
            setOrder(ordersCopy);
        }
    }

    return (
        <div className="container">
            <Cart quantity={orders.length} />
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