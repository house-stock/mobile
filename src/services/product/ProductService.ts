import { ProductData } from "../../domain/Product";

class ProductService {

    addProduct(product: ProductData) {
        //TODO: do the API call
        console.log('Go to add', product)
        return Promise.resolve({})
    }
}

export default new ProductService()