const app = require("./backend/app");

const http = require("http").createServer(app);

const port = process.env.PORT || 5000;

http.listen(port, () => {
  console.log(`server is listening from port ${port}`);
});