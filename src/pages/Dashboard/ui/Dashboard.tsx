import {TopCities} from "../../../widgets/TopCities";
import {TopClass} from "../../../widgets/TopClass";
import {Purchased} from "../../../widgets/Purchased";

export function Dashboard() {
    return (
        <div>
            <TopCities/>
            <TopClass/>
            <Purchased/>
        </div>
    );
}