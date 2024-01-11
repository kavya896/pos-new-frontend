import { Button, TextField } from "@mui/material";
import React from "react";
import DoneIcon from '@mui/icons-material/Done';

const CreateCategories = () => {

    return (
        <div>
            <div className="title">Create Categories</div>

            <div className="createitemspage">
                <div className="createitemspage-setup">
                    <div className="details">
                        <div className="name">
                        <TextField id="standard-basic" className="textfieldname" color="success" style={{ width: "98%",marginBottom:"50px" }} label="Category Name" variant="standard" />
                       
                        
                            </div>
                            <div>
                                <div className="colorshapesStyling">
                                    <Button className="colorshapes" style={{ backgroundColor: "#cfcaca", marginTop: "15px", marginRight: "15px" }}  > </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "red", marginTop: "15px", marginRight: "15px" }}  > </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "#e91e63", marginTop: "15px", marginRight: "15px" }}  > </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "#ff9800", marginTop: "15px", marginRight: "15px" }}  > </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "#cddc39", marginTop: "15px", marginRight: "15px" }}  > </Button>

                                    <Button className="colorshapes" style={{ backgroundColor: "#4caf50", marginRight: "15px", marginTop: "15px", marginLeft: "10px" }}  > </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "#0091ea", marginTop: "15px", marginRight: "15px" }} > </Button>
                                    <Button className="colorshapes" style={{ backgroundColor: "#9c27b0", marginTop: "15px", marginRight: "15px" }}  ></Button>


                                </div>
                          </div>
                          <hr style={{marginTop:"30px", borderTop: "0.5px black" }}></hr>
                          <div>
                          <Button style={{color:"black",margin:"20px 20px 0px 500px",marginBottom:"20px"}}>CANCEL</Button>
                        <Button style={{color:"#0f5171",marginBottom:"0px"}} >SAVE</Button>
                        
                          </div>
                        </div>
                    </div>
                    </div>
                    </div>
                   
                    )
}

export default CreateCategories