import './project.scss'
import HashLoader from "react-spinners/HashLoader"
import { useState, useEffect } from 'react'

const Project = ()=>  {
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },2000)

    }, [])

    return (
        <>
            {
                loading ?
                <div className='loader'><HashLoader color="#36d7b7" size={100}/></div>
                :
                <div></div>
        }
        </>
    )

}

export default Project