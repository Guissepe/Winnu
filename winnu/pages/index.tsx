import Head from "next/head";
import { Button } from "@chakra-ui/react";
import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices";

// code provided by prismic

const Page = ({
  page,
  navigation,
  settings,
}: {
  page: any;
  navigation: any;
  settings: any;
}) => {
  return <SliceZone slices={page.data.slices} components={components} />;
};

export default Page;

export async function getStaticProps({ previewData }: { previewData: any }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("Page");

  return {
    props: {
      page,
    },
  };
}

// original code
// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Winnu</title>
//         <meta
//           name="description"
//           content="Build your dream website simple and easy"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>This is the main page</main>

//       <Button variant="primary">Custom button</Button>
//     </div>
//   );
// }
