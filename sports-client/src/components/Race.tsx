import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

type RaceStatus = "not started" | "started" | "finished"

export function Race() {
    const [status, setStatus] = useState<RaceStatus>("not started")

    const statusColors: Record<RaceStatus, string> = {
        "not started": "red",
        "started": "green",
        "finished": "pink",
    }

    const cycleStatus = () => {
        if (status === "not started") setStatus("started")
        else if (status === "started") setStatus("finished")
        else setStatus("not started")
    }

    return (
        <>
            <Typography variant="h6" style={{ color: statusColors[status] }}>The race has {status}!</Typography>
            <Button variant="outlined" onClick={cycleStatus}>Race Status</Button>
        </>
    )
}
