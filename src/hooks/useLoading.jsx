import { useState } from "react"

const useLoadin =(state=false)=>{
    const [loading,setLoading] =useState(state)
    
    const startLoading =()=>{
        setLoading(true)
    }

    const alto = () => {
        setLoading(false)
    }

    return {loading, startLoading, alto}

}

export default useLoadin

