import React from 'react'
import Hero from "../components/Hero.js"
import NavbarComponent from '../components/NavbarComponent.js';
import Footer from "../components/Footer.js"

const LandingPage = (props) => {

console.log("landing", props)
  return (
<>
<NavbarComponent />
<Hero />
<Footer />
</>  
)
}

export default LandingPage