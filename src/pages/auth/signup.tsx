import * as prismic from '@prismicio/client'
import sm from '../../../sm.json'
import { components } from '../../../slices'
import { SliceZone } from '@prismicio/react'

function Page({page}: any) {
  return(
    <SliceZone slices={page.data.slices} components={components}/>
  )
};

export default Page

export async function getStaticProps() {
  const client = prismic.createClient(sm.apiEndpoint)
  const page = await client.getByUID('page', 'loginpage')

  return {
    props: {
      page
    }
  }
}
