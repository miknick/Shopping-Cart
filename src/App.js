import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Switch } from "react-router-dom"
import Home from "./Compenents/Home"
import Shop from "./Compenents/Shop"
import ShoeDetails from "./Compenents/ShoeDetails"
import { useState, useEffect } from "react"
import Cart from "./Compenents/Cart"
import BasicNavbar from "./Compenents/BasicNavbar"
function App() {
  const [loadCart, setLoadCart] = useState(false)
  const [cartList, setCartList] = useState([])
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    findTotal()
  }, [cartList])
  function findTotal() {
    setSubtotal(() => {
      let total = 0
      cartList.map(shoe => {
        total += (shoe.price * shoe.pair)
      })
      return total
    })

  }
  function deleteShoe(index) {
    if (index || index === 0) {
      const updatedState = [...cartList]
      updatedState.splice(index, 1)
      setCartList(updatedState)
    }
  }
  function addToCart(shoe) {
    const index = cartList.indexOf(shoe)

    if (index === -1) {
      setCartList([...cartList, shoe])
      addPairs(shoe.id, 1)
    }

    else {
      const updatedState = [...cartList]
      for (let i = 0; i < updatedState.length; i++) {
        if (index === i)
          (updatedState[i]["pair"] = parseInt(updatedState[i]["pair"]) + 1)
      }
      setCartList(updatedState)
      findTotal()
    }


  }
  function addPairs(id, pair) {
    setCartList((prevState) => {
      for (let i = 0; i < prevState.length; i++) {
        if (id === prevState[i].id)
          if (pair === "0")
            deleteShoe(i)
          else
            prevState[i]["pair"] = pair
      }
      return prevState
    })
    findTotal()
  }
  return (
    <div>
      <BasicNavbar setLoadCart={setLoadCart}></BasicNavbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/:name-details">
          <ShoeDetails addToCart={addToCart} ></ShoeDetails>
        </Route>
      </Switch>
      <Cart addPairs={addPairs} shoes={cartList} subtotal={subtotal} show={loadCart}
        setShow={setLoadCart} ></Cart>

    </div >

  )
}

export default App

