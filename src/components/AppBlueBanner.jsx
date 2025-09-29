import "./BlueBanner.css";
//importo bluebanneritems prop
import BlueBannerItems from "./BlueBannerItems";
import digital_comics from "../assets/img/buy-comics-digital-comics.png";
import dc_merchandise from "../assets/img/buy-comics-merchandise.png";
import subscriptions from "../assets/img/buy-comics-subscriptions.png";
import shop_locator from "../assets/img/buy-comics-shop-locator.png";
import power_visa from "../assets/img/buy-dc-power-visa.svg";



export default function AppBlueBanner() {
    return (<div className="blue-banner">
        <ul>
            <li>
                <BlueBannerItems img={digital_comics} text="digital comics" />
            </li>
            <li>
                <BlueBannerItems img={dc_merchandise} text="dc merchandise" />
            </li>
            <li>
                <BlueBannerItems img={subscriptions} text="subscription" />
            </li>
            <li>
                <BlueBannerItems img={shop_locator} text="comic shop locator" />
            </li>
            <li>
                <BlueBannerItems img={power_visa} text="dc power visa" />
            </li>
        </ul>
    </div>);
}