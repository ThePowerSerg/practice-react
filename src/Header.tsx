 import type { Person } from "./models/person"

export function Header({name, age, dob}: Person) {
    return (
        <header>
            <h1>{name}'s age is {age !== undefined ? `${age}` : ""}</h1>
            <p>Date of Birth: {dob?.toLocaleDateString()}</p>
        </header>
    )
}