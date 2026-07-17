import type { Pet } from "./models/pet";

function Body({ comment }: Pet) {
    return (
        <p>{comment}</p>
    )
};

export default Body;