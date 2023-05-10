import axios from 'axios';

export default axios.create({
  baseURL: 'URL where your backend is hosted.',
});

//"start": "node ./backend/server.js",
//"start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"
