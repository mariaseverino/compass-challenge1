import { config } from "dotenv";
import express from "express";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import docs from "./swagger.json";

config();

const app = express();

app.use(express.json());
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(docs));
app.use(routes);

const start = async () => {
    try {
        const port = process.env.PORT || 3000;

        app.listen(port, () =>
            console.log(`running in http://localhost:${port}/`),
        );
    } catch (error) {
        console.log(error);
    }
};

start();
