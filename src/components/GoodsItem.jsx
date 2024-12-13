export default function GoodsItem({ name, price, type, image }) {

    return (
        <li className="card">
            <img src={image} alt={`${name} image`} className="card__image" loading="lazy" />
            <div className="card__card">
                <h5 className="card__title">{name}</h5>
                <div className="card__text">{type}</div>
                <div className="card__footer">
                    <a className="card__button waves-effect waves-light btn light-blue darken-3">Купить</a>
                    <div className="card__price">{price} монет</div>
                </div>
            </div>
        </li>
    )
}