import React from 'react'

import "./projects.css";
import Project from '../../components/project/project'
import { useLocation } from 'react-router-dom';

const CSprojects = [
  {
    title: 'Huffman Tree Compression',
    description: 'Implemented the algorithm to generate the Huffman tree, with a focus on recursive operations and building blocks to compress/decompress data with a Huffman encoding.',
    image: '',
    tags: ['Python', 'Recursive Operation', 'Tree Structure', 'Data Compression/Decompression'],
    source: 'https://google.com',
    id: 0,
  },
  {
    title: 'Ride-Sharing Simulation',
    description: 'Implemented an event-driven simulation of a ride-sharing service, with a priority queue to store the data of the drivers and riders.',
    image: '',
    tags: ['Python', 'API', 'Priority Queue'],
    source: 'https://google.com',
    id: 1,
  },
  {
    title: 'Data Visualizer',
    description:'Implemented an interactive treemap visualization tool to visualize the size of files as a hierarchy. Each rectangle represents a file\'s name, its size in bytes',
    image: '',
    tags: ['Python', 'Pygame', 'JSON', 'OS library'],
    source: 'https://google.com',
    id: 2,
  },
  
  {
    title: 'Othello Board Game',
    description: 'Implemented the “Othello” board game in Java, using object oriented programming practices, as well as the design pattern of Model View Controller',
      image: '',
      tags: ['Java', 'Git', 'Documentation'],
    source: 'https://google.com',
    id: 3,
  },
  {
    title: 'Transit Fare System Simulation',
    description: 'Implemented a simulation of a transit fare system, with user account creation management, fare purchase, register transit cards, administration system, funds balance system. -	Used JavaFX library to build an interactive GUI and several design patterns such as Model View Controller (MVC),Observer-Observable to show the relationship between the GUI, fare system and the administrators. -	Created a product backlog to assign and complete tasks in sprints using agile scrum development with concise management of code through the usage of git.',
    image: '',
    tags: ["Java", "Git", "Agile Scrum", "Documentation"],
    source: 'https://google.com',
    id: 4,
  },
  {
    title: 'Simon Game',
    description: 'Implemented the Simon game in Assembly language in which the player must repeat a sequence of lights that the computer generates. The game will display a set of four LEDs, and the player will use a D-pad input to match the sequence.',
    image: '',
    tags: ["Assembly", "Documentation"],
    source: 'https://google.com',
    id: 5,
  },
  {
    title: 'Interpreter in Haskell',
    description: 'Wrote an interpreter for a functional language in Haskell called Yumyscript to understand the concepts of pattern matching, error propagation, and Haskell in general.',
    image: '',
    tags: ["Haskell", "Currying", "Higher Order Functions", "Recursion"],
    source: 'https://google.com',
    id: 6,
  },
  {
    title: 'Desugarer in Racket',
    description: 'Wrote a desugarer in Racket to understand the concepts of syntactic sugar, where it takes a Racket data structure representing code in complex language, and convert it to code in basic language.',
    image: '',
    tags: ["Racket", "Syntatic Sugar"],
    source: 'https://google.com',
    id: 6,
  },
  {
    title: 'Sentiment analysis on Google reviews of a restaurant',
    description: 'Created a deep learning model using Recurrent Neural Networks (RNN) to classify restaurant reviews as either positive or negative.',
    image: '',
    tags: ["RNN", "Pytorch", "NLP", "Documentation"],
    source: 'https://google.com',
    id: 7,
  },
  {
    title: 'Comparing General Purpose Image Captioning Model against Fine-tuned Model for Medical Domain',
    description: 'Developed a fine-tuned domain-specific image captioning model for the healthcare dataset MedICaT using the BLIP model.',
    image: '',
    tags: ["Computer Vision", "NLP", "Jupyter", "Documentation"],
    source: 'https://google.com',
    id: 8,
  },
];

const GISprojects = [
  {
    title: 'Analyzed Urban Expansion in Doha, Qatar',
    description: 'Examined changes in land cover classes to analyze urban expansion in the city of Doha, Qatar from 2016 to 2022.',
    image: '',
    tags: ['NDVI', 'NDSI', 'TCC', 'FCC', 'Supervised Classification', "Accuracy Assessments", 'ERDAS', 'ArcGIS Pro', "Documentation"],
    source: 'https://google.com',
    id: 0,
  },
  {
    title: 'Optimization Model for Outdoor Venue Location',
    description: 'Developed an optimization model to select suitable locations for outdoor music festivals in Vermont, USA. Utilized ArcPy to perform geographic data analysis, data conversion, and data management.',
    image: '',
    tags: ['Raster Data', 'Vector Data', 'ArcPy', 'Python', 'ArcGIS Pro'],
    source: 'https://google.com',
    id: 0,
  },
  {
    title: 'Mental Health Service Accessibility within the Toronto Population',
    description: 'Conducted research on Mental Health Service Accessibility within the Toronto Population. Investigated the relationship between social determinants and mental health hospitalizations.',
    image: '',
    tags: ['LISA Cluster Maps', 'LISA Significance', 'Origin-Destination Cost Matrix', 'Choropleth Maps', 'GeoDa', 'ArcGIS Pro'],
    source: 'https://google.com',
    id: 0,
  },
  {
    title: 'Site Suitability Analysis for Community Garden Locations in Mississauga',
    description: 'Identified the optimal locations for the formation of community gardens within the city of Mississauga. Performed SQL queries to extract data from the database and used QGIS to perform spatial analysis.',
    image: '',
    tags: ['SQL', 'PostgreSQL', 'QGIS', "Documentation"],
    source: 'https://google.com',
    id: 0,
  },
  {
    title: 'Air Pollution Interpolation and Clustering Study of Southeastern States in the US, 2015',
    description: 'Designed interpolation and spatial clustering study of PM2.5, Ozone, and Nitrogen dioxide pollution concentration for Florida, Mississippi, Alabama, Georgia, and South Carolina. Estimate air pollution levels for areas with insufficient monitoring data through three methods including the inverse distance-weighted (IDW), Kriging, and clustering methods.',
    image: '',
    tags: ['IDW', 'Kriging', 'Clustering Methods', 'Thiessen Polygons', 'R', "Documentation"],
    source: 'https://google.com',
    id: 0,
  },
  {
    title: 'Analyzed the Geography of Treaties Struck between Colonial Governments and Indigenous Nations within Ontario',
    description: 'Got to understand the relationship between treaty boundaries and the Bradford Bypass Project. Used Python in QGIS to perform spatial mapping and analysis.',
    image: '',
    tags: ['PyQGIS', 'QGIS', "Documentation"],
    source: 'https://google.com',
    id: 0,
  },
];

const Projects = () => {

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const CSfilteredProjects = isHomePage ? CSprojects.slice(0, 4) : CSprojects;
  const GISfilteredProjects = isHomePage ? GISprojects.slice(0, 4) : GISprojects;

  return (
    <div className='project__container'>

      <div className='project__firstpart'>
      <div className='project__title'>
        <h1>CS Projects</h1>
      </div>
      
      {isHomePage && (

        <div className='project__seeall'>
          <a href="/projects" rel="noopener noreferrer">see all projects</a>
        </div>
      )}
      </div>
      
      <div className='project__list'>
        {CSfilteredProjects.map(({ id, image, title, description, tags, source, visit }) => (
          <a href={source} target="_blank" rel="noopener noreferrer">
            <Project
              key={id}
              image={image}
              title={title}
              description={description}
              tags={tags}
              visit={visit}
            />
          </a>
        ))}
      </div>
      
      <br></br>
      <hr></hr>
      <br></br>

      <div className='project__firstpart'>
      <div className='project__title'>
        <h1>GIS Projects</h1>
      </div>
      {isHomePage && (

      <div className='project__seeall'>
        <a href="/projects" rel="noopener noreferrer">see all projects</a>
      </div>
      )}
      </div>

      <div className='project__list'>
        {GISfilteredProjects.map(({ id, image, title, description, tags, source, visit }) => (
          <a href={source} target="_blank" rel="noopener noreferrer">
            <Project
              key={id}
              image={image}
              title={title}
              description={description}
              tags={tags}
              visit={visit}
            />
          </a>
        ))}
      </div>
          
    </div>
  )
}

export default Projects