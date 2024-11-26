import {User} from "../db.js";

const controlUser = async(req, res) =>{
    const mostrarUser = await User.findOne({where: {email:email}})
    res.send(mostrarUser)
}