import React, { useContext } from 'react';
import AuthContext from '../contexts/authContext';

const Testes = () => {

 const { authenticated, HandleLogin }: any = useContext(AuthContext);

 console.log(authenticated);

 return(
  <button onClick={HandleLogin}>Click me please</button>
 );
}

export default Testes
