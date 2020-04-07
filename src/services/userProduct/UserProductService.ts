import { Item, UserProduct, UserProductFlat } from "../../domain/Product";
import DateProvider from '../../domain/DateProvider';
import BaseService from '../BaseService';

export interface AddUserProduct {
    barcode: string,
    items: Array<Item>
}

export interface UserProductsFilters {
    sort?: string
    barcode?: string
    expiration_from?: string
    expiration_to?: string
}
class UserProductService extends BaseService {

    markAsConsumed(products: UserProductFlat[]): Promise<any> {
        console.log("Go to mark as consumed ", products)
        return this.put('/user/products', { status: 'CONSUMED', products })
    }

    add(product: AddUserProduct): Promise<any> {
        const requestBody = {
            ...product,
            items: product.items.map(({ id, ...item }) => ({ ...item, expiration: DateProvider.toApiFormat(item.expiration) }))
        }
        console.log('Go to add this user Product', requestBody)
        return this.post('/user/products', requestBody)
    }

    getAll(params: UserProductsFilters = {}): Promise<UserProduct[]> {
        return this.get('/user/products', { params })
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