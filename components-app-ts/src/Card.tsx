import Header from "./Header";
import Body from "./Body";
import type { Pet } from "./models/pet";

type CardProps = { petDetails: Pet; }

function Card({ petDetails}: CardProps) {
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