//importo contenitore di card 
import CardsContainer from "./CardsContainer";
//importo css
import "./Main.css";




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
