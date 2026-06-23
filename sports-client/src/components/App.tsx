import "../App.css";
import { Header } from "../components/Header";
import { DisplaySports } from "../components/DisplaySports";
import { useAppData } from "../hooks/useAppData";
import { useState } from "react";
import Typography from "@mui/material/Typography"
import { Button } from "@mui/material";
import biking from "../images/biking.jpg"

export default function App() {
    const { person, sports } = useAppData()

    const [status, setStatus] = useState("Started") 

    return (
        <>
            <Typography variant="h3">Favorite Sports</Typography>
            <Typography variant="h6">The race has {status}!</Typography>
            <Button variant="outlined" onClick={() => setStatus("Finished")}>Finish Race</Button>
            <Header {...person} />
            <img src={biking} height={500} alt="A photo of a byciclist"></img>
            <DisplaySports sports={sports} />
        </>
    );
}