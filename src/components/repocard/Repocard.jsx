import React from 'react'
import axios from "axios";
import "./repocard.css"
import{useState , useEffect} from "react"
const Repocard = ({repo}) => {
  const [languages, setLanguages] = useState([]);
  return (
    <div className='repocard'>  
      <h3>{`Repo Name : ${repo.name}`}</h3>
      <p className='des'>{`Description: ${repo.description !== null ? repo.description : "None"}`}</p>
      <p>{`Language : ${repo.language}`}</p>
    </div>
  )
}

export default Repocard