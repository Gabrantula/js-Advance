class LibraryCollection {
    
    constructor(capacity) {
        this.capacity = capacity,
            this.books = []
    }
    addBook(bookName, bookAuthor) {
        if (this.capacity <= this.books.length) {

            throw new Error('Not enough space in the collection.')
        }
        else {
            let book = {
                bookName,
                bookAuthor,
                payed: false
            }
            this.books.push(book)

            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    }
    payBook(bookName) {

        let finded = this.books.find(x => x.bookName === bookName)

        if (!finded) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        else if (finded.payed === true) {
            throw new Error(`${bookName} has already been paid.`)
        } 
        else {
            finded.payed = true
            return `${bookName} has been successfully paid.`
        }
    }
    removeBook(bookName) {

        let finded = this.books.find(x => x.bookName === bookName)

        if (!finded) {
            throw new Error(`The book, you're looking for, is not found.`)
        }
        else if (finded.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        else {
            this.books = this.books.filter(x => x.bookName !== bookName)
            return `${bookName} remove from the collection.`
        }
    }
    getStatistics(bookAuthor) {

        if (!bookAuthor) {

            let result = []
            let calc = this.capacity - this.books.length

            result.push(`The book collection has ${calc} empty spots left.`)
            this.books = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
                .forEach(x => {
                    x.payed === false ? result.push(`${x.bookName} == ${x.bookAuthor} - Not Paid.`) : result.push(`${x.bookName} == ${x.bookAuthor} - Has Paid.`)
                })
            return result.join('\n')
        }
        else {
            let founded = this.books.find(x => x.bookAuthor === bookAuthor)
            if (!founded) {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
            else {
                let result = []
                founded.payed === false ? result.push(`${founded.bookName} == ${founded.bookAuthor} - Not Paid.`) : result.push(`${founded.bookName} == ${founded.bookAuthor} - Has Paid.`)
                return result.join('\n')
            }
        }
    }
}
const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));
