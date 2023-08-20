import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Bird from '../Bird/Bird'
import './BirdList.css'
import Loader from '../Loader/Loader.jsx'


const BirdList = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [birdList, setBirdList]=useState([]);

    async function downloadBirds(){
        setIsLoading(true);

        

        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20');
    
        const birdResults = response.data.photos;
        console.log("bird result")
        console.log(birdResults);

        const birdListResult = birdResults.map((bird)=>{
            return{
                id: bird.id,
                title:bird.title,
                description:bird.description,
                image: bird.url
            }
        })

        setBirdList(birdListResult);
        setIsLoading(false);

    }

    useEffect(()=>{
        downloadBirds();
    },[]);

  return (
    <div className='birdList_Wrapper'>
        
        <div className='bird-wrapper'>
        {(isLoading) ? <Loader /> : 
            birdList.map((p)=> <Bird className='bird-image' id={p.id} image={p.image} key={p.id} />)
        }
        </div>
    </div>
  )
}

export default BirdList