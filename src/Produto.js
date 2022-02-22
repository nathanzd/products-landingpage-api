import React from 'react';
import { useParams } from 'react-router';
import Head from './Head';
const Produto = () => {
  const params=useParams();
  const[dados,setDados]=React.useState(null)
  

    
  console.log(params)
  React.useEffect(()=>{
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
    .then((response)=>response.json())
    .then((json)=>setDados(json));
  },[])

   
    if(dados !== null){
            console.log(dados)
            return (
                <React.Fragment>
                <Head title={dados.nome} description='Descrição pagina sobre'/>
                <div className='produtos_container2'>
                        <div className='image_container'>
                            {dados.fotos.map((foto)=><img key={params.id} className='product_image' src={foto.src}/>)}
                        </div>
                         <div className='description_container' >
                            <h3>{dados.nome}</h3>
                            <p className='preco'>R${dados.preco}</p>
                            <p>{dados.descricao}</p>
                         </div>
                </div>
                </React.Fragment>
            )
        }else{
            return <div></div>
        }
    
    
};

export default Produto;
