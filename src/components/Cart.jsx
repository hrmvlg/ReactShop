import { ShopContext } from "../context";
import { useContext } from "react";

export default function Cart(props) {

    const { quantity = 0 } = props;
    const { handleCartShow } = useContext(ShopContext);

    return (
        <div onClick={handleCartShow} className="cart light-blue lighten-3 white-text">
            <i className="cart__icon small material-icons">shopping_cart</i>
            {quantity ? <span className="cart__quantity">{quantity}</span> : null}
        </div>
    )
}