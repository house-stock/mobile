class DateProvider {
    addMonths(date: Date, quantity: number): Date {
        const copy = new Date(date.valueOf())
        copy.setMonth(date.getMonth() + quantity)
        return copy
    }
    today() {
        return new Date()
    }
    todayApiFormat(): string {
        return this.toApiFormat(this.today())
    }
    toApiFormat(date: Date): string {
        return date.toISOString().split('T')[0]
    }
}


export default new DateProvider()