import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Navbar from '../navbar.jsx'
import First from './propsExample/First.jsx'
import Profile, { Greet } from '../state_examplejsx/profile.jsx'
import ThemeUpdate from './Day-6/ThemeUpdate.jsx'
import ConditionalRendering from './Day-6/conditionalRendering.jsx'
import ListRendering from './day7/listRendering.jsx'
import FoodMenu from './day7/foodMenu.jsx'
import FoodSubMenu from './day7/foodSubMenu.jsx'


let myObject = {
  address: "Kathmandu",
  age: 40,
  fullName: "Shyam Lal"
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Navbar />
    <First address={"Dehli"} age={56} fullName="Ram Prasad" /> 
    {/* its like passing attributes to normal tag like: <h1 style="color:red">
    note: strings can be writeen like wither {"Dehli"} or "Dehli", but integers must need '{}' */}
    <First {...myObject} />
    {/* here we are spreading the object as props to the First component */}
    <Profile/>
    <Greet />
    <ThemeUpdate />
    <ConditionalRendering />
    <ListRendering />
    <FoodMenu />
    <FoodSubMenu />
  </StrictMode>
)
