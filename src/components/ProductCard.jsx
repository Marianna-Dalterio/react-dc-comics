/*importa stile css per la card*/
import styles from "./ProductCard.module.css"
//nella funzione passo tutto l'array, per mantenere le due classi che mi servono destrutturo in una variabile

export default function ProductCard({ comics }) {
    const { thumb, series } = comics
    return (
        /*accedi alla classe tramite l'oggetto styles*/
        <div className="col">
            <div className={styles.card}>
                <img src={thumb} alt={series} />
                <span>{series}</span>
            </div>
        </div>

    );
}