import { Navbar, Nav, Badge } from "react-bootstrap"
import { Link } from "react-router-dom"
import React from "react"
function BasicNavbar(props) {
    return (
        <Navbar className="top " bg="dark">
            <Link to="/" className="nav-link  text-light">Sneakears4All</Link>
            <Nav className="ml-auto  ">
                <Link to="/" className="nav-link  text-light">Home</Link>
                <Link className="nav-link  text-light" to="/shop">Shop</Link>
                <Nav.Link onClick={() => props.setLoadCart(true)} className="cartLink text-light" >
                    Cart <Badge id="navBadge" variant="light" ></Badge> </Nav.Link>
            </Nav>
        </Navbar>
    )

}
export default BasicNavbar