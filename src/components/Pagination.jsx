import { useContext } from "react";
import { ShopContext } from "../context";

export default function Pagination() {

    const {
        totalItems,
        paginate,
        itemsPerPage,
        currentPage
    } = useContext(ShopContext);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination page-list">

            {
                currentPage <= 1 ?
                    <li className="disabled page-arrow">
                        <i className="material-icons">chevron_left</i>
                    </li>
                    :
                    <li className="waves-effect page-arrow" onClick={() => { paginate(currentPage - 1) }}>
                        <i className="material-icons">chevron_left</i>
                    </li>
            }

            {
                pageNumbers.map(number => (
                    <li key={number}
                        className={`page-item waves-effect ${number === currentPage ? 'current-page' : ''}`}
                        onClick={() => paginate(number)}
                    >
                        {number}
                    </li>
                ))
            }

            {
                currentPage >= pageNumbers.length ?
                    <li className="disabled page-arrow">
                        <i className="material-icons">chevron_right</i>
                    </li>
                    :
                    <li className="waves-effect page-arrow" onClick={() => { paginate(currentPage + 1) }}>
                        <i className="material-icons">chevron_right</i>
                    </li>
            }

        </ul >
    )
}
