import React from 'react'
import './header.css'

const header = () => {
  return (
    <div className='header'>

        <div className='header__aboutme'>
            <p>About Me</p>
        </div>

        <div className='header__description'>
            <p>Hi there, welcome to my digital space! </p>
            <p>I'm <span className='header__description_name'>Khanh Vo</span>, a passionate <span className='header__description_role'>computer science</span> and <span className='header__description_role'>geographical information systems graduate</span> from <span className='header__description_uni'>University of Toronto, where my academic journey has been a fusion of coding and spatial exploration.</span>.</p>
            <p>This website serves as a digital canvas where I'll share insights, experiences, and the fruits of my GIS and CS endeavors. I want this space to be more than a portfolio—it's a conversation. A dialogue about the endless possibilities at the intersection of GIS and computer science.</p>
        </div>

        

    </div>
  )
}

export default header