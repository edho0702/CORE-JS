

const server = require('live-server');

const params = {
  host: 'localhost',
  port: 3000,
  open: false,
  root: './client'
}


server.start(params)


// const server = require("live-server");

// const params = {
//     host: "loaclhost",
//     port: 3000,
//     open: false,
//     root: "./client",
// };

// server.start(params);