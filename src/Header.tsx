 import type { Person } from "./models/person"

export function Header({name, age}: Person) {
    return (
        <header>
            <h1>{name}'s Kitchen {age !== undefined ? ` - ${age}` : ""} </h1>
        </header>
    )
}