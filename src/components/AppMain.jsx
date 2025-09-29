//importo contenitore di card 
import comics from "../data/comics";
import CardsContainer from "./CardsContainer";
//importo css
import "./Main.css";




export default function AppMain({ comics }) {
    return (
        <div className="main-section">
            <div className="container">
                <div>
                    <button className="current-series-btn">Current series</button>
                </div>
                <CardsContainer comics={comics} />
            </div>


        </div>

    );
}
