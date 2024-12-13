import { useEffect, useState } from "react";
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from "./GoodsList";

export default function Shop() {

    const [goods, setGoods] = useState([]);
    const [isLoading, setLoading] = useState(true);

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

    return (
        <div className="container">
            {
                isLoading ? (
                    <Preloader />
                ) : (
                    <GoodsList goods={goods} />
                )
            }
        </div>
    )
}