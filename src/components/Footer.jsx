export default function Footer() {
    return (
        <footer className="page-footer light-blue darken-4">
            <div className="footer-copyright">
                © {new Date().getFullYear()} Olya Khromova
                <a className="grey-text text-lighten-4 right" href="https://github.com/hrmvlg/ReactShop" target="_blank">GitHub Repository</a>
            </div>
        </footer>
    )
}