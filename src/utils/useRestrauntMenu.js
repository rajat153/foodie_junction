import { useEffect, useState } from "react"
import { MENU_API } from "./constant";


const  useRestrauntMenu =  (resId) => {

    const[resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData()

    }, [])

    const fetchData = async() => {

        const getData = await fetch(
          MENU_API + resId.resId 
        );
        const response = await getData.json();
        setResInfo(response.data);
    };

    return resInfo;


}

export default useRestrauntMenu;