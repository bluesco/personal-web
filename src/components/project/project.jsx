import React from 'react'
import './project.css'
const Project = ({ id, image, title, description, tags, visit}) => {
  return (
    <div className='project__card'>
        <h2>{title}</h2>
        <img src={image} />
        <p>{description}</p>
        <div className='tags__container'>
            {tags.map((tag) => (
            <div className='tags__element'>{tag}</div>
            ))}
        </div>
    </div>
  )
}

export default Project