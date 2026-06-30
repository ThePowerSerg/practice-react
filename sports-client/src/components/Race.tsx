import { useReducer } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useEffect } from "react";

type RaceStatus = "not started" | "started" | "finished"

const cycleStatus = (status: RaceStatus): RaceStatus => {
    if (status === "not started") return "started"
    else if (status === "started") return "finished"
    else return "not started"
}

export function Race() {
    const [status, dispatch] = useReducer(cycleStatus, "not started")

    const statusColors: Record<RaceStatus, string> = {
        "not started": "red",
        "started": "green",
        "finished": "pink",
    }

     useEffect(() => {
        console.log(`Race status: ${status}`)
    },[])

    return (
        <>
            <Typography variant="h6" style={{ color: statusColors[status] }}>The race has {status}!</Typography>
            <Button variant="outlined" onClick={dispatch}>Race Status</Button>
        </>
    )
}
