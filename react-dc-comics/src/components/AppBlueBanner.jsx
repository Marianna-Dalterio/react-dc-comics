import "./BlueBanner.css";
export default function () {
    return (<div className="blue-banner">
        <ul>
            <li>
                <img src="\img\buy-comics-digital-comics.png" alt="buy-digital-comics" />
                <span>digital comics</span>
            </li>
            <li>
                <img src="/img/buy-comics-merchandise.png" alt="" />
                <span>dc merchandise</span>
            </li>
            <li>
                <img src="/img/buy-comics-subscriptions.png" alt="" />
                <span>subscription</span>
            </li>
            <li>
                <img src="/img/buy-comics-shop-locator.png" alt="" />
                <span>comic shop locator</span>
            </li>
            <li>
                <img src="/img/buy-dc-power-visa.svg" alt="" />
                <span>dc power visa</span>
            </li>
        </ul>
    </div>);
}