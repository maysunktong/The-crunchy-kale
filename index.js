import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import * as path from "path";

import notFoundRouter from "./routes/404.routes.js";
import blogRouter from "./routes/blog.routes.js";
import homeRouter from "./routes/home.routes.js";
import locationRouter from "./routes/location.routes.js";
import shopRouter from "./routes/shop.routes.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));

const PORT = process.env.PORT;

app.get("/", homeRouter);
app.use("/shop", shopRouter);
app.use("/locations", locationRouter);
app.use("/blog", blogRouter);

app.use(notFoundRouter);

app.listen(PORT, () =>
  console.log(`🥗 listening on port ${PORT} ✅ http://localhost:${PORT}`)
);


