import React from 'react';
import socketCluster from 'socketcluster-client';

const opts = {
  hostname: 'realtime.stake.com',
  port: 80
};

export const socket = socketCluster.connect(opts);

const onHandlers = {
  connect: dispatch => () => {
    console.info('SOCKET CONNECTED');
  },
  disconnect: dispatch => data => {
    console.info('SOCKET DISCONNECTED', data);
  },
  subscribe: dispatch => data => {
    console.debug('subscribe:', data);
  },
  message: () => data => {
    console.info('socketMessage: ', { message: data });
  }
};

const dispatch = (...args) => console.log({ args });
const attachSocketEvents = dispatch => {
  Object.keys(onHandlers).forEach(key => {
    socket.on(key, onHandlers[key](dispatch));
  });
};

export default () => <h1>example</h1>;
