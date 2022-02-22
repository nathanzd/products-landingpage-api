import ReactDOM from 'react-dom';
import React from 'react';
import styled from 'styled-components'

//Importando o css
import './App.css'
import Sobre from './Components/Sobre';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Header from './Header';
import Produtos from './Produtos';
import Produto from './Produto';
import Head from './Head';


export const App=()=>{
    const[dados,setDados]=React.useState(null)
    React.useEffect(()=>{
        fetch('https://ranekapi.origamid.dev/json/api/produto/')
        .then((response)=>response.json())
        .then(json=>setDados(json))
        
    },[])


    return(
        <React.Fragment>
             <Head title='' description='Descrição pagina sobre'/>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Produtos dados={dados}/>} />
                <Route path='/:id' element={<Produto/>} />
                <Route path='contato' element={<Sobre dados={dados}/>} />
                <Route path='produtos' element={<Produtos dados={dados}/>}></Route>
                <Route path='produtos/:id' element={<Produto/>}></Route>
            </Routes>
        </BrowserRouter>
        </React.Fragment>
        
    )
}



export default App