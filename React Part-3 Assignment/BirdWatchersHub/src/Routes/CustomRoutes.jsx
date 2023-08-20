import React from 'react'
import { Route, Routes } from 'react-router-dom';
import BirdHub from '../Components/BirdHub/BirdHub';
import BirdDetail from '../BirdDetails/BirdDetail';

const CustomRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<BirdHub />} />
        <Route path='/bird/:id' element={<BirdDetail />} />
    </Routes>
  )
}

export default CustomRoutes