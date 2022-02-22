import React from 'react';
import { NavLink } from 'react-router-dom';
import Head from './Head';
import foto from './img/avatar2.png'

import Produto from './Produto';

const Home = () => {
  return (
  <div>
      <Head  description='descrição da home'/>
      <h1>home</h1>
      <p>Esta é a home</p>
      <Produto/>
  </div>);
};

export default Home;
