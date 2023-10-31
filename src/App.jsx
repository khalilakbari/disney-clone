import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenerMovieList from './components/GenerMovieList'

export default function App() {
  return (
    <div>
       <Header />
       <Slider />
       <ProductionHouse />
       <GenerMovieList />
    </div>
  )
}
