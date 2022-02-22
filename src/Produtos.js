import React from 'react';

import { Route, Routes, useLocation, useParams,Outlet,NavLink,Link } from 'react-router-dom';
import Head from './Head';
import './Produtos.css'
const Produtos = () => {
  const[dados,setDados]=React.useState(null)
  const Params=useParams();
  


  
    React.useEffect(()=>{
           fetch('https://ranekapi.origamid.dev/json/api/produto/')
           .then((response)=>response.json())
           .then(json=>setDados(json))
           
       },[])

       console.log(dados)

    return (
  <div className='produtos_container'>
      <Head title='' description='Descrição pagina sobre'/>
      {dados && dados.map((produto)=>(
      <div key={produto.id} className='home_product'>
        <Link to={produto.id}><img className='product_image' src={produto.fotos[0].src}/></Link>
        <h3 className='product_title'><Link className='link' to='/'>{produto.nome}</Link></h3>
      </div>
      ))}
      
      <Outlet/>
  </div>);
};

export default Produtos;
