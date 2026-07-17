function Header(props) {
    return (
        <>
            <img src={props.profileImg} />
            <h1>{props.username}</h1>
        </>
    )
}

export default Header;