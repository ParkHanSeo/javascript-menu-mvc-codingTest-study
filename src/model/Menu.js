import { Random } from "@woowacourse/mission-utils";
import { WEEKDAY, CATEGORY_RANDOM_NUM } from '../contants/Contants.js'

class Menu {

    #passMenu

    constructor(passMenu) {
        this.#passMenu = passMenu;
        this.#validation();
    }  

    #validation() {
        
    }

    getMenu() {
        const MENU_CATEGORY = this.#getRandomCategory();
        const PASS_MENU = this.#passMenu;
        return { MENU_CATEGORY, PASS_MENU }
    }

    #getRandomCategory(){
        const CATEGORY = {};
        for(let i = 0; i < CATEGORY_RANDOM_NUM.FINISH_NUM; i++){
            const CATEGORY_NUM = Random.pickNumberInRange(CATEGORY_RANDOM_NUM.START_NUM, CATEGORY_RANDOM_NUM.FINISH_NUM);
            CATEGORY[Object.keys(WEEKDAY)[i]] = CATEGORY_NUM;
        }
        return CATEGORY;
    }

}

export default Menu