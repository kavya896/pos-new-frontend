import React, { useEffect, useState } from "react";
import { Autocomplete, Button, Dialog, Menu, Stack, TextField } from "@mui/material";
import "./Items.css"
import {useDispatch, useSelector} from "react-redux"
import { categoryList } from "../../Actions/login";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Items = () => {
    const [select,setSelect] = useState([])
    const [open,setOpen] =useState(false)
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(categoryList())
    },[dispatch])

    const {category} = useSelector((state)=>state.category)
   
   
    // const flatProps = {
    //     options: category.map((option) => option.name),
    //   };
    return (
        <div>
            <div className="title">Item List</div>
        <div className="itemspage">
             
            <div className="itemspage-setup">
              
                <div className="addItems">
                    <Button style={{ backgroundColor: "rgb(152, 192, 51)" }}><a href="/addItems" style={{ textDecoration: "none", color: "white" }}>+ADD ITEM</a></Button>

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
                    <div style={{marginTop:"20px"}} onClick={()=>setOpen(true)}>
                    <SearchIcon />
                    </div>
                    <div >
                    <Menu open={open} onClose={()=>setOpen(false)} style={{marginTop:"-560px",marginLeft:"800px"}} >
                    <Autocomplete
                    
                    sx={{width:420}}
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
                              
                              placeholder="search"
                              open
                          />
                      )}
                  />
                    </Menu>
                   
                    </div>
                    
                       </div>
                       
                        
                     
                </div>
            </div>
        </div>
        </div>
    )
}


export default Items