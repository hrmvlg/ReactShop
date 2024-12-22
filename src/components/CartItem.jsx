export default function CartItem({ id, name, price, amount, deleteFromCart, updateOrderAmount }) {

    const handleButtonClick = (value) => {
        updateOrderAmount(value, id);
    };

    return (
        <li className="cart__item ">
            <div className="cart__item-name">{name}</div>
            <div className="cart__item-amount">
                <button className="cart__item-decrement" onClick={() => handleButtonClick('dec')}>
                    -
                </button>
                <span className="cart__item-amount-value">{amount}</span>
                <button className="cart__item-increment" onClick={() => handleButtonClick('inc')}>
                    +
                </button>
            </div>
            <div className="cart__item-price">{price}</div>
            <button onClick={() => { deleteFromCart(id) }} className="cart__item-delete material-icons">clear</button>
        </li>
    )
}