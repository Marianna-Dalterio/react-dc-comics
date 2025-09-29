import "./Footer.css";
import footerbg from "../assets/img/footer-bg.jpg"; //importo background
import footerlogo from "../assets/img/dc-logo-bg.png";
//importo array di oggetti da data x la lista 
import { menuFooter } from "../data/MenuAppFooter";
//importo logo social media
import facebook from "../assets/img/footer-facebook.png";
import twitter from "../assets/img/footer-twitter.png";
import youtube from "../assets/img/footer-youtube.png";
import pinterest from "../assets/img/footer-pinterest.png";
import periscope from "../assets/img/footer-periscope.png";

export default function () {
    //creo oggetto di stile con la proprietà backgroundImage che usa la variabile importata sopra  
    const footerStyle = {
        backgroundImage: `url(${footerbg})`

    };

    return (<footer style={footerStyle}>
        <div className="container">
            <div className="row"> {/* Genitore Flexbox */}
                {/* Logo (Posizionato assolutamente rispetto al .row) */}
                <img src={footerlogo} alt="DC Logo" className="footer-logo" />
                {/* Contenitore delle colonne di link (Deve essere Flex per affiancarle) */}
                <div className="list-container">

                    {menuFooter.map(menu => (
                        <div className="col" key={menu.id}><h3>{menu.title}</h3> {/* Le singole colonne */}
                            <ul>
                                {/* Mappa corretta sulla lista dell'elemento corrente */}
                                {menu.list.map(list_item =>
                                    <li key={list_item.id}>
                                        <a href={list_item.link}>{list_item.text}</a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    ))}

                </div>

            </div>




        </div>
        <div className="greybar">
            <button>Sign-up now!</button>
            <div className="social-media">
                <span className="follow-us">follow us</span>
                <span><img src={facebook} alt="" /></span>
                <span><img src={twitter} alt="" /></span>
                <span><img src={youtube} alt="" /></span>
                <span><img src={pinterest} alt="" /></span>
                <span><img src={periscope} alt="" /></span>
            </div>

        </div>




    </footer>);
}