import styles from "./BlueBannerItems.module.css"

export default function BlueBannerItems({ img, text }) {
    return (
        <div className={styles.item}>
            <img src={img} alt={text} />
            <span>{text}</span>
        </div>
    );
}