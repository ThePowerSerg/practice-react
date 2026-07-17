function Header({ profileImg, username }) {
    return (
        <>
            <img src={profileImg} />
            <h1>{username}</h1>
        </>
    )
}

export default Header;