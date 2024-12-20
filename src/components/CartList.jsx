import CartItem from "./CartItem"

export default function CartList({ orders }) {

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
            <li className="cart__total">Общая стоимость: <span className="cart__total-amount">{0}</span></li>
        </ul>
    )
}