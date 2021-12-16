export default class FormatDate {
    create(): string{
        const currentDate = new Date()

        let date = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
    
        return date
    }
}