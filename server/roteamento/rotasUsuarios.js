import {rotas} from './authRoute'
import {controlUser} from '../controlador/UserControl'

const listaUsuarios = express.Router()
listaUsuarios.get('./controlUser', controlUser)

export {listaUsuarios}