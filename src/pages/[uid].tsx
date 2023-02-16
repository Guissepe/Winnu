import React, { useContext } from 'react';
import * as prismicH from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'
import { createClient} from '../../prismicio'
import { components } from '../../slices/index'
import { getProviders } from "next-auth/react"
import type { InferGetStaticPropsType } from 'next'
type PageProps = InferGetStaticPropsType<typeof getStaticProps>
type PageParams = { uid: string }

const Page = ({ page }:any) => {
  return <SliceZone slices={page.data.slices} components={components} />
}
export default Page

export async function getStaticProps({ params, previewData }: any) {
  const providers = await getProviders()
  const client = createClient({ previewData })
  const page = await client.getByUID('page', params.uid)
  return {
    props: {
      providers,
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
