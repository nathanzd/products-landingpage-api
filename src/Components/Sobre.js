import React from 'react';
import Head from '../Head';
import './Sobre.css'
const Sobre = ({dados}) => {
  return (
  <div className='contact_container'>
      <Head title='Contato' description='Descrição pagina sobre'/>
      <img className='product_image2' src={dados[1].fotos[0].src}/>
      <div><h3>Entre em contato</h3><p>-produtos@email.com</p><p>-119999999</p><p>-Rua Johns Route 995</p></div>
  </div>);
};

export default Sobre;
