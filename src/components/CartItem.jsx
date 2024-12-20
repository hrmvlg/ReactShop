
export default function CartItem({ name, price, amount }) {

    return (
        <li className="cart__item">
            <div className="cart__item-name">{name}</div>
            <div className="cart__item-amount">{amount}</div>
            <div className="cart__item-price">{price}</div>
            {/* <button className="cart__item-delete"></button> */}
        </li>
    )
}