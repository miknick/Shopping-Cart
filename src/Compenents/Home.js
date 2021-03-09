import React from 'react'
import { Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="homeImg" >
            <Container >
                <h1 className="homeText w-50 text-light">Jordan Why Not Zer0.3 Se Available </h1>
                <Link to="/shop" >
                    <Button variant="danger" size={"md"} className="homeText" >Shop Now</Button>
                </Link>

            </Container>

        </div>




    )
}



export default Home
