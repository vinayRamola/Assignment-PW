import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './BirdDetail.css'
import Loader from '../Components/Loader/Loader';

const BirdDetail = () => {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [bird, setBird] = useState({});
    
    async function downloadDetails(){
        setIsLoading(true);
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        console.log(response)
        setBird({
            title: response.data.photo.title,
            description: response.data.photo.description,
            image: response.data.photo.url
        })
        setIsLoading(false)
    }

    useEffect(()=>{
        downloadDetails();
    },[])
  return (
    <div className='wrapper'>
        {(isLoading) ? <Loader /> :
            <div className='birdDetail-wrapper'>
            <div className='birdDetail-left'>
                <img src={bird.image} />
            </div>
            <div className='birdDetail-right'>
                <h3>{bird.title}</h3>
                <p>{bird.description}</p>
            </div>
        </div>}
    </div>
  )
}

export default BirdDetail