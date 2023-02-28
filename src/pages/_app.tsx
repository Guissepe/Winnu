import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Link from "next/link";
import { SessionProvider } from "next-auth/react"
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName, linkResolver } from "../../prismicio";
import React, { useContext } from "react";
// import { AuthProvider } from "../contexts/authContext";

function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    // <AuthProvider>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, ...props }) => (
          <Link href={href} {...props}/>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <ChakraProvider theme={theme}>
          <SessionProvider session={pageProps.session}>
                  <Component {...pageProps} />
            </SessionProvider>
          </ChakraProvider>
        </PrismicPreview>
      </PrismicProvider>
    // </AuthProvider>
  );
}

export default App;
