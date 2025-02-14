import FeaturedRooms from "../l2/FeaturedRooms";
import AboutHotel from "../l2/AboutHotel";
import Offers from "../l2/Offers";

export default function ContentBody({ isDark, matches }) {
    return (
        <main>
            <FeaturedRooms isDark={isDark} matches={matches} />
            <Offers isDark={isDark} matches={matches} />
            <AboutHotel isDark={isDark} matches={matches} />
        </main>
    );
}
