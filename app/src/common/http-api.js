import feathers from 'feathers-client';

const httpApi = feathers()
        .configure(feathers.hooks())
        .configure(feathers.authentication({ storage: window.localStorage }))
        .configure(feathers.rest('http://localhost:3030').fetch(window.fetch.bind(window)));

export default httpApi;
