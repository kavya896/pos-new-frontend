import React, { useState } from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
import "./HomePage.css"
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PeopleIcon from '@mui/icons-material/People';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { Button, Dialog, DialogActions, Menu, MenuItem } from "@mui/material";
const HomePage = () => {
    const [open, setOpen] = useState(false)
    const [report,setReport] = useState(false)
    const [item,setItem] = useState(false)
    return (

        <div className="bar">
            <div className="mainbar">
                <DehazeIcon style={{ margin: "10px", color: "white" }} />

            </div>
            <div className="sidebar">
                <div className="iconStyling account" onClick={()=>setOpen(true)}>
                    <AccountCircleSharpIcon fontSize="medium"  style={{ margin: "12px 20px", color: "rgba(212, 208, 208, 0.86)" }} />
                </div>

                <div className="accountDiv">
                    account
                </div>
                <div >
                    <Menu open={open} onClose={()=>setOpen(false)} style={{marginTop:"-500px",marginLeft:"55px"}} >
                      
                        <MenuItem style={{width:"200px"}}><a href="/" style={{textDecoration:"none", color:"black"}}>Account</a></MenuItem>
                        <MenuItem><a href="/" style={{textDecoration:"none",color:"black"}}>Sign out</a></MenuItem>
                       
                    </Menu>
                </div>

                <div className="iconStyling report" onClick={()=>setReport(true)}>
                    <EqualizerIcon fontSize="medium" style={{ margin: "12px 20px", color: "rgb(78, 196, 78)" }} />
                </div>
                <div className="reportDiv">
                    Reports
                </div>
                <div >
                    <Menu open={report} onClose={()=>setReport(false)} style={{marginTop:"-380px",marginLeft:"55px"}} >
                      
                        <MenuItem style={{width:"200px"}}><a href="/" style={{textDecoration:"none", color:"black"}}>Sales summary</a></MenuItem>
                        <MenuItem><a href="/" style={{textDecoration:"none",color:"black"}}>Sales by item</a></MenuItem>
                        <MenuItem><a href="/" style={{textDecoration:"none",color:"black"}}>Sales by category</a></MenuItem>
                        <MenuItem><a href="/" style={{textDecoration:"none",color:"black"}}>Sales by employee</a></MenuItem>
                        <MenuItem><a href="/" style={{textDecoration:"none",color:"black"}}>Sales by item</a></MenuItem>
                       
                    </Menu>
                </div>
                <div className="iconStyling items" onClick={()=>setItem(true)}>
                    <ShoppingBasketIcon fontSize="medium" style={{ margin: "12px 20px", color: "rgb(232, 59, 134)" }} />
                </div>
                <div className="itemsDiv">
                    Items
                </div>
                <div >
                    <Menu open={item} onClose={()=>setItem(false)} style={{marginTop:"-350px",marginLeft:"55px"}} >
                      
                        <MenuItem style={{width:"200px"}}><a href="/" style={{textDecoration:"none", color:"black"}}>Item list</a></MenuItem>
                        <MenuItem><a href="/" style={{textDecoration:"none",color:"black"}}>Categories</a></MenuItem>
                        <MenuItem><a href="/" style={{textDecoration:"none",color:"black"}}>Modifiers</a></MenuItem>
                        <MenuItem><a href="/" style={{textDecoration:"none",color:"black"}}>Discounts</a></MenuItem>
                       
                    </Menu>
                </div>
                <div className="iconStyling inventory">
                    <ShoppingCartOutlinedIcon fontSize="medium" style={{ margin: "12px 20px", color: "rgba(11, 164, 172, 0.918)" }} />
                </div>
                <div className="inventoryDiv">
                    InventoryManagement
                </div>
                <div className="iconStyling employees">
                    <RecentActorsRoundedIcon fontSize="medium" style={{ margin: "12px 20px", color: "rgb(27, 149, 114)" }} />
                </div>
                <div className="employeesDiv">
                    Employees
                </div>
                <div className="iconStyling customers">
                    <PeopleIcon fontSize="medium" style={{ margin: "12px 20px", color: "rgb(140, 59, 202)" }} />
                </div>
                <div className="customersDiv">
                    Customers
                </div>
                <div className="iconStyling integrations">
                    <ExtensionRoundedIcon fontSize="medium" style={{ margin: "12px 20px", color: "rgba(70, 54, 54, 0.918)" }} />
                </div>
                <div className="integrationsDiv">
                    Integrations
                </div>
                <div className="iconStyling settings">
                    <SettingsRoundedIcon fontSize="medium" style={{ margin: "12px 20px", color: "rgba(156, 147, 147, 0.918)" }} />
                </div>
                <div className="settingsDiv">
                    Settings
                </div>
                <div className="iconStyling help">
                    <HelpOutlineRoundedIcon fontSize="medium" style={{ margin: "12px 20px", color: "rgba(11, 164, 172, 0.918)" }} />
                </div>
                <div className="helpDiv">
                    Help
                </div>


            </div>

        </div>

    )
}

export default HomePage