export interface Product {
    scanData: any
    productData: ProductData
}

export interface UserProduct extends Product {
    item: Item
}

export type Item = {
    id: string,
    expiration: Date
    quantity: string
}

export type ProductData = {
    name: string
}
