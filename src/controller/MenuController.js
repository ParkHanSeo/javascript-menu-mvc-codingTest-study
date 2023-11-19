import { Console } from "@woowacourse/mission-utils";
import Coach from '../model/Coach.js'
import Menu from '../model/Menu.js'
import Category from '../model/Category.js'
import Recommend from '../model/Recommend.js'
import InputView from '../view/InputView.js'
import OutputView from '../view/OutputView.js'
import OuputView from "../view/OutputView.js";


class MenuController {
    
    #coach;
    #menu;
    #recommend;

    constructor() {
        this.#recommend = new Recommend();
    }

    async menuProcess() {
        OuputView.outputLunchRecommendStart();
        await this.#inputCoachName();
        await this.#inputCannotEatMenu();
        const recommendMenu = this.#recommendMenu();
        this.#outputLunchRecommendResult(recommendMenu);
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
        return data;
    }

    #outputLunchRecommendResult(recommend) {
        OutputView.outputLunchRecommendResult(recommend);
        OutputView.outputMenuWeekDay();
        OutputView.outputCategory(recommend);
        OutputView.outputMenu(recommend);
        OutputView.outputRecommendFinish();
    }
    
}

export default MenuController