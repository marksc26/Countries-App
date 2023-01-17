import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './styles/Card.css'

const Card = ({country}) => {

  const navigate = useNavigate()

  const handleClickCountry = () =>{
    navigate(`/countries/${country.name.common}`)
  }

  const darkMode = useSelector(state => state.darkMode)


  return (
    
    <article onClick={handleClickCountry} className={!darkMode ? "card" : "card-darkMode"}>
      
      <div className='img-container'>
        <img src={country.flags.png} alt="" />
      </div>
        
        
        <h3 className='info-card'>{country.name.common}</h3>
        <p className='info-card'><span>Population: </span>{(country.population).toLocaleString()}</p>
        <p className='info-card'><span>Region: </span>{country.region}</p>
        <p className='info-card'><span>Capital: </span>{country.capital}</p>

        

    </article>
  )
}

export default Card