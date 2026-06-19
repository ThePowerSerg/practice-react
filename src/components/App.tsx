import "../App.css";
import { Header } from "../components/Header";
import { DisplaySports } from "../components/DisplaySports";
import { useAppData } from "../hooks/useAppData";

export default function App() {
    const { person, sports } = useAppData()

    return (
        <>
            <Header {...person} />
            <DisplaySports sports={sports} />
        </>
    );
}