import React, { useEffect, useState } from "react";
import { Autocomplete, Button, Checkbox, Dialog, InputLabel, Menu, MenuItem, Pagination, Select, Stack, TablePagination, TextField } from "@mui/material";
import "./Categories.css"
import { useDispatch, useSelector } from "react-redux"
import { ItemsList, StockList, categoryList, deleteManyItems, getItemById, paginationOfItems } from "../../Actions/login";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";


const Categories = () => {


   

    return (

        <div>
            <div className="title">Item List</div>
            <div className="itemspage">

                <div className="categorypage-setup">

                    <div className="addItems">
                        <Button style={{ backgroundColor: "#0f5171" }}><a href="/addItems" style={{ textDecoration: "none", color: "white" }}>+ADD CATEGORY</a></Button>
                        


                        
                    <TableContainer component={Paper} style={{ boxShadow: "none" }} >
                        <Table aria-label="simple table">
                            <TableHead sx={{ color: "red" }}>
                                <TableRow >
                                    <TableCell style={{ color: "rgba(154, 151, 151, 0.915)", padding: "5px" }}><Checkbox/></TableCell>
                                    <TableCell style={{ color: "rgba(154, 151, 151, 0.915)", padding: "5px"}}>Name</TableCell>


                                </TableRow>
                            </TableHead>
                            <TableBody>
                              
                                    <TableRow
                                      
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        
                                       
                                        
                                       
                                    >
                                        <TableCell style={{ padding: "5px" }} ><Checkbox  /></TableCell>
                                        <TableCell component="th" scope="row" style={{ padding: "5px" }} >
                                           kavya
                                        </TableCell>

                                    </TableRow>
                              

                            </TableBody>
                        </Table>
                    </TableContainer>
                    <hr style={{ borderTop: "0.1px black" }}></hr>
                    <div className="pageno" >

                        <Button ><ArrowBackIosIcon style={{ border: "0.5px solid black", padding: "5px" }} /></Button>
                        <Button ><ArrowForwardIosIcon style={{ border: "0.5px solid black", padding: "5px" }} /></Button>
                        <InputLabel id="demo-simple-select-label" style={{ marginLeft: "20px" }} >PageNo:</InputLabel>
                        <div >


                        </div>

                        <InputLabel id="demo-simple-select-label" style={{ marginLeft: "20px" }}>RowsPerPage:</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                          
                            size="small"
                            sx={{ fontSize: 15, padding: "0px" }}
                            
                            label="RowsPerPage"
                            
                        >
                            <MenuItem value={10} sx={{ padding: 0 }} >10</MenuItem>
                            <MenuItem value={25} sx={{ padding: 0 }}>25</MenuItem>
                            <MenuItem value={50} sx={{ padding: 0 }}>50</MenuItem>
                            <MenuItem value={100} sx={{ padding: 0 }}>100</MenuItem>
                        </Select>


                    </div>


              

        </div>
        </div>
        </div>
        </div>
    )
}


export default Categories