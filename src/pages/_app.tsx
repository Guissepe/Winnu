import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Link from "next/link";
import { SessionProvider } from "next-auth/react"
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName, linkResolver } from "../../prismicio";
import React from "react";

function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
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
  );
}

export default App;
