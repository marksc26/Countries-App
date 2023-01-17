import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import ListCountries from '../components/ListCountries'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import './styles/Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])
	const [searchText, setSearchText] = useState("")

	
	//renderizar todos los paises

    useEffect(() =>{

        const URL ="https://restcountries.com/v3.1/all"
            axios.get(URL)
                .then(res => {/*console.log(res.data)*/
					setCountries(res.data)})
                .catch(err => console.log(err))
				

    },[])

	//renderizar el pais segun el nombre dado en el input
	
	async function searchCountry(){

			try{
			const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`)
			if(!res.ok) throw new Error("Not Found Any Country")
			const data = await res.json()
			setCountries(data)
			
			}catch (error) {
			console.error(error)
			}
		
	}

	const handleSearchCountry = (e) =>{
		e.preventDefault()
		searchCountry()
	}

	//busqueda de regiones por medio de options

	async function filterByRegion(region){
		try{ 
			const res =  await fetch(`https://restcountries.com/v3.1/region/${region}`)
			if(!res.ok) throw new Error("Invalid")
			const data = await res.json()
			setCountries(data)
		}catch(error){
			console.error(error)
		}
	}

	const handleFilterByRegion = (e) =>{
		e.preventDefault()
		filterByRegion()
	}

   //Dark theme

   const darkMode = useSelector(state => state.darkMode)

  return (
    <main className={!darkMode ? "main" : "main-darkMode"}>

	<Header/>

	<div className='form-container'>
	<form  onSubmit={handleSearchCountry} >
		<div className='input-button'>
			<input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Search for a country...'/>
			<button type='submit'><i className='bx bx-search-alt'></i></button>
		</div>
		
		
		
    </form>
	   <form onSubmit={handleFilterByRegion}>
			<div>
			<select onChange={(e) => filterByRegion(e.target.value)} className='select'>
				<option>Filter By Region</option>
				<option value="Africa">Africa</option>
				<option value="Europe">Europe</option>
				<option value="Americas">Americas</option>
				<option value="Asia">Asia</option>
				<option value="Oceania">Oceania</option>
				<option value="Antarctic">Antarctic</option>
			</select>

		    </div>
		</form>
	</div>


	<ListCountries countries={countries}/>

	{
		!darkMode ? <hr className='hr' /> : <hr className='hr-darkMode' />
	}

	<Footer/>
	    
    </main>
  )
}

export default Countries