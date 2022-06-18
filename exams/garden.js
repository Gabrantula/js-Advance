class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable),
            this.plants = [],
            this.storage = []
    }
    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.')
        }
        else {
            let plant = {
                plantName,
                spaceRequired,
                ripe: false,
                quantity: 0
            }
            this.plants.push(plant)
            this.spaceAvailable -= spaceRequired
            return `The ${plantName} has been successfully planted in the garden.`
        }
    }
    ripenPlant(plantName, quantity) {

        let foundPlant = this.plants.find(x => x.plantName === plantName)
        if (!foundPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        else if (foundPlant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`)
        }
        else if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        foundPlant.ripe = true
        foundPlant.quantity += Number(quantity)

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        }
        else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }
    harvestPlant(plantName) {
        let found = this.plants.find(x => x.plantName === plantName)

        if (!found) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        else if (found.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        //let newPlant={
        //    plantName: found.plantName,
        //   quantity: found.quantity
        //}
        // this.storage.push(newPlant)
        this.storage.push(`${found.plantName} (${found.quantity})`)
        this.spaceAvailable += found.spaceRequired
        this.plants = this.plants.filter(x => x.plantName !== plantName)

        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let result = []
        let space = `The garden has ${this.spaceAvailable} free space left.`
        result.push(space)
        let res = []

        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))
            .forEach(x => res.push(x.plantName))

        let line2 = `Plants in the garden: `
        result.push(`${line2}${res.join(', ')}`)

        if (this.storage.length === 0) {
            result.push(`Plants in storage: The storage is empty.`)
        } 
        else {
           // let stor=''
            //result.push(`Plants in storage: `)
            //this.storage.forEach(x => stor+=(`${x.plantName} (${x.quantity})`))
            //result.push(`Plants in storage: `+stor)
            result.push(`Plants in storage: ${this.storage.join(', ')}`)
        }
        return result.join('\n')
        //console.log(result.join('\n'));
    }

}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
