import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import data from "../data"
import CreateShoeCard from './CreateShoeCard'
function Shop() {
    const [shoes] = useState(data)
    const compenent = shoes.map((shoe) => {
        return (
            <CreateShoeCard key={shoe.id} id={shoe.id} name={shoe.name} price={shoe.price} img={shoe.img} >
            </CreateShoeCard>
        )
    })
    return (
        <Container className="mt-5" >


            <Row>

                {compenent}

            </Row>
        </Container>

    )
}

export default Shop
