import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';

const Textes = () => {

 const { authenticated, HandleLogin }: any = useContext(AuthContext);

 console.log(authenticated);

 return(
  <button onClick={HandleLogin}>Click me please</button>
 );
}

export default Textes
