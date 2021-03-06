import React from "react"
import { Navbar, Nav, Badge, Modal } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Link, Switch } from "react-router-dom"
import Home from "./Compenents/Home"
import Shop from "./Compenents/Shop"
import ShoeDetails from "./Compenents/ShoeDetails"
import { useState } from "react"
import Cart from "./Compenents/Cart"
function App() {
  const [loadCart, setLoadCart] = useState(false)
  const [cartList, setCartList] = useState([{
    id: 7,
    name: "Air Jordan 1 Mid",
    price: 200,
    img: "airJordan1Mid.jpg"
  },
  {
    id: 8,
    name: "Nike Lebron XVII Low",
    price: 150,
    img: "nikeLebronXVIILow.jpg"
  },])
  const addToCart = (item) => {
    setCartList([...cartList, item])
  }
  return (
    <div>
      <Navbar className="top " bg="dark">
        <Link to="/" className=" text-light">
          <Navbar.Brand >Navbar</Navbar.Brand>
        </Link>
        <Nav className="ml-auto  ">
          <Link to="/" className="nav-link  text-light">Home</Link>
          <Link className="nav-link  text-light" to="/shop">Shop</Link>
          <Nav.Link onClick={() => setLoadCart(true)} className="cartLink text-light" >
            Cart <Badge variant="light" id="cartBadge">{cartList.length > 0 && cartList.length}
            </Badge> </Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/:name-details">
          <ShoeDetails cartCount={cartList.length} addToCart={addToCart} ></ShoeDetails>
        </Route>
      </Switch>
      <Cart items={cartList} show={loadCart} setShow={setLoadCart} ></Cart>

    </div >

  )
}

export default App

