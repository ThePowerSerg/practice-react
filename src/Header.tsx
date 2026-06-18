import type { Person } from "./Person"

export function Header(p: Person) {
    return (
        <header>
            <h1>{p.name}'s Kitchen</h1>
        </header>
    )
}