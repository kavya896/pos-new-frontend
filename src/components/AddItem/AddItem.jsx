import React, { useEffect, useState } from "react";
import "./AddItem.css"
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Box, Button, Checkbox, Dialog, FormControlLabel, FormGroup, Menu, MenuItem, MenuPaper, Paper, Radio, SvgIcon, Switch, TextField, Typography, colors } from "@mui/material";

import { useDispatch, useSelector } from "react-redux"
import { categoryList } from "../../Actions/login";
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import DoneIcon from '@mui/icons-material/Done';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';


const AddItem = () => {
    const [checked, setChecked] = useState()
    const [selectedValue, setSelectedValue] = useState()
    const [selected, setSelected] = useState()
    const [flag, setFlag] = useState(false)
    // const handleChange = (e)=>{}
    const handleFlag = (e) => {
        setFlag(!flag)
    }
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(categoryList())
    }, [dispatch])



    const { category } = useSelector((state) => state.category)
    return (
        <div>
            <div className="title">Create Item</div>
            <div className="createitemspage">
                <div className="createitemspage-setup">
                    <div className="details">
                        <div className="name">

                            <TextField id="standard-basic" className="textfieldname" color="success" style={{ width: "60%" }} label="Name" variant="standard" />
                            <div className="category-textfield">
                                <Autocomplete
                                    sx={{ width: 350 }}
                                    id="size-small-standard"
                                    size="small"
                                    options={category}
                                    getOptionLabel={(option) => option.name}
                                    color="success"
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}

                                            variant="standard"
                                            label="category"
                                            placeholder="category"
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div className="description">
                            <TextField id="outlined-basic" color="success" style={{ width: "100%" }} label="Description" variant="outlined" />
                        </div>
                        <div className="item-checkbox">
                            <Checkbox

                                color="success"
                                checked={checked}
                                // onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <p>The item is available for sale</p>
                        </div>
                        <div className="radio-addItem">
                            <p>
                                Sold by
                            </p>
                            <Radio
                                // checked={selectedValue === 'a'}
                                // onChange={handleChange}
                                value="a"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'A' }}
                                color="success"
                            />
                            <p>Each</p>
                            <Radio
                                // checked={selectedValue === 'b'}
                                // onChange={handleChange}
                                value="b"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'B' }}
                                color="success"
                            />
                            <p>Weight/Volume</p>
                        </div>
                        <div>
                            <TextField

                                id="standard-basic"
                                label="Price"
                                color="success"

                                helperText="Leave the field blank to indicate the price upon sale."
                                variant="standard"
                            />
                            <TextField
                                style={{ marginLeft: "20px", width: "50%" }}
                                id="standard"
                                label="Cost"
                                color="success"
                                defaultValue="0.00"

                                variant="standard"
                            />

                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <TextField
                                style={{ width: "45%" }}
                                id="standard"
                                label="SKU"
                                color="success"
                                defaultValue="10019"
                                variant="standard"
                            />
                            <TextField
                                style={{ marginLeft: "20px", width: "50%" }}
                                id="standard-basic"
                                label="BarCode"
                                color="success"

                                variant="standard"
                            />
                        </div>
                        <div className="spacing"></div>
                    </div>

                    <div className="inventory">
                        <Typography variant="h5">Inventory</Typography>


                        <Accordion elevation={0} >
                            <AccordionSummary
                                expandIcon={< ToggleOffOutlinedIcon fontSize="large" color="success" />}
                            >
                                <Typography style={{ marginTop: "30px" }}>Composite item</Typography>
                            </AccordionSummary>
                            <AccordionDetails>


                            </AccordionDetails>
                        </Accordion>
                        <Accordion elevation={0} >
                            <AccordionSummary
                                expandIcon={< ToggleOffOutlinedIcon fontSize="large" color="success" />}
                            >
                                <Typography>Track stock</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>

                                    <TextField
                                        style={{ width: "45%", marginRight: "20px" }}
                                        id="standard"
                                        label="In stock"
                                        color="success"
                                        defaultValue="0"
                                        variant="standard"
                                    />

                                    <TextField

                                        id="standard-basic"
                                        label="Low stock"
                                        color="success"

                                        helperText="Item quantity at which you will be notified about low stock."
                                        variant="standard"
                                    />
                                </div>

                            </AccordionDetails>
                        </Accordion>

                        <div className="spacing"></div>
                    </div>
                    <div className="variants">
                        <Typography variant="h5">Variants</Typography>
                        <Typography style={{ marginTop: "20px", fontSize: "15px" }}>Use variants if an item has different sizes, colors or other options</Typography>
                        <Button style={{ color: "rgb(152, 192, 51)", marginTop: "20px" }}>+ ADD VARIANTS</Button>
                        <div className="spacing"></div>
                    </div>
                    <div className="modifiers">
                        <Typography style={{ margin: "26px" }} variant="h5">Modifiers</Typography>
                        <div className="spicelevel">
                            <Typography style={{ fontSize: "14px" }}>SPICE LEVEL</Typography>
                            <div className="switchStyling">
                                <Switch
                                    color="success"
                                    // checked={checked}
                                    // onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </div>
                        </div>
                        <div className="spacing"></div>
                    </div>
                    <div className="representation" >

                        <Typography style={{ margin: "26px" }} variant="h5">Representation on POS</Typography>
                        <div className="shapes">
                            <Radio
                                checked={selectedValue === 'a'}
                                onChange={(e) => setSelectedValue(e.target.value)}
                                value="a"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                            <Typography style={{ marginTop: "10px", marginRight: "300px" }}>Color and Shape</Typography>

                            <Radio
                                checked={selectedValue === 'b'}
                                onChange={(e) => setSelectedValue(e.target.value)}
                                value="b"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'B' }}
                            />

                            <Typography style={{ marginTop: "10px" }}>Image</Typography>
                        </div>
                        {
                            selectedValue == 'a' &&
                            <div>
                                <div className="colorshapesStyling">
                                    <Button className="colorshapes" style={{ backgroundColor: "#f5f5f5", marginTop: "15px", marginRight: "15px" }} onClick={() => setFlag(!flag)} ><DoneIcon sx={{ color: flag ? "#fafafa" : "#f5f5f5" }} /> </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "red", marginTop: "15px", marginRight: "15px" }} onClick={() => setFlag(!flag)} ><DoneIcon sx={{ color: flag ? "#fafafa" : "red" }} /> </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "#e91e63", marginTop: "15px", marginRight: "15px" }} onClick={() => setFlag(!flag)} ><DoneIcon sx={{ color: flag ? "#fafafa" : "#e91e63" }} /> </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "#ff9800", marginTop: "15px", marginRight: "15px" }} onClick={() => setFlag(!flag)} ><DoneIcon sx={{ color: flag ? "#fafafa" : "#ff9800" }} /> </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "#cddc39", marginTop: "15px", marginRight: "15px" }} onClick={() => setFlag(!flag)} ><DoneIcon sx={{ color: flag ? "#fafafa" : "#cddc39" }} /> </Button>

                                    <Button className="colorshapes" style={{ backgroundColor: "#4caf50", marginRight: "15px", marginTop: "15px", marginLeft: "10px" }} onClick={() => setFlag(!flag)} ><DoneIcon sx={{ color: flag ? "#fafafa" : "#4caf50" }} /> </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "#0091ea", marginTop: "15px", marginRight: "15px" }} onClick={() => setFlag(!flag)} ><DoneIcon sx={{ color: flag ? "#fafafa" : "#0091ea" }} /> </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "#9c27b0", marginTop: "15px", marginRight: "15px" }} onClick={() => setFlag(!flag)} ><DoneIcon sx={{ color: flag ? "#fafafa" : "#9c27b0" }} /> </Button>


                                </div>
                                <div className="shapesStyling">
                                    <div className="shape" style={{ border: "0.5px solid black" }}></div>
                                    <div className="shape" style={{ border: "0.5px solid black", borderRadius: "50px" }}></div>

                                </div>
                            </div>

                        }
                        {
                            selectedValue == 'b' &&
                            <div>
                                <div>
                                    <div className="image-background">
                                       <InsertPhotoIcon style={{marginLeft: "40px",marginTop:"49px",fontSize:"xxx-large"}}/>
  
                                    </div>
                                    <input
                                        accept="image/*"
                                        // className={classes.input}
                                        style={{ display: 'none' }}
                                        id="raised-button-file"
                                        multiple
                                        type="file"
                                    />
                                    <label htmlFor="raised-button-file">
                                        <Button variant="raised" component="span" style={{marginLeft:"297px",marginTop:"-54px",backgroundColor:"green",width:"126px",color:"white"}} >
                                            Upload
                                        </Button>
  
                                    </label>
                                </div>
                            </div>
                        }

                    <div className="spacing"></div>
                    </div>
                    <div style={{backgroundColor:"rgba(234, 230, 230, 0.915)"}}>
                       
                        <Button style={{backgroundColor:"white",color:"black",margin:"0px 20px 0px 500px",marginBottom:"20px"}}>CANCEL</Button>
                        <Button style={{backgroundColor:"rgb(152, 192, 51)",color:"white",marginBottom:"20px"}}>SAVE</Button>
                        
                       
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default AddItem