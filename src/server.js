import "dotenv/config.js";
import app from "./index.js";
const port = process.env.PORT;
app.listen(port);
