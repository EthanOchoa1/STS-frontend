import React from 'react'
import bgVid from '../assets/Main_AdobeExpress.mp4'



const Main = () => {
    return (
        <>
        <div className="overlay"></div>

        <div className='main'> 
        <video src={bgVid} autoPlay loop muted/>
        </div>
        </>
    )
}

export default Main