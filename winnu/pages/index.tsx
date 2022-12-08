import Head from "next/head";
import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Winnu</title>
        <meta
          name="description"
          content="Build your dream website simple and easy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>This is the main page</main>

      <Button variant="primary">Custom button</Button>
    </div>
  );
}
