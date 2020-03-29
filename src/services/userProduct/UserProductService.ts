import axios from 'axios'
import { Item } from "../../domain/Product";

export interface AddUserProduct {
    barcode: string,
    items: Array<Item>
}

const BASE_URL = ""
class UserProductService {

    add(product: AddUserProduct): Promise<any> {
        const requestBody = {
            ...product,
            items: product.items.map(({ id, ...item }) => ({ ...item, expiration: item.expiration.toISOString().split('T')[0] }))
        }
        console.log('Go to add this user Product', requestBody)
        return axios.post(`${BASE_URL}/user/products`, requestBody)
    }
}


export default new UserProductService()