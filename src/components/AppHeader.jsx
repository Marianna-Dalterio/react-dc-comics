import "./Header.css"; //importo .css
//importazione nominale con graffe
import { menu } from "../data/MenuAppHeader";
//import. di default senza graffe e dando qualsiasi nome voglio
// import menuNavbar from "../data/MenuAppHeader";
import dc_logo_bg from "../assets/img/dc-logo-bg.png"

export default function () {

    return (<header className="header">
        <img src={dc_logo_bg} alt="logo" />
        <nav className="navbar">
            <ul>
                {menu.map(item => <li key={item.id}><a href={item.link}>{item.text}</a></li>)}
            </ul>
        </nav>
    </header >);
}