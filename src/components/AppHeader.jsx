import "./Header.css"; //importo .css
import dc_logo_bg from "../assets/img/dc-logo-bg.png"

export default function ({ menu }) {

    return (<header className="header">
        <img src={dc_logo_bg} alt="logo" />
        <nav className="navbar">
            <ul>
                {menu.map(item => <li key={item.id}><a href={item.link}>{item.text}</a></li>)}
            </ul>
        </nav>
    </header >);
}