import axios, { AxiosError } from 'axios'
import { Product } from "../../domain/Product";

const BASE_URL = ""
class ProductService {

    addProduct(product: Product) : Promise<any> {
        console.log('Go to add', product)
        return axios.post(`${BASE_URL}/products`, product)
    }

    getByBarcode(barcode: string): Promise<Product> {
        return axios.get(`${BASE_URL}/products/barcode/${barcode}`)
            .then(response => response.data)
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