import { useEffect } from "react"

export default function Alert({ name = '', closeAlert }) {

    useEffect(() => {
        const timerId = setTimeout(() => { closeAlert() }, 1000)
        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line
    }, [name])

    return (
        <div id="toast-container" className="toast-top-right">
            <div className="toast">
                {name} добавлен в корзину
            </div>
        </div>
    )
}