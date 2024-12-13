import GoodsItem from "./GoodsItem"

export default function GoodsList({ goods }) {
    return (
        <ul className="goods-list">
            {
                goods.map(item => {
                    return (
                        <GoodsItem
                            key={item.mainId}
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