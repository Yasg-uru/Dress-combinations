import dotenv, { config } from "dotenv";
import app from "./app.js";
import connectDatabase from "./config/database.js";
dotenv.config({ path: "backend/config/config.env" });
connectDatabase();
const PORT = process.env.PORT || 4001;
app.listen(PORT, function () {
  console.log(`server is running on PORT:${PORT}`);
});
