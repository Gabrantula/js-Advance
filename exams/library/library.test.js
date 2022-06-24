let { expect }=require('chai')
let { library }=require('./librarY')

describe('Test library',()=>{
    
    describe('calc price',()=>{

        it('invalid param',()=>{
            expect(()=>library.calcPriceOfBook('a','2')).to.throw(`Invalid input`)
            expect(()=>library.calcPriceOfBook(2,2)).to.throw(`Invalid input`)
            expect(()=>library.calcPriceOfBook('a',2.5)).to.throw(`Invalid input`)
            expect(()=>library.calcPriceOfBook(2,2.5)).to.throw(`Invalid input`)
        })
        it('year is before 1980',()=>{
            expect(library.calcPriceOfBook('q',1980)).to.equal('Price of q is 10.00')
            expect(library.calcPriceOfBook('q',1970)).to.equal('Price of q is 10.00')
        })
        it('price',()=>{
            expect(library.calcPriceOfBook('q',1999)).to.equal('Price of q is 20.00')
        })
    })
    describe('find book',()=>{

        it('length of array is zero',()=>{
            expect(()=>library.findBook([],'a')).to.throw('No books currently available')
        })
        it('not found',()=>{
            expect(library.findBook(['a','b'],'g')).to.equal('The book you are looking for is not here!')
        })
        it('founded',()=>{
            expect(library.findBook(['a','d'],'d')).to.equal('We found the book you want.')
        })
    })
    describe('arrange',()=>{

        it('count is not integer or is negative',()=>{
            expect(()=>library.arrangeTheBooks('1')).to.throw('Invalid input')
            expect(()=>library.arrangeTheBooks(2.5)).to.throw('Invalid input')
            expect(()=>library.arrangeTheBooks(-1)).to.throw('Invalid input')
        })
        it('need more space',()=>{
            expect(library.arrangeTheBooks(100)).to.equal('Insufficient space, more shelves need to be purchased.')
        })
        it('enough space ',()=>{
            expect(library.arrangeTheBooks(3)).to.equal('Great job, the books are arranged.')
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.')
        })
    })
})
