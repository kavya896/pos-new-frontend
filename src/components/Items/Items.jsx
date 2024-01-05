import React, { useEffect, useState } from "react";
import { Autocomplete, Button, Checkbox, Dialog, InputLabel, Menu, MenuItem, Pagination, Select, Stack, TablePagination, TextField } from "@mui/material";
import "./Items.css"
import { useDispatch, useSelector } from "react-redux"
import { ItemsList, StockList, categoryList, paginationOfItems } from "../../Actions/login";
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


const Items = () => {


    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const [rowsPerPage, setRowsperpage] = useState(10)
    const [search, setSearch] = useState("")
    const [select, setSelect] = useState("")
    const [selectcatg, setSelectcatg] = useState("")
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(categoryList())
        dispatch(ItemsList())
        dispatch(StockList())
        
    }, [dispatch])

    useEffect(()=>{
        console.log(search)
        dispatch(paginationOfItems(page, rowsPerPage, selectcatg, select,search))
    },[search])

    const { category } = useSelector((state) => state.category)
    const { items } = useSelector((state) => state.items)
    const { stocks } = useSelector((state) => state.stocks)
    
   
    
    const handleChange = (e) => {
        setRowsperpage(e.target.value)
    }

    const handlePreviousPage = () => {
        if (page > 1) {
            const pageNo = page - 1
            setPage(pageNo)
            dispatch(paginationOfItems(pageNo, rowsPerPage, selectcatg, select,search))
        }


    }
    const handleNextPage = () => {
        const pageNo = page + 1
        setPage(pageNo)

        dispatch(paginationOfItems(pageNo, rowsPerPage, selectcatg, select,search))

    }
    const handleCategory = (event, value) => {
        setSelectcatg(value.name)
        if (value.name != "") {

            dispatch(paginationOfItems(page, rowsPerPage, value.name, select,search))
        }
    }
    const handleStocks = (event, value) => {
        setSelect(value.name)

        dispatch(paginationOfItems(page, rowsPerPage, selectcatg, value.name,search))
    }
   
    



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
                                sx={{ width: 200 }}
                                id="size-small-standard"
                                size="small"
                                disableClearable
                                options={category}
                                getOptionLabel={(option) => option.name}
                                onChange={handleCategory}
                
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
                                sx={{ width: 200 }}
                                style={{ marginLeft: "20px" }}
                                id="size-small-standard"
                                size="small"
                                disableClearable
                                options={stocks}
                                getOptionLabel={(option) => option.name}
                                onChange={handleStocks}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="standard"
                                        label="stock"
                                        placeholder="category"


                                    />
                                )}
                            />
                            <div style={{ marginTop: "20px" }} onClick={() => setOpen(true)}>
                                <SearchIcon />
                            </div>
                            <div >
                                <Menu open={open} onClose={() => setOpen(false)} style={{ marginTop: "-560px", marginLeft: "750px" }} >
                                    {/* <Autocomplete

                                        sx={{ width: 420 }}
                                        style={{ marginLeft: "20px" }}
                                        id="size-small-standard"
                                        size="small"
                                        
                                        onChange={handleSearch}

                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="standard"

                                                placeholder="search"
                                                open
                                            />
                                        )}
                                    /> */}
                                    <TextField
                                        sx={{ width: 420 ,padding:0}}
                                        style={{ marginLeft: "25px" }}
                                        color="success"
                                        id="standard-search"
                                        label="Search field"
                                        type="search"
                                        variant="standard"
                                        value={search}
                                        onChange={(e)=>setSearch(e.target.value)}
                                    />
                                </Menu>

                            </div>

                        </div>



                    </div>
                    <TableContainer component={Paper} style={{ boxShadow: "none" }} >
                        <Table aria-label="simple table">
                            <TableHead sx={{ color: "red" }}>
                                <TableRow >
                                    <TableCell style={{ color: "rgba(154, 151, 151, 0.915)", padding: "5px" }}><Checkbox /></TableCell>
                                    <TableCell style={{ color: "rgba(154, 151, 151, 0.915)", padding: "5px" }}>Item Name</TableCell>
                                    <TableCell style={{ color: "rgba(154, 151, 151, 0.915)", padding: "5px" }} align="right">Category</TableCell>
                                    <TableCell style={{ color: "rgba(154, 151, 151, 0.915)", padding: "5px" }} align="right">Price</TableCell>
                                    <TableCell style={{ color: "rgba(154, 151, 151, 0.915)", padding: "5px" }} align="right">Cost</TableCell>
                                    <TableCell style={{ color: "rgba(154, 151, 151, 0.915)", padding: "5px" }} align="right">Margin</TableCell>
                                    <TableCell style={{ color: "rgba(154, 151, 151, 0.915)", padding: "5px", paddingRight: "16px" }} align="right">In stock</TableCell>


                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items && items.map((item) => (
                                    <TableRow
                                        key={item._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        onClick={()=>navigate(`/updateItem/${item._id}`)}
                                    >
                                        <TableCell style={{ padding: "5px" }} ><Checkbox /></TableCell>
                                        <TableCell component="th" scope="row" style={{ padding: "5px" }} >
                                            {item.name}
                                        </TableCell>
                                        <TableCell style={{ padding: "5px" }} align="right">{item.category}</TableCell>
                                        <TableCell style={{ padding: "5px" }} align="right">{item.price}</TableCell>
                                        <TableCell style={{ padding: "5px" }} align="right">{item.cost}</TableCell>
                                        <TableCell style={{ padding: "5px" }} align="right">100%</TableCell>
                                        <TableCell style={{ padding: "5px", paddingRight: "16px" }} align="right">{item.inStock}</TableCell>

                                    </TableRow>
                                ))}

                            </TableBody>
                        </Table>
                    </TableContainer>
                    <hr style={{ borderTop: "0.1px black" }}></hr>
                    <div className="pageno" >

                        <Button disabled={page <= 1 ? true : false} onClick={handlePreviousPage} ><ArrowBackIosIcon style={{ border: "0.5px solid black", padding: "5px" }} /></Button>
                        <Button onClick={handleNextPage} ><ArrowForwardIosIcon style={{ border: "0.5px solid black", padding: "5px" }} /></Button>
                        <InputLabel id="demo-simple-select-label" style={{ marginLeft: "20px" }} >PageNo:</InputLabel>
                        <div >


                        </div>

                        <InputLabel id="demo-simple-select-label" style={{ marginLeft: "20px" }}>RowsPerPage:</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={rowsPerPage}
                            size="small"
                            sx={{ fontSize: 15, padding: "0px" }}

                            label="RowsPerPage"
                            onChange={handleChange}
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
    )
}


export default Items