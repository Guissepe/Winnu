import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Link from "next/link";
import { SessionProvider } from "next-auth/react"
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName, linkResolver } from "../../prismicio";
import React from "react";
import Loginfunction from "../components/Loginlogout";

function App({ Component, pageProps, session }: { Component: any; pageProps: any; session: any }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href} {...props}/>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <ChakraProvider theme={theme}>
        <SessionProvider session={session}>
          <Loginfunction/>
                <Component {...pageProps} />
          </SessionProvider>
        </ChakraProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default App;
