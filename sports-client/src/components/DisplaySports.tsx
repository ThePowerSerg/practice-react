import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import type { Sports } from "../models/sports"
import biking from "../images/biking.jpg"

export const DisplaySports = ({ sports }: { sports: Sports[] }) => (
    <>
     <div>
        <Typography variant="h6">Favorite Sports</Typography>
        <img src={biking} height={500} alt="A photo of a smiling chef owner"></img>
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
