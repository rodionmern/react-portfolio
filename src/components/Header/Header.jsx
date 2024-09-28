import logo from '../../logo.png';
import './header.css';

export default function Header() {
    return(
        <header className="header">
            <div className="title">
                <img src={logo} alt="" className="logo" />
                <h1><b>Rodion</b> Saburov</h1>
            </div>
        </header>
    )
}