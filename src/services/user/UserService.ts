import axios from 'axios'
import { successfulResponseHandler } from '../utils'
import { User } from '../../domain/User'
import BaseService from '../BaseService'
import { BASE_URL } from '../config'

interface LoginBody {
    username: string,
    password: string
}

class UserService extends BaseService {

    getUserProfile(): Promise<User> {
        return this.get('/user', {})
    }

    login(body: LoginBody): Promise<any> {
        return axios.post(`${BASE_URL}/user/login`, body).then(successfulResponseHandler)
    }

}


export default new UserService()