import express from "express";
import postRoutes from "./src/routes/postRoutes.js";

const app = express();
app.use(express.json());

postRoutes(app); 

app.listen(3000, () => {
    console.log("Servidor escutando...");
});


/*function buscarPostPorID(id) {
    const post = posts.find(p => p.id === Number(id));
    return post;
}*/