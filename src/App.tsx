import "./App.css";
import { Header } from "./Header";
import type { Person } from "./models/person";

const person: Person = {name: "Mario", age: 10}

export default function App() {
    return (
        <>
            <Header {...person} />
        </>
    );
}