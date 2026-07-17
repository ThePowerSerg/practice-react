import type { Pet } from "./models/pet";

function Header({ profileImg, username }: Pet) {
    return (
        <>
            <img src={profileImg} />
            <h1>{username}</h1>
        </>
    )
}

export default Header;