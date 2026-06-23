import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import type { Sports } from "../models/sports"

export const DisplaySports = ({ sports }: { sports: Sports[] }) => (
    <>
     <div>
        <List>
            {sports.map(x => (
                <ListItem key={x.id}>
                    <ListItemText primary={x.name} />
                </ListItem>
            ))}
        </List>
     </div>
    </>
)
