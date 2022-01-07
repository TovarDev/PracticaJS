//export default class partido {

    play(match) {
        const homeGoals = this.generateGoals();
        const awayGoals = this.generateGoals();
    
        return {
            homeTeamName: match.home,
            homeGoals,
            awayTeamName: match.away,
            awayGoals,
        }
    }
    
    generateGoals(){
        return Math.floor(Math.random() * 10);
    }
}