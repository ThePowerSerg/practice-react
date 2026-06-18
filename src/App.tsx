import "./App.css";
import { Header } from "./Header";
import type { Person } from "./Person";

const person: Person = {name: "Mario", age:10}

function App() {
    return (
        <>
            <Header{...person}/>
        </>
    );
}
export default App;