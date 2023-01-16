import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import sm from './sm.json';

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
    {
        type: 'page',
        path: '/:uid',
    },
    {
        type: 'homepage',
        path: '/:uid',
    },
];

export function linkResolver(doc) {
  switch (doc.type) {
    case 'homepage':
      return '/'
    default:
      return null
  }
}

export function createClient (config = {}){
    const client = prismic.createClient(sm.apiEndpoint, {
        routes,
        ...config,
    });

    prismicNext.enableAutoPreviews({
        client,
        previewData: config.previewData,
        req: config.req,
    });

    return client;
};
