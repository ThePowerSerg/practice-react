import "../App.css";
import { Header } from "../components/Header";
import { DisplaySports } from "../components/DisplaySports";
import { Race } from "../components/Race";
import { useAppData } from "../hooks/useAppData";
import Typography from "@mui/material/Typography"
import biking from "../images/biking.jpg"

export default function App() {
    const { person, sports } = useAppData()

    return (
        <>
            <Typography variant="h3">Favorite Sports</Typography>
            <Race />
            <Header {...person} />
            <img src={biking} height={500} alt="A photo of a byciclist"></img>
            <DisplaySports sports={sports} />
        </>
    );
}