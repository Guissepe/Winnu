import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Link from "next/link";
import { SessionProvider } from "next-auth/react"
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../../prismicio";
import Layout from "../components/layout/layout";
import React from "react";

function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <PrismicProvider internalLinkComponent={(href, ...props) => <Link href={href} {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <ChakraProvider theme={theme}>
        <SessionProvider session={pageProps.session}>
          <Layout>
                <Component {...pageProps} />
          </Layout>
          </SessionProvider>
        </ChakraProvider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default App;
