import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate } from "react-router-dom";
import { categoryList, createCategiry } from "../../Actions/login";
import { useDispatch, useSelector } from "react-redux";

const CreateCategories = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  // const handleChange = (e)=>{}
  const handleFlag = (e) => {
    setFlag(!flag);
  };

  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [catg, setCatg] = useState();
  const [description, setdescription] = useState();
  const [price, setPrice] = useState();
  const [cost, setCost] = useState();
  const [sku, setsku] = useState();
  const [barcode, setBarcode] = useState();
  const [inStock, setInstock] = useState();
  const [lowStock, setLowstock] = useState();
  const [spiceLevel, setSpicelevel] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Each");
  const [available, setAvailable] = useState(true);
  const [selected, setSelected] = useState("colors");

  const [filename, setFilename] = useState();
  // const [img,setImg] = useState()
  const [one, setOne] = useState("#cfcaca");
  const [two, setTwo] = useState();
  const [third, setThird] = useState();
  const [fourth, setFourth] = useState();
  const [fifth, setFifth] = useState();
  const [sixth, setSixth] = useState();
  const [seven, setSeven] = useState();
  const [eight, setEight] = useState();
  const [color, setColors] = useState();
  const handleOne = () => {
    setOne("#cfcaca");
    setColors("#cfcaca");
    setTwo("");
    setThird("");
    setFourth("");
    setFifth("");
    setSixth("");
    setSeven("");
    setEight("");
  };
  const handletwo = () => {
    setOne("");
    setTwo("red");
    setColors("red");
    setThird("");
    setFourth("");
    setFifth("");
    setSixth("");
    setSeven("");
    setEight("");
  };
  const handlethird = () => {
    setOne("");
    setTwo("");
    setThird("#e91e63");
    setColors("#e91e63");
    setFourth("");
    setFifth("");
    setSixth("");
    setSeven("");
    setEight("");
  };
  const handlefourth = () => {
    setOne("");
    setTwo("");
    setThird("");
    setFourth("#ff9800");
    setColors("#ff9800");
    setFifth("");
    setSixth("");
    setSeven("");
    setEight("");
  };
  const handlefifth = () => {
    setOne("");
    setTwo("");
    setThird("");
    setFourth("");
    setFifth("#cddc39");
    setColors("#cddc39");
    setSixth("");
    setSeven("");
    setEight("");
  };
  const handlesixth = () => {
    setOne("");
    setTwo("");
    setThird("");
    setFourth("");
    setFifth("");
    setSixth("#4caf50");
    setColors("#4caf50");
    setSeven("");
    setEight("");
  };
  const handleSeven = () => {
    setOne("");
    setTwo("");
    setThird("");
    setFourth("");
    setFifth("");
    setSixth("");
    setSeven("#0091ea");
    setColors("#0091ea");
    setEight("");
  };
  const handleEight = () => {
    setOne("");
    setTwo("");
    setThird("");
    setFourth("");
    setFifth("");
    setSixth("");
    setSeven("");
    setEight("#9c27b0");
    setColors("#9c27b0");
  };

  const handleSave = () => {
    dispatch(createCategiry(name, color)).then((res)=>{
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
      <div className="title">Create Categories</div>

      <div className="createitemspage">
        <div className="createitemspage-setup">
          <div className="details">
            <div className="name">
              <TextField
                id="standard-basic"
                className="textfieldname"
                color="success"
                style={{ width: "98%", marginBottom: "50px" }}
                label="Category Name"
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {selected == "colors" && (
              <div>
                <div className="colorshapesStyling">
                  <Button
                    className="colorshapes"
                    style={{
                      backgroundColor: "#cfcaca",
                      marginTop: "15px",
                      marginRight: "15px",
                    }}
                    onClick={handleOne}
                  >
                    <DoneIcon sx={{ color: one ? "#fafafa" : "#cfcaca" }} />{" "}
                  </Button>
                  <Button
                    className="colorshapes"
                    style={{
                      backgroundColor: "red",
                      marginTop: "15px",
                      marginRight: "15px",
                    }}
                    onClick={handletwo}
                  >
                    <DoneIcon sx={{ color: two ? "#fafafa" : "red" }} />{" "}
                  </Button>
                  <Button
                    className="colorshapes"
                    style={{
                      backgroundColor: "#e91e63",
                      marginTop: "15px",
                      marginRight: "15px",
                    }}
                    onClick={handlethird}
                  >
                    <DoneIcon sx={{ color: third ? "#fafafa" : "#e91e63" }} />{" "}
                  </Button>
                  <Button
                    className="colorshapes"
                    style={{
                      backgroundColor: "#ff9800",
                      marginTop: "15px",
                      marginRight: "15px",
                    }}
                    onClick={handlefourth}
                  >
                    <DoneIcon sx={{ color: fourth ? "#fafafa" : "#ff9800" }} />{" "}
                  </Button>
                  <Button
                    className="colorshapes"
                    style={{
                      backgroundColor: "#cddc39",
                      marginTop: "15px",
                      marginRight: "15px",
                    }}
                    onClick={handlefifth}
                  >
                    <DoneIcon sx={{ color: fifth ? "#fafafa" : "#cddc39" }} />{" "}
                  </Button>

                  <Button
                    className="colorshapes"
                    style={{
                      backgroundColor: "#4caf50",
                      marginRight: "15px",
                      marginTop: "15px",
                      marginLeft: "10px",
                    }}
                    onClick={handlesixth}
                  >
                    <DoneIcon sx={{ color: sixth ? "#fafafa" : "#4caf50" }} />{" "}
                  </Button>
                  <Button
                    className="colorshapes"
                    style={{
                      backgroundColor: "#0091ea",
                      marginTop: "15px",
                      marginRight: "15px",
                    }}
                    onClick={handleSeven}
                  >
                    <DoneIcon sx={{ color: seven ? "#fafafa" : "#0091ea" }} />{" "}
                  </Button>
                  <Button
                    className="colorshapes"
                    style={{
                      backgroundColor: "#9c27b0",
                      marginTop: "15px",
                      marginRight: "15px",
                    }}
                    onClick={handleEight}
                  >
                    <DoneIcon sx={{ color: eight ? "#fafafa" : "#9c27b0" }} />{" "}
                  </Button>
                </div>
              </div>
            )}
            <hr style={{ marginTop: "30px", borderTop: "0.5px black" }}></hr>
            <div>
              <Button
                style={{
                  color: "black",
                  margin: "20px 20px 0px 500px",
                  marginBottom: "20px",
                }}
              >
                CANCEL
              </Button>
              <Button
                onClick={handleSave}
                style={{ color: "#0f5171", marginBottom: "0px" }}
              >
                SAVE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategories;
