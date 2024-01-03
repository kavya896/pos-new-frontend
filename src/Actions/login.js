import axios from "axios"


export const login = (email,password) =>async(dispatch)=>{
    try{
       
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        const {data} = await axios.post("/api",{email,password},config)
        if(data){
            dispatch({type:"LoginSuccess",payload:data})
            localStorage.setItem("userInfo",JSON.stringify(data))
            console.log(data)
        }
       
    }catch(err){
        
        dispatch({type:"LoginFail",payload:err})
        console.log("error",err)
    }
}


export const categoryList = () => async(dispatch)=>{
    try{
        const config={
            headers:{
                "Content-type":"application/json"
            }
        }
        const {data} = await axios.get("/api/v1/category")
        console.log("list from actions",data)
        dispatch({type:"CategorySuccess",payload:data})

    }catch(err){
        dispatch({type:"categoryFail",payload:err})
        console.log(err)
    }
}

export const ItemsList = () => async(dispatch)=>{
    try{
        const config={
            headers:{
                "Content-type":"application/json"
            }
        }
        const {data} = await axios.get("/api/v1/item",config)
        console.log("list from actions",data)
        dispatch({type:"ItemSuccess",payload:data})

    }catch(err){
        dispatch({type:"ItemFail",payload:err})
        console.log(err)
    }
}

export const paginationOfItems = (pageNo,rowsPerPage)=>async(dispatch) =>{
    try{
        console.log(pageNo,rowsPerPage)
        const config={
            headers:{
                "Content-type":"application/json"
            }
        }
        const {data} = await axios.get(`api/v1/pagination?pageNo=${pageNo}&rowsPerPage=${rowsPerPage}`,config)
        console.log("list from pagination",data)
        dispatch({type:"ItemSuccess",payload:data})
    }catch(err){
        dispatch({type:"ItemFail",payload:err})
        console.log(err)
    }
}

export const loginUsingPin = (pin) =>async(dispatch) =>{
    try{

        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        const {data} = await axios.post("/api",{pin},config)
        if(data){
            dispatch({type:"LoginSuccess",payload:data})
            localStorage.setItem("userInfo",JSON.stringify(data))
        }
          
    }catch(err){
        console.log(err)
    }
}