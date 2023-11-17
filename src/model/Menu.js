import Validation from '../util/Validation.js'

class Menu {

    #coachName
    #cannotMenu;

    constructor(coachName, cannotMenu) {
        this.#coachName = coachName;
        this.#cannotMenu = cannotMenu;
        this.#validation();
    }

    #validation() {
        Validation.inputCannotMenuValidate(this.#cannotMenu);
    }

    getMenu() {
        const CANNOT_MENU = {};
        this.#coachName.forEach((name, idx) => {
            CANNOT_MENU[name] = this.#cannotMenu[idx].split(',');
        })
        return CANNOT_MENU;
    }

}

export default Menu