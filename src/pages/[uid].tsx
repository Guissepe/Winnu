import * as prismicH from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'
import { createClient} from '../../prismicio'
import { components } from '../../slices/index'
import { Box } from '@chakra-ui/react'

type PageParams = { uid: string }
export default async function Page({ page, navigation }: any) {
  return (
    <Box>
      <SliceZone slices={page.data.slices} components={components} />
    </Box>
  )
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData })
  const [navigation, page] = await Promise.all([
   client.getByUID('page', params.uid),
   client.getByUID('navigation', 'header'),
  ])

  return {
    props: {
      navigation,
      page,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType('page')
  return {
    paths: pages.map(page => prismicH.asLink(page)),
    fallback: false,
  }
}
