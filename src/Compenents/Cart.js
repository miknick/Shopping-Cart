import React from 'react'
import { Modal, Button, Container, Card, Row, Col, Alert, } from 'react-bootstrap'
import { useState, useEffect } from "react"
import CreateCartCard from './CreateCartCard'

function Cart(props) {
    const [subtotal, setSubtotal] = useState(0)
    const [pairs, setPairs] = useState([])

    function addToPairs(pair) {
        setPairs([...pairs, pair])
    }
    const compenent = props.items.map((item) => {
        return (
            <CreateCartCard addToPairs={addToPairs} key={item.id} props={item}  >            </CreateCartCard>
        )
    })
    return (
        <Modal show={props.show} dialogClassName="cart float-right" onHide={() => props.setShow(false)}
            animation={false}
            scrollable>
            <Modal.Body>
                <Button onClick={() => props.setShow(false)} variant="light float-right">X</Button>
                {compenent}
                <h2>Subtotal:${subtotal}</h2>
            </Modal.Body>

        </Modal>
    )
}

export default Cart
