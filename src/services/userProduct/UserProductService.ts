import axios from 'axios'
import { Item, UserProduct, UserProductFlat } from "../../domain/Product";
import DateProvider from '../../domain/DateProvider';
import { successfulResponseHandler } from '../utils'

export interface AddUserProduct {
    barcode: string,
    items: Array<Item>
}

const BASE_URL = ""
export interface UserProductsFilters {
    sort?: string
    barcode?: string
    expiration_from?: string
    expiration_to?: string
}
class UserProductService {

    markAsConsumed(products: UserProductFlat[]): Promise<any> {
        console.log("Go to mark as consumed ", products)
        return axios.put(`${BASE_URL}/user/products`, { status: 'CONSUMED', products })
    }

    add(product: AddUserProduct): Promise<any> {
        const requestBody = {
            ...product,
            items: product.items.map(({ id, ...item }) => ({ ...item, expiration: DateProvider.toApiFormat(item.expiration) }))
        }
        console.log('Go to add this user Product', requestBody)
        return axios.post(`${BASE_URL}/user/products`, requestBody)
    }

    getAll(params: UserProductsFilters): Promise<UserProduct[]> {
        return axios.get(`${BASE_URL}/user/products`, { params })
            .then(successfulResponseHandler)
            .then(products => products.map(product => UserProduct.fromJson(product)))
    }

    getProductToExpire(): Promise<UserProduct[]> {
        const expirationTo = DateProvider.toApiFormat(DateProvider.addMonths(DateProvider.today(), 1))
        return this.getAll(
            {
                expiration_from: DateProvider.todayApiFormat(),
                expiration_to: expirationTo
            }
        )
    }

    getExpiredProducts(): Promise<UserProduct[]> {
        return this.getAll(
            {
                expiration_to: DateProvider.todayApiFormat()
            }
        )
    }
}


export default new UserProductService()