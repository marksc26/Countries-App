import React, { useEffect, useState } from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import './styles/CountryCard.css'

const CountryCard = () => {

  const [country, setCountry] = useState([])


  const {name} = useParams()

  useEffect(() => {

    const URL = `https://restcountries.com/v3.1/name/${name}`
      axios.get(URL)
        .then(res => {
          setCountry(res.data)})
        .catch(err => console.log(err))

  },[])

  
  const darkMode = useSelector(state => state.darkMode)
   const navigate = useNavigate()

  const buttonBack = () =>{
    navigate("/")
  }

  
  return (
    <section className={!darkMode ? "infoCard" : "infoCard-darkMode"}>
      <Header/>
      <div className={!darkMode ? "button-back" : "button-back-darkMode"}>
        <button onClick={buttonBack}><i className='bx bx-arrow-back'></i>Back</button>
      </div>

      {
        country.map(c => 
        <article className='info-container' key={c.flags.png}>
          <div>
            <img  src={c.flags.png} alt="" />
          </div>
          <div className='sec-info'>
            <h1><span className='span'>Official Name: </span>{c.name.official}</h1>
            <h3><span>Population: </span>{(c.population).toLocaleString()}</h3>
            <h3><span>Region: </span>{c.region}</h3>
            <h3><span>Sub Region: </span>{c.subregion}</h3>
            <h3><span>Capital: </span>{c.capital}</h3>
          </div>

          <div className='third-info'>
            <h3><span>Top Level Domain: </span>{c.tld}</h3>
            <h3><span>Borders:</span>{c.borders ? (c.borders).toLocaleString(): "n/a"}</h3>
            
          </div>
   
          
        </article>
        
        
        )
      }

    {
      !darkMode ? <hr className='hr' /> : <hr className='hr-darkMode' />
	  }

      <Footer/>

    </section>
  )
}

export default CountryCard