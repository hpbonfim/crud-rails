import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Airline from '../Airline'
import { Home, Header, Subheader, Grid } from './styles'

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
    <Home>
      <Header>
        <h1>OpenFlights</h1>
        <Subheader>Honest, unbiased airline reviews. Share your experience.</Subheader>
      </Header>

      <Grid>
        {grid}
      </Grid>
    </Home>
  )
}

export default Airlines