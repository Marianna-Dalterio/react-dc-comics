//CardsContainer: componente che contiene tutte le card

//importo card prop, quindi struttura card
import ProductCard from "./ProductCard";
//importo dati 
import comics from "../data/comics"


export default function CardsContainer() {
    return (
        <div className="row">

            {
                comics.map(item => (
                    <ProductCard comics={comics} key={item.id} />
                ))
            }

            <div>
                <button className="load-more-btn">Load more</button>
            </div>

        </div>
    );
}