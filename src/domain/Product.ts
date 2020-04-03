export class Product {
    scanData: ScanData
    productData: ProductData

    get barcode() {
        return this.scanData.data
    }

    get name() {
        return this.productData.name
    }

    static fromJson(json: any) {
        return Object.assign(new Product(), json)
    }
}

export class UserProduct extends Product {
    item: Item

    get expiration(): string {
        const { expiration } = this.item
        const date = new Date(expiration)
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }

    static fromJson(json: any) {
        return Object.assign(new UserProduct(), json)
    }
}

export type Item = {
    id: string,
    expiration: Date
    quantity: string
}

export type ProductData = {
    name: string
}

export type ScanData = {
    data: string
}