import "./App.css";
import { Header } from "./Header";
import type { Person } from "./models/person";
import { DisplaySports } from "./DisplaySports";
import type { Sports } from "./models/sports";

const person: Person = {name: "Mario", age: 10, dob: new Date("1/1/2016")}

const sports: Sports[] = [
    {name: "Swimming"},
    {name: "Biking"},
    {name: "Running"},
]

export default function App() {
    return (
        <>
            <Header {...person} />
            <DisplaySports sports={sports} />
        </>
    );
}