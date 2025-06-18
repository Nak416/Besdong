import React, { Component } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import ShopCategories from "./Components/ShopCategories"
import Footer from "./Components/Footer"




function App() {

  return (
    
    
      <div>
      <Header/>
      {/* <Footer/> */}

       
        <main>
          <Outlet/>
        </main>
        <footer>
       
        </footer>
      </div>
      
    
  )
}

export default App
 