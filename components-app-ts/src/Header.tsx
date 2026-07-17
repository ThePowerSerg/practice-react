import type { Pet } from "./models/pet";

type HeaderProps = Pick<Pet, "profileImg" | "username">;

function Header({ profileImg, username }: HeaderProps) {
    return (
        <>
            <img src={profileImg} />
            <h1 style={{ color: "red" }}>{username}</h1>
        </>
    )
}

export default Header;