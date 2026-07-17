import Header from "./Header";
import Body from "./Body";

function Card({ petDetails}) {
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