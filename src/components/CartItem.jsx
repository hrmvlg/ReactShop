
export default function CartItem({ id, name, price, amount, deleteFromCart }) {

    return (
        <li className="cart__item ">
            <div className="cart__item-name">{name}</div>
            <div className="cart__item-amount">{amount}</div>
            <div className="cart__item-price">{price}</div>
            <i onClick={() => { deleteFromCart(id) }} className="cart__item-delete material-icons">clear</i>
        </li>
    )
}