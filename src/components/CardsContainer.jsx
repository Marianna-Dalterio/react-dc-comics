//CardsContainer: componente che contiene tutte le card

//importo card prop, quindi struttura card
import ProductCard from "./ProductCard";



export default function CardsContainer({ comics }) {
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