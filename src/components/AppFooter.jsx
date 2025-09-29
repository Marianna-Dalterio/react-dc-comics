//PROBLEMI: il bg logo si vede per intero + allineamento testo-icone nella greybar
import "./Footer.css";
import footerbg from "/img/footer-bg.jpg"; //importo background
import footerlogo from "/img/dc-logo-bg.png";
//importo array di oggetti da data x la lista 
import { menuFooter } from "../data/MenuAppFooter";

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
                <span><img src="/img/footer-facebook.png" alt="" /></span>
                <span><img src="/img/footer-twitter.png" alt="" /></span>
                <span><img src="/img/footer-youtube.png" alt="" /></span>
                <span><img src="/img/footer-pinterest.png" alt="" /></span>
                <span><img src="/img/footer-periscope.png" alt="" /></span>
            </div>

        </div>




    </footer>);
}