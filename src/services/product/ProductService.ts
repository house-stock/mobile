import axios, { AxiosError } from 'axios'
import { Product } from "../../domain/Product";
import { successfulResponseHandler } from '../utils'

const BASE_URL = ""

class ProductService {

    getByName(name: any) : Promise<Product[]> {
        return axios.get(`${BASE_URL}/products`, { params: { name } }).then(successfulResponseHandler)
    }

    addProduct(product: Product): Promise<any> {
        console.log('Go to add', product)
        return axios.post(`${BASE_URL}/products`, product)
    }

    getByBarcode(barcode: string): Promise<Product> {
        return axios.get(`${BASE_URL}/products/barcode/${barcode}`)
            .then(successfulResponseHandler)
            .catch((error: AxiosError) => {
                if (error.response.status === 404) {
                    return null
                }
                console.log("Error getting product by bar code", JSON.stringify(error.response.status))

                throw error
            })
    }
}


export default new ProductService()