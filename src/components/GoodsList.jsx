import GoodsItem from "./GoodsItem"

export default function GoodsList({ goods, addToCart }) {

    if (!goods.length) return <h3>Тут ничего нет 😔</h3>

    return (
        <ul className="goods-list">
            {
                goods.map(item => {
                    return (
                        <GoodsItem
                            key={item.mainId}
                            id={item.mainId}
                            name={item.displayName}
                            price={item.price.regularPrice}
                            type={item.displayType}
                            image={item.displayAssets[0]?.background ? item.displayAssets[0]?.background : item.displayAssets[0]?.url}
                            addToCart={addToCart}
                        />)
                })
            }
        </ul>
    )
}