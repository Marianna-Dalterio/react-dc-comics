import "./Footer.css";
import footerbg from "/img/footer-bg.jpg"; //importo background
import footerlogo from "/img/dc-logo-bg.png";

export default function () {
    //creo oggetto di stile con la proprietà backgroundImage che usa la variabile importata sopra  
    const footerStyle = {
        backgroundImage: `url(${footerbg})`

    };

    return (<footer style={footerStyle}>

        <div className="column">
            <img src={footerlogo} alt="DC Logo" className="footer-logo" />
            <div className="dc-comics">
                <h4>DC Comics</h4>
                <ul>
                    <li>Characters</li>
                    <li>Comics</li>
                    <li>Movies</li>
                    <li>TV</li>
                    <li>Games</li>
                    <li>Videos</li>
                    <li>News</li>
                </ul>
                <h4>Shop</h4>
                <ul>
                    <li>Shop DC</li>
                    <li>Shop DC Collectibles</li>
                </ul>
            </div>
            <div className="DC">
                <h4>DC</h4>
                <ul>
                    <li>Terms Of Use</li>
                    <li>Privacy policy (New)</li>
                    <li>Ad Choices</li>
                    <li>Advertising</li>
                    <li>Jobs</li>
                    <li>Subscriptions</li>
                    <li>Talent Workshops</li>
                    <li>CPSC Certificates</li>
                    <li>Ratings</li>
                    <li>Shop Help</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="sites">
                <h4>Sites</h4>
                <ul>
                    <li>DC</li>
                    <li>MAD Magazine</li>
                    <li>DC Kids</li>
                    <li>DC Universe</li>
                    <li>DC Power Visa</li>
                </ul>
            </div>



        </div>


    </footer>);
}