import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import * as path from "path";
import shopRouter from './routes/shopRouter.js';

dotenv.config();

const app = express();
const __dirname = path.resolve();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Zoo",
    headerTitle: "",
    pageType: "home",
    favicon: "",
    dataArray: "",
    featuredText: "Introductory text",
  });
});

app.use("/shop", shopRouter);
app.listen(PORT, () =>
  console.log(`🥗 listening on port ${PORT} ✅ http://localhost:${PORT}`)
);

// TODO:
// .env file
