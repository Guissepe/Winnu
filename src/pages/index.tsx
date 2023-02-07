import React from "react";
import { SliceZone } from '@prismicio/react'
import { createClient } from '../../prismicio'
import { components } from '../../slices/index'

const Page = ({ page }: any) => {
  return <SliceZone slices={page.data.slices} components={components}/>
}

export default Page

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData })
  const page = await client.getByUID('homepage', "homepage")
  return {
    props: {
      page,
    },
  }
}
