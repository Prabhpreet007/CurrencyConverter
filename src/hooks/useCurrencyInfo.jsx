import {useEffect,useState } from "react"

function UseCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
    }
    ,[currency])

    return data
}

export default UseCurrencyInfo;