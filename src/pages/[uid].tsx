import * as prismicH from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'
import { createClient} from '../../prismicio'
import { components } from '../../slices/index'
import { Box } from '@chakra-ui/react'
import { Navigation } from '../components/navigation'
import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>
type PageParams = { uid: string }

export async function getStaticProps({
  params,
  previewData,
}: GetStaticPropsContext<PageParams>) {
  const client = createClient({ previewData })
  const page = await client.getByUID('page', 'test')
  return {
    props: {
      page,
    },
  }
}

export default function Page({ page }: PageProps) {
  <Box>
    <Navigation navigation={Navigation} />
    <SliceZone slices={page.data.slices} components={components} />
  </Box>

}

// export default async function Page({ page, navigation }: any) {
//   return (
//     <Box>

//     </Box>
//   )
// }
// export async function getStaticProps({ params, previewData }: any) {
//   const client = createClient({ previewData })
//   const [navigation, page] = await Promise.all([
//     client.getByUID('navigation', 'header'),
//     client.getByUID('page', params.uid),
//   ])

//   return {
//     props: {
//       navigation,
//       page,
//     },
//   }
// }

export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType('page')
  return {
    paths: pages.map(page => prismicH.asLink(page)),
    fallback: false,
  }
}
