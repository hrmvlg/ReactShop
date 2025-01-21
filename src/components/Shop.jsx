import { useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../context";
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from "./GoodsList";
import Cart from './Cart';
import CartList from "./CartList";
import Alert from "./Alert";
import Pagination from './Pagination';

export default function Shop() {

    const {
        setGoods,
        isLoading,
        orders,
        isCartOpen,
        alertName,
        paginate,
    } = useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        })
            .then(response => response.json())
            .then((data) => {
                setGoods(data.shop);
                paginate(1);
            });
    }, [])

    return (
        <div className="container">
            <Cart quantity={orders.length} />
            {
                isLoading ?
                    (
                        <Preloader />
                    ) : (
                        <>
                            <GoodsList />
                            <Pagination />
                        </>
                    )
            }
            {isCartOpen && <CartList />}
            {alertName && <Alert />}
        </div>
    )
}