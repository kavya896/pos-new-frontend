import React, { useEffect, useState } from "react";
import {Typography,Button} from "@mui/material"
import { loginUsingPin} from "../../Actions/login";
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import "./loginPage.css"

const PinPage = () =>{
    const [pin,setPin] = useState()
  

    const dispatch = useDispatch()
    const handleLogin = (e) =>{
       e.preventDefault()
      dispatch(loginUsingPin(pin))
      
    }
    const {user} = useSelector((state)=>state.user)
    const {usererror}= useSelector((state)=>state.user)
    
    
    useEffect(()=>{
       if(user){
        alert("logged-in successfully")
        window.location.reload()
        
       
       }else{
        if(usererror){
            alert("credentials doesn't match")
        }
       }
    },[user,usererror])
    
    return(
        <div className="loginPage">
            <img src="https://ioready.io/info.ioready.io/images/64eddd725a4dd556617841db3fb97ca1.png" alt="image"></img>
            <Typography variant="h3" style={{textAlign:"center"}}>
                <a href="/"><Button>Default </Button></a>
            
            {/* <a href="/pin"><Button>Login using pin</Button></a> */}
            
            </Typography>
                <form className="loginForm" onSubmit={handleLogin}>
                    
                    <input type="text" placeholder="enter pin" required value={pin} onChange={(e)=>setPin(e.target.value)} />
                   <Button type="submit" style={{backgroundColor: "rgb(115, 79, 223)"}}>Login</Button>
                   <Button style={{backgroundColor:"black"}}>Forgot Password</Button>
                </form>
            
        </div>
    )
}

export default PinPage