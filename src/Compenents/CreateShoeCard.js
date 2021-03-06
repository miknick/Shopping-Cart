import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
function CreateShoeCard(props) {
    return (

        <Col className="p-1" sm={6} lg={4}>

            <Card className="shoeCard"  >
                <Link to={{
                    pathname: `${props.name}-details`
                    ,
                    state: {
                        name: props.name,
                        price: props.price,
                        img: props.img
                    }
                }} className="nav-link p-0">
                    <Card.Img alt="name" className="shoeImg" src={props.img}>
                    </Card.Img>
                </Link>
                <Card.Body   >
                    <Card.Title>${props.price}</Card.Title>
                    <Link to={{
                        pathname: `${props.name}-details`
                        ,
                        state: {
                            name: props.name,
                            price: props.price,
                            img: props.img
                        }
                    }} className="nav-link p-0 text-dark">
                        <Card.Text className="lead">{props.name}</Card.Text>
                    </Link>



                </Card.Body>
            </Card>

        </Col >


    )
}

export default CreateShoeCard
