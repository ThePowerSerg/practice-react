import type { Pet } from "./models/pet";
import Header from "./Header";
import Body from "./Body";

function Card({ petDetails}: Pet) {
    return (
        <>
            <Header
                profileImg={petDetails.profileImg}
                username={petDetails.username}
            />
            <Body comment={petDetails.comment} />
        </>
    );
}

export default Card;