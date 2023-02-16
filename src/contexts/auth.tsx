import { createContext, useEffect, useState } from "react";
import { useSession, signIn, signOut } from 'next-auth/react'

const AuthContext = createContext({});

export function AuthProvider({ children }: any) {
  const [authenticated, setAuthenticated] = useState(false);

  async function HandleLogin(params:any) {
    const { data: status }: any = useSession();

    setAuthenticated(status);

  }

 return (
   <AuthContext.Provider value={{ authenticated, HandleLogin }}>
     {children}
   </AuthContext.Provider>
 );
};
export default AuthContext;
