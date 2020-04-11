const api = require('./api');


const port = 3350;

api.listen(port, () => {
  console.log(`Server started on port`);
});