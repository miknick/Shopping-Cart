import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
function CreateCartCard(props) {
    const [item, setItem] = useState(props.props)
    const [pair, setPairs] = useState(1)

    console.log(props)
    const handleChange = (e) => {
        setPairs(e.target.value)
        props.addToPairs(pair)

    }

    return (
        <Container className="text-center mt-4" >
            <Row className="d-flex align-items-center">
                <Col>
                    <img className="cartImg" alt={item.name} src={item.img} ></img>
                </Col>
                <Col >
                    <h2 >${item.price}</h2>
                    <h2 >{item.name}</h2>
                    <input
                        onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) {
                                e.preventDefault();
                            }

                        }}
                        onChange={handleChange}
                        value={pair}
                    />

                </Col>
            </Row>
        </Container >

    )

}
export default CreateCartCard
