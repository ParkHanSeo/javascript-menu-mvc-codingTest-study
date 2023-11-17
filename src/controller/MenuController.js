import { Console } from "@woowacourse/mission-utils";
import Coach from '../model/Coach.js'
import Menu from '../model/Menu.js'
import Category from '../model/Category.js'
import Recommend from '../model/Recommend.js'
import InputView from '../view/InputView.js'
// import OutputView from '../view/OutputView.js'


class MenuController {
    
    #coach;
    #menu;
    #recommend;

    constructor() {
        this.#recommend = new Recommend();
    }

    async menuProcess() {
        await this.#inputCoachName();
        await this.#inputCannotEatMenu();
        this.#recommendMenu();
    }

    async #inputCoachName() {
        try {   
            const COACH_NAME = await InputView.userInputCoachName();
            this.#coach = new Coach(COACH_NAME).getCoachName();
        } catch(error) {
            Console.print(error.message);
            return await this.#inputCoachName();
        }
    }

    async #inputCannotEatMenu() {
        try {
            const CANNOT_MENU = await InputView.userInputCannotMenu(this.#coach);
            this.#menu = new Menu(this.#coach, CANNOT_MENU).getMenu();
        } catch(error) {
            Console.print(error.message);
            return await this.#inputCannotEatMenu();
        }
    }

    #recommendMenu() {
        const data = this.#recommend.recommendProcess(this.#menu);
    }
    
}

export default MenuController