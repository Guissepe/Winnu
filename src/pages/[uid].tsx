import * as prismicH from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'
import { createClient} from '../../prismicio'
import { components } from '../../slices/index'
import { Box } from '@chakra-ui/react'
import { Navigation } from '../components/navigation'
import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next'
type PageProps = InferGetStaticPropsType<typeof getStaticProps>
type PageParams = { uid: string }

const Page = ({ page, navigation, settings }:any) => {
  return <SliceZone slices={page.data.slices} components={components} />
}
export default Page
export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData })
  const page = await client.getByUID('page', params.uid)
  return {
    props: {
      page,
    },
  }
}
export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType('page')
  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  }
}
