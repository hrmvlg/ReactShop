export default function Footer() {
    return (
        <footer className="page-footer blue-grey lighten-1">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Olya Khromova
                    <a className="grey-text text-lighten-4 right" href="https://github.com/hrmvlg/ReactShop">GitHub Repository</a>
                </div>
            </div>
        </footer>
    )
}