import "./Header.css"; //importo .css
export default function () {
    return (<header className="header">
        <img src="/img/dc-logo.png" alt="logo" />
        <nav className="navbar">
            <ul>
                <li >Characters</li>
                <li >Comics</li>
                <li >Movies</li>
                <li >Tv</li>
                <li >Games</li>
                <li >Collectibles</li>
                <li >Videos</li>
                <li >Fans</li>
                <li >News</li>
                <li >Shop</li>
            </ul>
        </nav>
    </header>);
}