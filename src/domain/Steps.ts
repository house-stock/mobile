

type Step = {
    value: string
    Component: any // TODO: find a way to type all components
    nextStep: Step
}


// class AddProductSteps {
//     public static PRODUCTS_DATA: Step = { value: 'PRODUCTS_DATA', Component: FillProductData, nextStep: AddProductSteps.SCAN }
//     public static ITEMS_QUANTITY: Step = { value: 'ITEMS_QUANTITY', Component: ItemsQuantity, nextStep: AddProductSteps.PRODUCTS_DATA }
//     public static FILL_SCAN_DATA: Step = { value: 'FILL_SCAN_DATA', Component: FillScanData, nextStep: AddProductSteps.ITEMS_QUANTITY }
//     public static SCAN: Step = { value: 'SCAN', Component: BarCodeScan, nextStep: AddProductSteps.FILL_SCAN_DATA }
// }