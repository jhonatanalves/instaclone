import listarPosts from "../controllers/postControllers.js";


const postRoutes = (app) => {
    app.get("/posts", listarPosts);
}

export default postRoutes;


/*app.get("/posts/:id", (req, res) => {
    res.status(200).json(buscarPostPorID(req.params.id));
});*/