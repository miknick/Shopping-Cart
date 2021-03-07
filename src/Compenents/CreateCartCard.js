import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
function CreateCartCard(props) {
    const [item, setItem] = useState(props.props)
    const [pair, setPair] = useState(1)
    const handleChange = (e) => {
        setPair(e.target.value)
    }
    useEffect(() => {
        props.addPairs(item.id, pair)
    }, [pair])
    return (
        <Container className=" mt-4" >
            <Row className="d-flex align-items-center">
                <Col>
                    <img className="cartImg" alt={item.name} src={item.img} ></img>
                </Col>
                <Col >

                    <h2  >{item.name}</h2>
                    <h2  >${item.price}</h2>
                    <input type="number"
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
