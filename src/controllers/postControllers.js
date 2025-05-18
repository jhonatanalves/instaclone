import {getTodosPosts, criarPost} from "../models/postModels.js";
import fs from "fs";

export const listarPosts = async (req, res) => {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}

export const postarPost = async (req, res) => {
    const post = req.body;
    try {
        const postCriado = await criarPost(post);
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}

export const uploadImagem = async (req, res) => {
    const post = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(post);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}