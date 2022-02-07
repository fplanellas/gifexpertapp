import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


const useFechGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });
   
   useEffect( () => {
    
    getGifs( category )
    .then ( imgs => {
        setState({
            data: imgs,
            loading: false
        });
    })

   }, [ category ])


    return state //{ data: [], loading: true };

}

export default useFechGifs
