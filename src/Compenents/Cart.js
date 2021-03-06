import React from 'react'
import { Modal, Button, Container, Card, Row, Col, Alert, } from 'react-bootstrap'
import { useState, useEffect } from "react"
import CreateCartCard from './CreateCartCard'

function Cart(props) {

    const [shoes, setShoes] = useState()
    useEffect(() => {
        setShoes(props.items)
    }, [props.items])

    const [subtotal, setSubtotal] = useState(0)

    const findTotal = () => {
        setSubtotal(() => {
            let total = 0
            shoes.map(shoe => {
                total += (shoe.price * shoe.pair)
            })
            return total
        })
    }
    const addPairs = (id, pair) => {
        const updatedState = shoes.map((shoe) => {
            if (shoe.id === id)
                shoe["pair"] = pair
            return shoe
        })
        setShoes(updatedState)
        findTotal()
    }

    const compenent = props.items.map((item) => {
        return (
            <CreateCartCard addPairs={addPairs} key={item.id} props={item}  >            </CreateCartCard>
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
