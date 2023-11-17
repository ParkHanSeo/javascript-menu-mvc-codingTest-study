import { Console, Random } from "@woowacourse/mission-utils";
import Coach from '../model/Coach.js'
import Menu from '../model/Menu.js'
import Recommend from '../model/Recommend.js'
import InputView from '../view/InputView.js'
import OutputView from '../view/OutputView.js'
import { MENU } from '../contants/Contants.js'

class MenuController {

    #coachName;
    #menu;
    #recommend;

    constructor() {
        this.#recommend = new Recommend();
    }

    async menuProcess() {
        console.log(Random.shuffle([1,2,3,4,5,6,7,8,9]));
        // console.log(Random.shuffle(MENU[1].split(', ')));
        // await this.#inputCoachName();
        // await this.#inputPassMenu();
        // this.#resultRecommendMenu();
    }

    async #inputCoachName() {
        try{
            const COACH_NAME = await InputView.userinputCoachName();
            this.#coachName = new Coach(COACH_NAME).getCoachName();
        }catch(error){
            Console.print(error.message);
            return await this.#inputCoachName();
        }
    }

    async #inputPassMenu() {
        try{
            const PASS_MENU = await InputView.userinputPassMenu(this.#coachName);
            this.#menu = new Menu(PASS_MENU).getMenu();           
        }catch(error){
            Console.print(error.message);
            return await this.#inputPassMenu();
        }
    }

    #resultRecommendMenu() {
        this.#recommend.getRecommendMenu(this.#coachName, this.#menu);
    }

}

export default MenuController;