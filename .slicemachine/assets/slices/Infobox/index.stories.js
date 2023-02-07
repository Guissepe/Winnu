import MyComponent from '../../../../slices/Infobox';

export default {
  title: 'slices/Infobox'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"cta_link":{"link_type":"Web","url":"http://google.com"},"cta_text":[{"type":"paragraph","text":"Ipsum dolor aute cillum. Adipisicing officia proident dolor sint elit aliquip quis mollit non. Voluptate aliquip elit excepteur fugiat ea mollit pariatur ad consectetur cillum culpa dolore in do reprehenderit.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Alike","spans":[]}],"description":[{"type":"paragraph","text":"Fugiat laborum deserunt commodo aute nulla exercitation consequat in nostrud quis sit cillum occaecat incididunt occaecat. Laborum pariatur quis excepteur proident pariatur in sunt aute aliquip culpa excepteur consectetur. Quis esse ad aliquip commodo voluptate consequat cillum occaecat duis et.","spans":[]}]},"id":"_Default","slice_type":"infobox"}} />
_Default.storyName = ''

export const _SingleButton = () => <MyComponent slice={{"variation":"singleButton","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Round","spans":[]}],"description":[{"type":"paragraph","text":"Id pariatur duis in nulla cupidatat ad.","spans":[]}],"cta_link":{"link_type":"Web","url":"http://google.com"},"cta_text":[{"type":"paragraph","text":"Officia veniam ad consectetur ex adipisicing occaecat ullamco dolore. Esse id excepteur ipsum nisi veniam ad proident occaecat deserunt aute.","spans":[]}]},"id":"_SingleButton","slice_type":"infobox"}} />
_SingleButton.storyName = ''

export const _Pricing = () => <MyComponent slice={{"variation":"pricing","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Farmer","spans":[]}],"description":[{"type":"paragraph","text":"Commodo occaecat exercitation in aliqua qui pariatur ad culpa veniam.","spans":[]}]},"id":"_Pricing","slice_type":"infobox"}} />
_Pricing.storyName = ''
