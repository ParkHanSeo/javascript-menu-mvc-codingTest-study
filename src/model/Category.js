import { Console } from "@woowacourse/mission-utils";
import { RANDOM_NUM, FOOD_CATEGORY } from '../contants/Contants.js'

class Category {

    getRandomCategory() {
        return Console.pickNumberInRange(RANDOM_NUM.START_NUM, RANDOM_NUM.END_NUM);
    }

}

export default Category