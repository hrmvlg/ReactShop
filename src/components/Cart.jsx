export default function Cart({ quantity = 0 }) {

    return (
        <div className="cart light-blue lighten-3 white-text">
            <i className="cart__icon small material-icons">shopping_cart</i>
            {quantity ? <span className="cart__quantity">{quantity}</span> : null}
        </div>
    )
}