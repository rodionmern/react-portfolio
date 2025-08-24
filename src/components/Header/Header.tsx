import logo from '/logo.png';
import './header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="title">
                <a href="https://github.com/rodionmern" target="_blank">
                    <img src={logo} alt="logo" className="logo" />
                </a>
                {/* <h1><b>Rodion</b> Saburov</h1> */}
            </div>
        </header>
    )
}