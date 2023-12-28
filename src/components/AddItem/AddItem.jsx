import React, { useEffect, useState } from "react";
import "./AddItem.css"
import { Autocomplete, Checkbox, Radio, TextField, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux"
import { categoryList } from "../../Actions/login";

const AddItem = () => {
    const [checked, setChecked] = useState()
    const [selectedValue, setSelectedValue] = useState()
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
                        <div style={{marginTop:"20px"}}>
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
                    </div>
                    <br></br>
                    {/* <div className="inventory">
                        <Typography variant="h5">Inventory</Typography>
                    </div> */}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default AddItem