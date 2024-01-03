import React from 'react'
import Header from '../../components/header/header'    
import {default as Projects} from '../../pages/projects/projects'    
import "./home.css";

const Home = () => {
  return (
    <div className='home'>home
        <Header></Header>
        <hr></hr>
        <Projects></Projects>
    </div>
  )
}

export default Home