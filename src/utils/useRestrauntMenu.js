import { useEffect, useState } from "react"
import { MENU_API } from "./constant";


const  useRestrauntMenu =  (resId) => {
    console.log(resId)
    const[resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData()
        console.log("vd")
    }, [])

    const fetchData = async() => {
        console.log("cs")
        const getData = await fetch(
          MENU_API + resId.resId 
        );
        const response = await getData.json();
        console.log(response)
        setResInfo(response.data);
    };

    return resInfo;


}

export default useRestrauntMenu;