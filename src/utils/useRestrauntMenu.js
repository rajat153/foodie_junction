import { useEffect, useState } from "react"
import { MENU_API } from "./constant";

const  useRestrauntMenu =  (resId, lat, lng) => {

    const[resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        if (lat && lng) {
            fetchData();
        }
    }, [lat, lng])

    const fetchData = async() => {
        const apiUrl = `${MENU_API}&lat=${lat}&lng=${lng}&restaurantId=${resId?.resId}`;
        const getData = await fetch(
          apiUrl
        );
        const response = await getData.json();
        setResInfo(response.data);
    };
    return resInfo;
}

export default useRestrauntMenu;