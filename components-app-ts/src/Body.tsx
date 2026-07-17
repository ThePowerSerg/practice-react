import type { Pet } from "./models/pet";

type BodyProps = Pick<Pet, "comment">;

function Body({ comment }: BodyProps) {
    return (
        <p>{comment}</p>
    )
};

export default Body;