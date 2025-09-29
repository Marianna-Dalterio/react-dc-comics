import CardsContainer from "./CardsContainer";
import "./Main.css";
//importo card prop
import ProductCard from "./ProductCard";



export default function AppMain() {
    return (
        <div className="main-section">
            <div className="container">
                <div>
                    <button className="current-series-btn">Current series</button>
                </div>
                <CardsContainer />
            </div>


        </div>

    );
}
