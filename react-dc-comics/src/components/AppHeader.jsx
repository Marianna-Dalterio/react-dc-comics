import "./Header.css"; //importo .css

export default function () {
    const menu = [
        {
            id: 1,
            text: "Characters",
            link: "#",
            is_active: false
        },
        {
            id: 2,
            text: "Comics",
            link: "#",
            is_active: false
        },
        {
            id: 3,
            text: "Movies",
            link: "#",
            is_active: false
        },
        {
            id: 4,
            text: "Tv",
            link: "#",
            is_active: false
        },
        {
            id: 5,
            text: "Games",
            link: "#",
            is_active: false
        },
        {
            id: 6,
            text: "Collectibles",
            link: "#",
            is_active: false
        },
        {
            id: 7,
            text: "Videos",
            link: "#",
            is_active: false
        },
        {
            id: 8,
            text: "Fans",
            link: "#",
            is_active: false
        },
        {
            id: 9,
            text: "News",
            link: "#",
            is_active: false
        },
        {
            id: 10,
            text: "Shop",
            link: "#",
            is_active: false
        }
    ]
    return (<header className="header">
        <img src="/img/dc-logo.png" alt="logo" />
        <nav className="navbar">
            <ul>
                {menu.map}
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