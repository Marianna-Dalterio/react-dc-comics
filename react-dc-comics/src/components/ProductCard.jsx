/*importa stile css per la card*/
import styles from "./ProductCard.module.css"


export default function ProductCard({ img, text }) {
    return (
        <div className="card">
            <img src={img} alt={text} />
            <span>{text}</span>
        </div>
    );
}