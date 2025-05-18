import multer from "multer"; // Importa o Multer para lidar com uploads de arquivos
import {listarPosts, postarPost, uploadImagem} from "../controllers/postControllers.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Especifica o diretório para armazenar as imagens enviadas
    cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo por simplicidade
    cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
  }
});

const upload = multer({ dest: './uploads', storage });

const postRoutes = (app) => {
    app.get("/posts", listarPosts);
    app.post("/posts", postarPost); 
    app.post("/upload", upload.single("imagem"), uploadImagem);
}

export default postRoutes;


/*app.get("/posts/:id", (req, res) => {
    res.status(200).json(buscarPostPorID(req.params.id));
});*/