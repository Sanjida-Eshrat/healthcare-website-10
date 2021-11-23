import { useEffect, useState } from "react"

// custom hook
const useServices = () =>{
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);

    //return necessary data 
   return [services,setServices]; 
}

export default useServices;