import type {Sports} from "./models/sports"

export const DisplaySports = (sports: Sports[]) => (
    <ul>
       <li>{...sports.map(x => x.name)}</li>
    </ul>
)