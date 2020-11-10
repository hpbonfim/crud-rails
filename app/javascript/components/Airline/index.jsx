import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Card, AirlineLogo, AirlineName, LinkWrapper } from './styles'

const Airline = (props) => {
  const { name, image_url, slug } = props.attributes

  return (
    <Card>
      <AirlineLogo>
        <img src={image_url} alt={name} width="50" />
      </AirlineLogo>
      <AirlineName>
        {name}
      </AirlineName>
      <LinkWrapper>
        <Link to={"/" + slug}>View Airline</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Airline