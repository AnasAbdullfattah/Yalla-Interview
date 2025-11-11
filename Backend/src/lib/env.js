import { config } from "dotenv";
config();
const ENV = {
  PORT: process.env.PORT,
};

export default ENV;
