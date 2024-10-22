import Express from "express";
import { criarTabelas, User  } from "./db.js";
import bcryptjs from "bcryptjs";

const app = Express()
app.use(Express.json())
//criarTabelas()

 /*   const { nome, sobrenome, email, senha, dataNascimento} = req.body
    if (nome != '' || nome != null){
        res.send('o campo nome devem ser preenchidos')
    } else if (sobrenome != '' || sobrenome !=null) {
        res.send('o campo sobrenome devem ser preenchidos')*/
        app.post('/registro', async (req, res) => {
            const { nome, sobrenome, email, senha, dataNascimento} = req.body
    if (!nome || !sobrenome || !email || !senha || !dataNascimento){
        res.send('voce deve preencher todos os campos')
        return
    }
    const userExiste = await User.findOne({where: {email:email}})
    if (userExiste){
        res.send('usuario ja existe')
        return
    }
    const senhaCriptografada = bcryptjs.hashSync(senha, 10)

    const teste = await User.create({nome, sobrenome, email, senha: senhaCriptografada, dataNascimento })

    //verificar se o usuario existe no banco de dados
    //encriptar a senha do usuario
    //salvar o usuario no banco de dados
    res.send('ok usuario criado')
})

app.post('/login', async (req, res) => {
    const {email, senha} = req.body
    if(!email || !senha){
        res.send('voce deve preencher todos os campos')
        return
    }
    const userExiste = await User.findOne({where: {email:email}})
    if (!userExiste){
        res.send('Este usuario nao existe')
        return
    }
  const senhaValida = bcryptjs.compareSync(senha, userExiste.senha)
  if (!senhaValida){
    res.send('senha invalida')
    return
  }

    //verificar se o usuario existe no banco de dados
    //comparar a senha do usuario com a senha salva no banco
    //criar um token de autenticação para este usuario
    //retornar a mensagem com o token
    res.send('ok usuario logado')
})
app.listen(8000)