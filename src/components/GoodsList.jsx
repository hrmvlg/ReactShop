import GoodsItem from "./GoodsItem"
import { useContext } from "react"
import { ShopContext } from "../context"

export default function GoodsList() {

    const {
        currentGoods,
    } = useContext(ShopContext);

    if (!currentGoods.length) return <h3>Тут ничего нет 😔</h3>

    return (
        <ul className="goods-list">
            {
                currentGoods.map(item => {
                    return (
                        <GoodsItem
                            key={item.mainId}
                            id={item.mainId}
                            name={item.displayName}
                            price={item.price.regularPrice}
                            type={item.displayType}
                            image={item.displayAssets[0]?.background ? item.displayAssets[0]?.background : item.displayAssets[0]?.url}
                        />)
                })
            }
        </ul>
    )
}