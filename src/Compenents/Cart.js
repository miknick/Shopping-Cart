import React from 'react'
import { Modal, Button, Container, Row, Col, } from 'react-bootstrap'
import { useEffect } from "react"
import CreateCartCard from './CreateCartCard'
import { Link } from "react-router-dom"
function Cart(props) {
    useEffect(() => {
        if (props.shoes) {
            const badge = document.getElementById("navBadge")
            badge.innerHTML = props.shoes.length ? props.shoes.length : ""
        }
    }, [props.shoes])

    const compenent = props.shoes && props.shoes.map((item) => {
        {
            return (
                <CreateCartCard addPairs={props.addPairs} key={item.id} props={item}  ></CreateCartCard>
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
                        <img className="emptyCart w-50 mb-5" src="emptyCart.jpg" alt="empty cart">

                        </img>

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
        if (!props.subtotal)
            return ("")
        else
            return (
                <Container className="m-2" >
                    <Row>
                        <Col>
                            <h2>Subtotal:${props.subtotal}</h2>
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
                {props.shoes && props.shoes.length > 0 ? compenent : emptyCart()}
                {subtotalCompenent()}
            </Modal.Body>
        </Modal>
    )
}

export default Cart
