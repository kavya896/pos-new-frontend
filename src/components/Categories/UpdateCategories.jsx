import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editCategory } from "../../Actions/login";

const UpdateCategories = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    const { category } = useSelector((state) => state.category)
    
    const editCat = category.find(cat => cat._id === id);
    const [catEdit, setCatEdit] = useState(editCat.name)

    const handleSave = () => {
        dispatch(editCategory(id, catEdit)).then((res)=>{
            console.log(res);
            if(res){
                navigate('/category')
            }else{
                console.log("added file");
            }
        }).catch((err)=>{
            console.log(err);
        })
      };

    return (
        <div>
            <div className="title">Update Category</div>

            <div className="createitemspage">
                <div className="createitemspage-setup">
                    <div className="details">
                        <div className="name">
                        <TextField id="standard-basic" className="textfieldname" color="success" style={{ width: "98%",marginBottom:"50px" }} label="Category Name" variant="standard" value={catEdit} onChange={(e)=>setCatEdit(e.target.value)}/>
                       
                        
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
                            
                          <Button style={{ backgroundColor: "white", color: "black", margin: "0px 20px 0px 0px", marginBottom: "20px" }} >Delete</Button>
                          <Button style={{color:"black",margin:"0px 20px 0px 300px",marginBottom:"20px"}}>CANCEL</Button>
                        <Button onClick={handleSave} style={{color:"#0f5171",marginBottom:"0px"}} >SAVE</Button>
                        
                          </div>
                        </div>
                    </div>
                    </div>
                    </div>
                   
                    )
}

export default UpdateCategories