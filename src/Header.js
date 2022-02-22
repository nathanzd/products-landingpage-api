import React from 'react';
import { Link,NavLink,useLocation } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const location=useLocation();
  
  React.useEffect(()=>{
    console.log('mudou a rota')
  },[location])

  return (
  <div className='header'>
      <nav>
          {/*<Link to='/'>Home</Link> */}
          <NavLink className='navLink' to='/'  end>Produtos</NavLink>
          <NavLink className='navLink' to='contato' end>Contato</NavLink>
          
          
      </nav>
      {/*<h1>Esta é a header</h1>*/}
  </div>
  )
};

export default Header;
