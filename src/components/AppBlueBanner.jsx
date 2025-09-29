import "./BlueBanner.css";
//importo bluebanneritems prop
import BlueBannerItems from "./BlueBannerItems";
export default function AppBlueBanner() {
    return (<div className="blue-banner">
        <ul>
            <li>
                <BlueBannerItems img="/img/buy-comics-digital-comics.png" text="digital comics" />
            </li>
            <li>
                <BlueBannerItems img="/img/buy-comics-merchandise.png" text="dc merchandise" />
            </li>
            <li>
                <BlueBannerItems img="/img/buy-comics-subscriptions.png" text="subscription" />
            </li>
            <li>
                <BlueBannerItems img="/img/buy-comics-shop-locator.png" text="comic shop locator" />
            </li>
            <li>
                <BlueBannerItems img="/img/buy-dc-power-visa.svg" text="dc power visa" />
            </li>
        </ul>
    </div>);
}