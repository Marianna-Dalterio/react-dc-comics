import "./Header.css"; //importo .css
//importazione nominale con graffe
import { menu } from "../data/MenuAppHeader";
//import. di default senza graffe e dando qualsiasi nome voglio
// import menuNavbar from "../data/MenuAppHeader";

export default function () {

    return (<header className="header">
        <img src="/img/dc-logo.png" alt="logo" />
        <nav className="navbar">
            <ul>
                {menu.map(item => <li key={item.id}><a href={item.link}>{item.text}</a></li>)}
                {/* <li > <a href="#"> Characters </a> </li>
                <li > <a href="#">Comics</a> </li>
                <li > <a href="#">Movies</a></li>
                <li > <a href="#">Tv</a></li>
                <li ><a href="#">Games</a></li>
                <li ><a href="#">Collectibles</a></li>
                <li ><a href="#">Videos</a></li>
                <li ><a href="#">Fans</a></li>
                <li ><a href="#">News</a></li>
                <li ><a href="#">Shop</a></li> */}
            </ul>
        </nav>
    </header >);
}