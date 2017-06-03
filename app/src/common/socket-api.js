import feathers from 'feathers-client';
import socket from 'socket.io-client';

const api = feathers()
        .configure(feathers.socketio(socket('http://localhost:3030')))
        .configure(feathers.hooks())
        .configure(feathers.authentication({ storage: window.localStorage }));

export default api;

