import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Airline from '../Airline'


const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {
    axios.get('/api/v1/airlines.json')
      .then(resp => {
        const data = Object.entries(resp.data)
        console.log(data)
        setAirlines(data[0][1])
      })
      .catch(data => {
        debugger
      })
  }, [])

  const grid = airlines.map((airline, index) => {
    return (
      <Airline
        key={index}
        attributes={airline.attributes}
      />
    )
  })


  return (
    <section className="home">
      <section className="header">
        <h1>OpenFlights</h1>
        <p className="subheader">Honest, unbiased airline reviews. Share your experience.</p>
      </section>

      <section className="grid">
        {grid}
      </section>
    </section>
  )
}

export default Airlines