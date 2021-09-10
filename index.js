const server = require("./api/server");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} with ${process.env.NODE_ENV}...`);
});
