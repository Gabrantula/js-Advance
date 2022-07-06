class SmartHike {

    constructor(username) {
        this.username = username,
            this.goals = {}
        this.listOfHikes = [],
            this.resourses = 100
    }
    addGoal(peak, altitude) {

        if (this.goals.hasOwnProperty(peak) === false) {
            this.goals[peak] = altitude
            return `You have successfully added a new goal - ${peak}`
        }
        else {
            return `${peak} has already been added to your goals`
        }
    }
    hike(peak, time, difficultyLevel) {

        if (this.goals.hasOwnProperty(peak) === false) {
            throw new Error(`${peak} is not in your current goals`)
        }
        else {
            if (this.resourses === 0) {
                throw new Error(`You don't have enough resources to start the hike`)
            }
            else {
                if (this.resourses - (time * 10) < 0) {
                    return `You don't have enough resources to complete the hike`
                }
                else {

                    this.resourses = this.resourses - (time * 10)
                    let hike = {
                        peak,
                        time,
                        difficultyLevel
                    }
                    this.listOfHikes.push(hike)
                    return `You hiked ${peak} peak for ${time} hours and you have ${this.resourses}% resources left`
                }
            }
        }
    }
    rest(time) {

        this.resourses += time * 10
        if (this.resourses >= 100) {
            this.resourses = 100
            return `Your resources are fully recharged. Time for hiking!`
        }
        else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`
        }
    }
    showRecord(criteria) {

        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        }
        else {
            let h = this.listOfHikes.find(x => x.difficultyLevel == criteria)
            if (h) {
                return `${this.username}'s best ${criteria} hike is ${this.peak} peak, for ${this.time} hours`
            }


            else if (criteria === 'all') {
                let result = []
                result.push(`All hiking records:`)
                this.listOfHikes.forEach(x => result.push(`${this.username} hiked ${x.peak} for ${x.time} hours`))
                return result.join('\n')
            }
            else if (!h) {
                return `${this.username} has not done any ${criteria} hiking yet`
            }
        }
    }
    
}
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
