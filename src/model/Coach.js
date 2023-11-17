import Validation from '../util/Validation.js'

class Coach {

    #coachName;

    constructor(coachName) {
        this.#coachName = coachName;
        this.#validation();
    }

    #validation() {
        Validation.inputCoachNameValidate(this.#coachName);
    }

    getCoachName() {
        return this.#coachName.split(',');
    }

}

export default Coach