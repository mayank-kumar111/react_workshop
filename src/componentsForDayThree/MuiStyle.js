import { Button } from "@mui/material"
import TextField from '@mui/material/TextField';

const MuiStyle = () => {
    return (
        <div>
            <div>
                <div>MuiStyle</div>
                <Button variant="text" style={{ margin: "10px", backgroundColor: "lightblue" }}>Text</Button>
                <br />
                <Button variant="contained" style={{ margin: "10px", backgroundColor: "lightgreen" }}>Contained</Button>
                <br />
                <Button variant="outlined" style={{ margin: "10px", backgroundColor: "lightcoral" }}>Outlined</Button>
            </div>
            <div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
        </div>
    )
}

export default MuiStyle