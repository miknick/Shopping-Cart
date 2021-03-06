import React, { useState } from 'react'
import { Card, CardDeck, Container, Row, Col } from 'react-bootstrap'
import data from "../data"
import CreateShoeCard from './CreateShoeCard'
function Shop() {
    const [shoes] = useState(data)
    const compenent = shoes.map((shoe) => {
        return (
            <CreateShoeCard key={shoe.id} name={shoe.name} price={shoe.price} img={shoe.img} >
            </CreateShoeCard>
        )
    })
    return (
        <Container  >
            <Row>

                {compenent}

            </Row>
        </Container>
    )
}

export default Shop
