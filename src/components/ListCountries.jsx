import React, { useEffect, useState } from 'react'
import Card from './Card'


const ListCountries = ({countries}) => {

  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    setTimeout(() =>{
      setLoading(!loading)
    }, 600)

  },[])

  return (
    <section className='list-countries'>

      {
        loading ? <img src="https://cliply.co/wp-content/uploads/2021/02/392102850_EARTH_EMOJI_400px.gif" alt="" /> : countries.map(country => <Card country={country} key={country.flags.png} />)
      }
        
        
    </section>
  )
}

export default ListCountries