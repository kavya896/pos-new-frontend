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
        
        dispatch({type:"CategorySuccess",payload:data})

    }catch(err){
        dispatch({type:"categoryFail",payload:err})
        console.log(err)
    }
}
export const StockList = () => async(dispatch)=>{
    try{
        const config={
            headers:{
                "Content-type":"application/json"
            }
        }
        const {data} = await axios.get("/api/v1/stocks")
        console.log("list from actions",data)
        dispatch({type:"StockSuccess",payload:data})

    }catch(err){
        dispatch({type:"StockFail",payload:err})
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
        const {data} = await axios.get("/api/v1/items",config)
        console.log("list from actions",data)
        dispatch({type:"ItemSuccess",payload:data})

    }catch(err){
        dispatch({type:"ItemFail",payload:err})
        console.log(err)
    }
}

export const paginationOfItems = (pageNo,rowsPerPage,selectcatg,select,search)=>async(dispatch) =>{
    try{
       
        const stocks = select
        const category = selectcatg
        console.log(pageNo,rowsPerPage,category,stocks)
        const config={
            headers:{
                "Content-type":"application/json"
            }
        }
        const {data} = await axios.get(`api/v1/items?pageNo=${pageNo}&rowsPerPage=${rowsPerPage}&category=${category}&stocks=${stocks}&search=${search}`,config)
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

export const createItems =(name,catg,description,price,cost,sku,barcode,instock,lowstock,available,selectedValue,spicelevel,colors)=> async(dispatch)=>{
    try{
        console.log(name,catg,description,price,cost,sku,barcode,instock,lowstock,available,selectedValue,spicelevel,colors)
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        const {data} = await axios.post("/api/v1/items",{name,catg,description,price,cost,sku,barcode,instock,lowstock,available,selectedValue,spicelevel,colors},config)
        dispatch({type:"CreateItemSuccess",payload:data})
        console.log(data)
    }catch(err){
        dispatch({type:"CreateItemFail",payload:err.response.data.message})
        console.log(err.response.data.message)
    }
}