import type {Sports} from "./models/sports"

export const DisplaySports = ({ sports }: { sports: Sports[] }) => (
    <ul className="sports-list">
        {sports.map(x => <li>{x.name}</li>)}
    </ul>
)