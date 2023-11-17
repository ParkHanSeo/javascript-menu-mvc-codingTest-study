import { Random } from "@woowacourse/mission-utils";
import { MENU } from '../contants/Contants.js'

class Recommend {

    getRecommendMenu(coachName, menu) {
        const RECOMMEND_MENU = [];
        coachName.forEach((name, idx) => {
            const menu = [];
            for(let i = 0; i < 5; i++){
                const shuffleNum = Random.shuffle([1,2,3,4,5,6,7,8,9]);
                MENU[menu]
            }
        });
    }
    // Random.shuffle(array)
    #menuShuffle(menu) {
        // const FOOD = ;
    }

}

export default Recommend