/*importa stile css per la card*/
import styles from "./ProductCard.module.css"


export default function ProductCard({ img, text }) {
    return (
        /*accedi alla classe tramite l'oggetto styles*/
        <div className={styles.card}>
            <img src={img} alt={text} />
            <span>{text}</span>
        </div>
    );
}