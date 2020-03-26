// import axios from 'axios'
import { ProductData } from "../../domain/Product";

type ProductDataResponse = {
    scanData: any
    product: ProductData
}
class ProductService {

    addProduct(product: ProductData) {
        //TODO: do the API call
        console.log('Go to add', product)
        return Promise.resolve({})
    }

    getByBarcode(barcode: string): Promise<ProductDataResponse> {
        const url = `/api/products/barcode/${barcode}` // TODO: complete with the env variable
        return fetch(url).then(response => response.json())
    }
}


export default new ProductService()