import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Loader from './components/Loader'
import Countries from './pages/Countries'
import CountryCard from './pages/CountryCard'

function App() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
      setTimeout(() =>{

        setIsLoading(!isLoading)

      },2000)

    },[])
  

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={isLoading ? (<Loader />): (<Countries />)}/>
        <Route path='/countries/:name' element={<CountryCard />} />
      </Routes>


   
    </div>
  )
}

export default App
