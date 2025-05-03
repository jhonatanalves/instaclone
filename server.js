import express from "express";

const posts = [
    { id: 1, descricao: "Neo um gato muito sério", imagem: "https://placecats.com/neo_2/500/500" },
    { id: 2, descricao: "Millie & Neo dois gatos preguiçosos", imagem: "https://placecats.com/millie_neo/500/500" },
    { id: 3, descricao: "Millie um gato manhoso", imagem: "https://placecats.com/millie/500/500" },
];

function buscarPostPorID(id) {
    const post = posts.find(p => p.id === Number(id));
    return post;
}

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
    res.status(200).json(buscarPostPorID(req.params.id));
});