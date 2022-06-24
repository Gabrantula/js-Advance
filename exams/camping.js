class SummerCamp {

    constructor(organizer, location) {

        this.organizer = organizer,
            this.location = location,
            this.priceForTheCamp = {
                "child": 150,
                "student": 300,
                "collegian": 500
            }
        this.listOfParticipants = []
    }
    registerParticipant(name, condition, money) {

        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.')
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`
        }
        if (this.listOfParticipants.some(x => x.name == name)) {
            return `The ${name} is already registered at the camp.`
        }
        else {
            let participant = {
                name,
                condition,
                power: 100,
                wins: 0
            }
            this.listOfParticipants.push(participant)
            return `The ${name} was successfully registered.`
        }
    }

    unregisterParticipant(name) {
        let part = this.listOfParticipants.findIndex(x => x.name === name)
        if (part === -1) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }

        this.listOfParticipants.splice(part, 1)
        return `The ${name} removed successfully.`

    }
    timeToPlay(typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find(x => x.name === participant1)

        if (typeOfGame === 'WaterBalloonFights') {


            let player2 = this.listOfParticipants.find(x => x.name === participant2)
            if (!player1 || !player2) {
                throw new Error('Invalid entered name/s.')
            }
            else {
                if (player1.condition !== player2.condition) {
                    throw new Error('Choose players with equal condition.')
                }
            }
            //if (typeOfGame === 'WaterBalloonFights') {

            if (player1.power > player2.power) {
                player1.wins++
                return `The ${player1.name} is winner in the game ${typeOfGame}.`
            }
            else if (player2.power > player1.power) {
                player2.wins++
                return `The ${player2.name} is winner in the game ${typeOfGame}.`
            }
            else {
                return `There is no winner.`
            }
        }
        else if (typeOfGame === 'Battleship') {

            if (!player1) {
                throw new Error('Invalid entered name/s.')
            }
            else {
                player1.power += 20
                return `The ${player1.name} successfully completed the game ${typeOfGame}.`
            }
        }
    }
    toString() {

        let result = []
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)
        this.listOfParticipants.sort((a, b) => b.wins - a.wins)
            .forEach(x => result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`))
        return result.join('\n')
    }
}
