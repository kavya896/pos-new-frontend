import React, { useEffect, useState } from "react";
import "./AddItem.css"
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Box, Button, Checkbox, Dialog, FormControlLabel, FormGroup, Menu, MenuItem, MenuPaper, Paper, Radio, SvgIcon, Switch, TextField, Typography, colors } from "@mui/material";

import { useDispatch, useSelector } from "react-redux"
import { categoryList, createItems, uploadImage } from "../../Actions/login";
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import DoneIcon from '@mui/icons-material/Done';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from "react-router-dom"


const AddItem = () => {
    const navigate = useNavigate()
    const [checked, setChecked] = useState()

    
    const [flag, setFlag] = useState(false)
    // const handleChange = (e)=>{}
    const handleFlag = (e) => {
        setFlag(!flag)
    }
    
    const [name,setName] = useState()
    const [catg,setCatg] = useState()
    const [description,setdescription] = useState()
    const [price,setPrice] = useState()
    const [cost,setCost] =useState()
    const [sku,setsku] = useState()
    const [barcode,setBarcode] = useState()
    const [inStock,setInstock] = useState()
    const [lowStock,setLowstock] =useState()
    const [spiceLevel,setSpicelevel] = useState(false)
    const [selectedValue, setSelectedValue] = useState('each')
    const [available,setAvailable] = useState(true)
    const [selected, setSelected] = useState('colors')

    const [filename,setFilename] = useState()
    // const [img,setImg] = useState()
    const [one,setOne] = useState("#cfcaca")
    const [two,setTwo] = useState()
    const [third,setThird] = useState()
    const [fourth,setFourth] = useState()
    const [fifth,setFifth] = useState()
    const [sixth,setSixth] = useState()
    const [seven,setSeven] = useState()
    const [eight,setEight] = useState()
    const [color,setColors] = useState()
    // const [square,setSquare] = useState("black")
    // const [circle,setCircle] = useState()

    // const handlesquare = () =>{
    //     setSquare("black")
    //     setCircle("")
    // }
    // const handleCircle = () =>{
    //     setSquare("")
    //     setCircle("black")
    // }

    const handleOne = ()=>{
        setOne("#cfcaca")
        setColors("#cfcaca")
        setTwo("")
        setThird("")
        setFourth("")
        setFifth("")
        setSixth("")
        setSeven("")
        setEight("")
    }
    const handletwo = ()=>{
        setOne("")
        setTwo("red")
        setColors("red")
        setThird("")
        setFourth("")
        setFifth("")
        setSixth("")
        setSeven("")
        setEight("")
    }
    const handlethird = ()=>{
        setOne("")
        setTwo("")
        setThird("#e91e63")
        setColors("#e91e63")
        setFourth("")
        setFifth("")
        setSixth("")
        setSeven("")
        setEight("")
    }
    const handlefourth = ()=>{
        setOne("")
        setTwo("")
        setThird("")
        setFourth("#ff9800")
        setColors("#ff9800")
        setFifth("")
        setSixth("")
        setSeven("")
        setEight("")
    }
    const handlefifth = ()=>{
        setOne("")
        setTwo("")
        setThird("")
        setFourth("")
        setFifth("#cddc39")
        setColors("#cddc39")
        setSixth("")
        setSeven("")
        setEight("")
    }
    const handlesixth = ()=>{
        setOne("")
        setTwo("")
        setThird("")
        setFourth("")
        setFifth("")
        setSixth("#4caf50")
        setColors("#4caf50")
        setSeven("")
        setEight("")
    }
    const handleSeven = ()=>{
        setOne("")
        setTwo("")
        setThird("")
        setFourth("")
        setFifth("")
        setSixth("")
        setSeven("#0091ea")
        setColors("#0091ea")
        setEight("")
    }
    const handleEight = ()=>{
        setOne("")
        setTwo("")
        setThird("")
        setFourth("")
        setFifth("")
        setSixth("")
        setSeven("")
        setEight("#9c27b0")
        setColors("#9c27b0")
    }

    
    

    

    const handleSave = () =>{

        dispatch(createItems(name,catg,description,price,cost,sku,barcode,inStock,lowStock,available,selectedValue,spiceLevel,color))
       
    }

    const {createItem,createItemFail} = useSelector((state)=>state.createItem)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(categoryList())
        if(createItemFail){
            alert("Item Already exists")
        }
        if(createItem){
            navigate("/itemsList")
        }

    }, [dispatch,createItemFail,createItem])

    
    const { category } = useSelector((state) => state.category)

   

      const handleFile = async (e)=>{
        

        const image= e.target.files[0]
        console.log(image)
        var formdata = new FormData();
        formdata.append("image", image);
        console.log(formdata.get("image"))


        dispatch(uploadImage(formdata.get("image")))
    }


    
    

   


    return (
        <div>

            <div className="title">Create Item</div>

            <div className="createitemspage">
                <div className="createitemspage-setup">
                    <div className="details">
                        <div className="name">

                            <TextField id="standard-basic" className="textfieldname" color="success" style={{ width: "60%" }} label="Name" variant="standard" value={name} onChange={(e)=>setName(e.target.value)} />
                            <div className="category-textfield">
                            <Autocomplete
                                    sx={{ width: 350 }}
                                    id="size-small-standard"
                                    size="small"
                                    options={category}
                                    getOptionLabel={(option) => option.name}
                                    color="success"
                                    onChange={(event,value)=>setCatg(value.name)}
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
                            <TextField id="outlined-basic" color="success" style={{ width: "100%" }} label="Description" value={description} onChange={(e)=>setdescription(e.target.value)} variant="outlined" />
                        </div>
                        <div className="item-checkbox">
                            <Checkbox

                                color="success"
                                checked={available}
                                onChange={()=>setAvailable(!available)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <p>The item is available for sale</p>
                        </div>
                        <div className="radio-addItem">
                            <p>
                                Sold by
                            </p>
                            <Radio
                                checked={selectedValue === 'each'}
                                onChange={()=>setSelectedValue("each")}
                                value="each"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'A' }}
                                color="success"
                            />
                            <p>Each</p>
                            <Radio
                                checked={selectedValue === 'Weight/Volume'}
                                onChange={()=>setSelectedValue("Weight/Volume")}
                                value="weight"
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
                                value={price}
                                onChange={(e)=>setPrice(e.target.value)}
                                helperText="Leave the field blank to indicate the price upon sale."
                                variant="standard"
                            />
                            <TextField
                                style={{ marginLeft: "20px", width: "50%" }}
                                id="standard"
                                label="Cost"
                                color="success"
                                defaultValue="0.00"
                                value={cost}
                                onChange={(e)=>setCost(e.target.value)}
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
                                onChange={(e)=>setsku(e.target.value)}
                                value={sku}
                            />
                            <TextField
                                style={{ marginLeft: "20px", width: "50%" }}
                                id="standard-basic"
                                label="BarCode"
                                color="success"
                                onChange={(e)=>setBarcode(e.target.value)}
                                value={barcode}
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
                                        onChange={(e)=>setInstock(e.target.value)}
                                        value={inStock}
                                    />

                                    <TextField

                                        id="standard-basic"
                                        label="Low stock"
                                        color="success"
                                        onChange={(e)=>setLowstock(e.target.value)}
                                        value={lowStock}
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
                                    checked={spiceLevel}
                                    onChange={()=>setSpicelevel(!spiceLevel)}
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
                                checked={selected === 'colors'}
                                onChange={() => setSelected("colors")}
                                value="colors"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                            <Typography style={{ marginTop: "10px", marginRight: "300px" }}>Color and Shape</Typography>

                            <Radio
                                checked={selected=== 'image'}
                                onChange={() => setSelected("image")}
                                value="image"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'B' }}
                            />

                            <Typography style={{ marginTop: "10px" }}>Image</Typography>
                        </div>
                        {
                            selected == 'colors' &&
                            <div>
                                <div className="colorshapesStyling">
                                    <Button className="colorshapes" style={{ backgroundColor: "#cfcaca", marginTop: "15px", marginRight: "15px" }} onClick={handleOne} ><DoneIcon sx={{ color: one ? "#fafafa" : "#cfcaca" }} /> </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "red", marginTop: "15px", marginRight: "15px" }} onClick={handletwo} ><DoneIcon sx={{ color: two ? "#fafafa" : "red" }} /> </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "#e91e63", marginTop: "15px", marginRight: "15px" }} onClick={handlethird} ><DoneIcon sx={{ color: third ? "#fafafa" : "#e91e63" }} /> </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "#ff9800", marginTop: "15px", marginRight: "15px" }} onClick={handlefourth} ><DoneIcon sx={{ color: fourth ? "#fafafa" : "#ff9800" }} /> </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "#cddc39", marginTop: "15px", marginRight: "15px" }} onClick={handlefifth} ><DoneIcon sx={{ color: fifth ? "#fafafa" : "#cddc39" }} /> </Button>

                                    <Button className="colorshapes" style={{ backgroundColor: "#4caf50", marginRight: "15px", marginTop: "15px", marginLeft: "10px" }} onClick={handlesixth} ><DoneIcon sx={{ color: sixth ? "#fafafa" : "#4caf50" }} /> </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "#0091ea", marginTop: "15px", marginRight: "15px" }} onClick={handleSeven} ><DoneIcon sx={{ color: seven ? "#fafafa" : "#0091ea" }} /> </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "#9c27b0", marginTop: "15px", marginRight: "15px" }} onClick={handleEight} ><DoneIcon sx={{ color: eight ? "#fafafa" : "#9c27b0" }} /> </Button>


                                </div>
                                {/* <div className="shapesStyling">
                                    <div className="shape" style={{ border: "0.5px solid black" }} onClick={handlesquare} ><DoneIcon sx={{ color: square ? "black" : "white" }} /></div>
                                    <div className="shape" style={{ border: "0.5px solid black", borderRadius: "50px" }} onClick={handleCircle}><DoneIcon sx={{ color: circle ? "black" : "white" }} /></div>

                                </div> */}
                            </div>

                        }
                        {
                            selected == 'image' &&
                            <div>
                                <div>
                                    <div className="image-background">
                                       <InsertPhotoIcon style={{marginLeft: "40px",marginTop:"49px",fontSize:"xxx-large"}}/>
  
                                    </div>
                                    <input
                                        // accept="image/*"
                                        // className={classes.input}
                                        style={{ display: 'none' }}
                                        id="raised-button-file"
                                        // multiple
                                        name="file"
                                        type="file"
                                        
                                        onChange={handleFile}
                                    />
                                    <label htmlFor="raised-button-file">
                                        <Button variant="raised" component="span" style={{marginLeft:"297px",marginTop:"-54px",backgroundColor:"#0f5171",width:"126px",color:"white"}} >
                                            Upload
                                        </Button>
                                    
                                    </label>
                                    {/* {imageFile?<div style={{textAlign:"center"}}>File Selected</div>:""} */}
                                </div>
                            </div>
                        }

                    <div className="spacing"></div>
                    </div>
                    <div style={{backgroundColor:"rgba(234, 230, 230, 0.915)"}}>
                       
                        <Button style={{backgroundColor:"white",color:"black",margin:"0px 20px 0px 500px",marginBottom:"20px"}}>CANCEL</Button>
                        <Button style={{backgroundColor:"#0f5171",color:"white",marginBottom:"20px"}} onClick={handleSave}>SAVE</Button>
                        
                       
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default AddItem