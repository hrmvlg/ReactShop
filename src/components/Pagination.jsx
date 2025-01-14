
export default function Pagination({ itemsPerPage, totalItems, paginate, currentPage }) {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination page-list">

            {
                currentPage <= 1 ?
                    <li className="disabled page-arrow">
                        <a href="#!">
                            <i className="material-icons">chevron_left</i>
                        </a>
                    </li>
                    :
                    <li className="waves-effect page-arrow">
                        <a href="!#" onClick={() => { paginate(currentPage - 1) }}>
                            <i className="material-icons">chevron_left</i>
                        </a>
                    </li>
            }

            {
                pageNumbers.map(number => (
                    <li key={number} className={`page-item waves-effect ${number === currentPage ? 'current-page' : ''}`}>
                        <a href="!#" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))
            }

            {
                currentPage >= pageNumbers.length ?
                    <li className="disabled page-arrow">
                        <a href="#!">
                            <i className="material-icons">chevron_right</i>
                        </a>
                    </li>
                    :
                    <li className="waves-effect page-arrow">
                        <a href="!#" onClick={() => { paginate(currentPage + 1) }}>
                            <i className="material-icons">chevron_right</i>
                        </a>
                    </li>
            }

        </ul>
    )
}
