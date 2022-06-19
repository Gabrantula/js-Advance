let { expect }=require('chai')
let { flowerShop }=require('./flowersShop')

describe('flowers Shop',()=>{

    describe('calculate',()=>{

     it('invalid input',()=>{
         expect(()=>flowerShop.calcPriceOfFlowers('a','b','c')).to.throw('Invalid input!')
         expect(()=>flowerShop.calcPriceOfFlowers(1,2,'1')).to.throw('Invalid input!')
         expect(()=>flowerShop.calcPriceOfFlowers(1,'a',3)).to.throw('Invalid input!')
     })
     it('rounded',()=>{
         expect(flowerShop.calcPriceOfFlowers('rose',2,3)).to.equal(`You need $6.00 to buy rose!`)
     })
    })
    describe('check for available',()=>{

      it('if they have the flower',()=>{
          expect(flowerShop.checkFlowersAvailable('Rose',['Rose','Lily','Orchid'])).to.deep.equal('The Rose are available!')
      })
      it('the flower are sold',()=>{
          expect(flowerShop.checkFlowersAvailable('jaba',['Rose','Lily','Orchid'])).to.deep.equal('The jaba are sold! You need to purchase more!')
      })
    })
    describe('sell',()=>{

     it('invalid input',()=>{
         expect(()=>flowerShop.sellFlowers([],'1')).to.throw('Invalid input!')
         expect(()=>flowerShop.sellFlowers('[]',1)).to.throw('Invalid input!')
     })
     it('not enough space',()=>{
         expect(flowerShop.sellFlowers(["R","L","O"],2)).to.equal('R / L')
     })
    })
})
