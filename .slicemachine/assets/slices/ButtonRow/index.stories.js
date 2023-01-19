import MyComponent from '../../../../slices/ButtonRow';

export default {
  title: 'slices/ButtonRow'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"cta_text":"soap","cta_link":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{},"id":"_Default","slice_type":"button_row"}} />
_Default.storyName = ''

export const _Dark = () => <MyComponent slice={{"variation":"dark","version":"sktwi1xtmkfgx8626","items":[{"cta_text":"exchange","cta_link":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{},"id":"_Dark","slice_type":"button_row"}} />
_Dark.storyName = ''

export const _DarkLog = () => <MyComponent slice={{"variation":"darkLog","version":"sktwi1xtmkfgx8626","items":[{"cta_text":"poor","cta_link":{"link_type":"Web","url":"https://slicemachine.dev"},"handler":"unknown"}],"primary":{},"id":"_DarkLog","slice_type":"button_row"}} />
_DarkLog.storyName = ''
