import React, { useEffect, useState } from "react";
import axios from "axios"

const Qrcode = () =>{
    const [qrcodeurl,setQrcodeurl] = useState()
    const handleQrcodeUrl = async() =>{
        try{
            const {data} = await axios.get("/qrcode")
            setQrcodeurl(()=>data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        handleQrcodeUrl()
    })

 return(
    <>
    <img src={qrcodeurl}></img>
    </>
 )   
}

export default Qrcode