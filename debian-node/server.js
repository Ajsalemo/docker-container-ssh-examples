import express, { json, urlencoded } from "express";
// Controllers
import homeController from "./controllers/homeController.js";
import catchAllController from "./controllers/catchAllController.js";

const app = express();
const port = process.env.PORT || 3000;

// Other middleware
// This replaced using bodyParser which was added in express v4.16.0 and higher
// https://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4
app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);

// Standard controllers
app.use(homeController);
// Catches all non matching routes and redirects it back to the root - must be placed last in the chain of middleware
app.use(catchAllController);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
