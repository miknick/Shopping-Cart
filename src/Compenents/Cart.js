import React from 'react'
import { Modal, Button, Container, Card, Row, Col, Alert, } from 'react-bootstrap'
import { useState, useEffect } from "react"
import CreateCartCard from './CreateCartCard'
import { HddNetwork } from 'react-bootstrap-icons'
import { Link } from "react-router-dom"
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
    function deleteShoe(index) {
        if (index || index === 0) {
            const updatedState = [...shoes]
            updatedState.splice(index, 1)
            setShoes(updatedState)
        }
    }
    const addPairs = (id, pair) => {
        let index = null
        const updatedState = shoes.map((shoe) => {
            if (shoe.id === id) {
                if (!pair || pair === "0")
                    index = shoes.indexOf(shoe)
                shoe["pair"] = pair
            }
            return shoe
        })

        setShoes(updatedState)
        deleteShoe(index)
        findTotal()
    }

    const compenent = shoes && shoes.map((item) => {
        {
            return (
                <CreateCartCard addPairs={addPairs} key={item.id} props={item}  >            </CreateCartCard>
            )
        }

    })
    const emptyCart = () => {
        return (
            <Container className="text-center mt-5">
                <Row>
                    <Col>
                        <p className="float-left alert" >Your bag is empty</p>

                    </Col>

                </Row>
                <Row>
                    <Col>
                        <img className="emptyCart w-50 mb-5" src="emptyCart.jpg" ></img>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/shop" >
                            <Button variant="outline-info"
                                onClick={() => props.setShow(false)}
                                size={"lg"} >Check Shoes</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
    const subtotalCompenent = () => {
        if (!subtotal)
            return ("")
        else
            return (
                <Container className="m-2" >
                    <Row>
                        <Col>
                            <h2>Subtotal:${subtotal}</h2>
                        </Col>
                        <Col>
                            <Button className="float-right" size={"lg"} variant="outline-info" >Checkout</Button>
                        </Col>
                    </Row>

                </Container>

            )
    }
    return (
        <Modal show={props.show} dialogClassName="cart float-right" onHide={() => props.setShow(false)}
            animation={false}
            scrollable>
            <Modal.Body>
                <Button onClick={() => props.setShow(false)} variant="light float-right">X</Button>
                <h1 className="mt-4">Your Shopping Bag</h1>
                {shoes && shoes.length > 0 ? compenent : emptyCart()}
                {subtotalCompenent()}
            </Modal.Body>
        </Modal>
    )
}

export default Cart
