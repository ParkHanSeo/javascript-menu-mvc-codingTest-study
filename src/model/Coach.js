class Coach {

    #name;

    constructor(coachName) {
        this.#name = coachName;
        this.#validation();
    }

    #validation() {
        
    }

    getCoachName() {
        return this.#name;
    }

}

export default Coach