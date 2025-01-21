import { useContext } from "react";
import { ShopContext } from "../context";
import CartItem from "./CartItem";

export default function CartList() {
    const { orders } = useContext(ShopContext);

    const cartTotal = orders.reduce((sum, order) => {
        return (sum + order.price * order.amount)
    }, 0)

    return (
        <ul className="cart__list">
            <li className="cart__item-heading">Корзина</li>
            {
                orders.length ? (
                    orders.map(item => (
                        <CartItem
                            key={item.id}
                            {...item}
                        />
                    ))
                ) : (
                    <li className="cart__item-empty">Корзина пуста</li>
                )
            }
            <li className="cart__total">Общая стоимость: <span className="cart__total-amount">{cartTotal}</span></li>
        </ul>
    )
}