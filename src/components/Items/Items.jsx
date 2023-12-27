import React from "react";
import { Autocomplete, Button, Stack, TextField } from "@mui/material";
import "./Items.css"
const Items = () => {
    return (

        <div className="itemspage">
            <div className="itemspage-setup">
                <div className="addItems">
                    <Button style={{ backgroundColor: "rgb(118, 245, 27)" }}><a href="/add" style={{ textDecoration: "none", color: "white" }}>+ADD ITEM</a></Button>

                    <Button style={{ color: "black", marginLeft: "40px" }}>IMPORT</Button>
                    <Button style={{ color: "black" }}>EXPORT</Button>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"

                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Movie" />}
                    />
                    <Autocomplete
                       sx={{width:300}}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                            <TextField {...params} label="disableCloseOnSelect" variant="standard" />
                        )}
                    />
                </div>
            </div>
        </div>

    )
}

export default Items