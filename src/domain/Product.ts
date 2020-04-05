export class Product {
    scanData: ScanData
    productData: ProductData = new ProductData()

    get barcode() {
        return this.scanData.data
    }

    get name() {
        return this.productData.name
    }

    static fromJson(json: any) {
        return Object.assign(new Product(), json)
    }

    clone() {
        return Object.assign(new Product(), { ...this })
    }
}

export class UserProduct extends Product {
    item: Item

    get expiration(): string {
        const { expiration } = this.item
        const date = new Date(expiration)
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    get quantity(): number {
        return this.item.quantity
    }

    set quantity(newQuantity: number) {
        this.item.quantity = newQuantity
    }

    static fromJson(json: any) {
        const object: UserProduct = Object.assign(new UserProduct(), json)
        object.item.expiration = new Date(object.item.expiration)
        return object
    }

    clone() {
        return Object.assign(new UserProduct(), { ...this })
    }
}

export interface UserProductFlat {
    id?: number
    barcode: string
    expiration: string
    quantity: number
}

export type Item = {
    id: number,
    expiration: Date
    quantity: number
}

export class ProductData {
    name: string = ''
}

export type ScanData = {
    data: string
}