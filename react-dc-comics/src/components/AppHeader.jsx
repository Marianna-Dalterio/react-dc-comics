

import "./Header.css"; //importo .css
export default function () {
    return (<header className="header">
        <img src="/img/dc-logo.png" alt="logo" />
        <nav className="navbar">
            <ul>
                <li > <a href="#"> Characters </a> </li>
                <li > <a href="#">Comics</a> </li>
                <li > <a href="#">Movies</a></li>
                <li > <a href="#">Tv</a></li>
                <li ><a href="#">Games</a></li>
                <li ><a href="#">Collectibles</a></li>
                <li ><a href="#">Videos</a></li>
                <li ><a href="#">Fans</a></li>
                <li ><a href="#">News</a></li>
                <li ><a href="#">Shop</a></li>
            </ul>
        </nav>
    </header >);
}