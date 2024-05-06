import React from 'react'
import './style.css'
import iconsUrlList from '../../assets/List.svg'
import iconsUrlSearch from '../../assets/Search.svg'
import api from '../../services/Api.jsx'
import { useState, useEffect } from 'react'

export default function Landing(props) {
    const [filmes, setFilmes] = useState([])
    
    // useEffect(() => {
//         async function loadPage(){
//             const response = await.get()
//         }
//         
//         loadPage()
//     }, [])
    return (
    <>
        <header>
            <h1>Web-flix</h1>
            <img src={iconsUrlList} />
        </header>
        <h1 id="apresentacao">Bem vindo(a) ao melhor site de exploração e visualização de filmes
        online!</h1>
        <div className="search">
            <input type="search" name="pesquisa" id="pesquisa"/>
            <span id="searchIcon"><img src={iconsUrlSearch} /></span>
        </div>
    </>
  )
}