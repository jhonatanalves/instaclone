import conectarAoBanco from "../config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export const getTodosPosts = async () => {
    const db = conexao.db("basedeposts");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export const criarPost = async (novoPost) => {
    const db = conexao.db("basedeposts");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
}
