import React, { useEffect, useState } from "react";
import { Autocomplete, Button, Stack, TextField } from "@mui/material";
import "./Items.css"
import {useDispatch, useSelector} from "react-redux"
import { categoryList } from "../../Actions/login";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Items = () => {
    const [select,setSelect] = useState([])
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(categoryList())
    },[dispatch])

    const {category} = useSelector((state)=>state.category)
   
   
    // const flatProps = {
    //     options: category.map((option) => option.name),
    //   };
    return (

        <div className="itemspage">
            <div className="itemspage-setup">
                <div className="addItems">
                    <Button style={{ backgroundColor: "rgb(118, 245, 27)" }}><a href="/add" style={{ textDecoration: "none", color: "white" }}>+ADD ITEM</a></Button>

                    <Button style={{ color: "black", marginLeft: "40px" }}>IMPORT</Button>
                    <Button style={{ color: "black" }}>EXPORT</Button>
                   
                  
                       <div className="inputfields">
                       <Autocomplete
                      sx={{width:200}}
                        id="size-small-standard"
                        size="small"
                        options={category}
                        getOptionLabel={(option) => option.name}
                        
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="category"
                                placeholder="category"
                            />
                        )}
                    />
                    
                     <Autocomplete
                      sx={{width:200}}
                      style={{marginLeft:"20px"}}
                        id="size-small-standard"
                        size="small"
                        options={category}
                        getOptionLabel={(option) => option.name}
                        onChange={(event,value)=>setSelect(value)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="stock"
                                placeholder="category"
                            
                            />
                        )}
                    />
                    <div style={{marginTop:"20px"}}>
                    <SearchIcon/>
                    </div>
                   
                       </div>
                       
                        
                     
                </div>
            </div>
        </div>

    )
}


export default Items