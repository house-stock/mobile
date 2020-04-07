import { AxiosResponse } from 'axios'
import { Product } from "../../domain/Product";
import BaseService from '../BaseService';


class ProductService extends BaseService {

    getByName(name: any): Promise<Product[]> {
        return this.get('/products', { params: { name } })
    }

    addProduct(product: Product): Promise<any> {
        console.log('Go to add', product)
        return this.post('/products', product)
    }

    getByBarcode(barcode: string): Promise<Product> {
        return this.get(`/products/barcode/${barcode}`, {})
            .then(json => Product.fromJson(json))
            .catch((error: AxiosResponse) => {
                if (error.status === 404) {
                    return null
                }
                console.log("Error getting product by bar code", JSON.stringify(error.response.status))

                throw error
            })
    }
}


export default new ProductService()