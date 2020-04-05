import axios from 'axios'
import { successfulResponseHandler } from '../utils'

const BASE_URL = ""

interface LoginBody {
    username: string,
    password: string
}

class UserService {

    login(body: LoginBody): Promise<any> {
        return axios.post(`${BASE_URL}/user/login`, body).then(successfulResponseHandler)
    }

}


export default new UserService()