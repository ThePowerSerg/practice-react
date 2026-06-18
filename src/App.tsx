import "./App.css";
import { Header } from "./Header";
import type { Person } from "./models/person";

const person: Person = {name: "Mario", age: 10, dob: new Date("1/1/2016")}

export default function App() {
    return (
        <>
            <Header {...person} />
        </>
    );
}