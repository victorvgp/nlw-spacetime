import fastify from "fastify";
import cors from "@fastify/cors";
import { memoriesRoutes } from "./routes/memories";

const app = fastify();

app.register(cors, {
  // origin: ["http://localhots:3000", "https://meuSite.com.br"],
  origin: true,
});
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("🚀HTTP server running on http://localhost:3333");
  });
