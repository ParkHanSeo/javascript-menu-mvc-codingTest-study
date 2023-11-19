import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from '../contants/Message.js'

const OuputView = {
    outputLunchRecommendStart() {
        Console.print(OUTPUT_MESSAGE.LUNCH_MENU_RECOMMEND);
    },
    outputLunchRecommendResult(recommend) {
        Console.print(OUTPUT_MESSAGE.MENU_RECOMMEND_RESULT);
    },

    outputMenuWeekDay(){
        Console.print(OUTPUT_MESSAGE.MENU_WEEKDAY);
    },

    outputCategory(recommend){
        Console.print(recommend.outputCategory);
    },

    outputMenu(recommend){
        recommend.outputMenu.forEach((data) => {
            Console.print(data);
        });
    },

    outputRecommendFinish(){
        Console.print(OUTPUT_MESSAGE.MENU_RECOMMEND_FINISH);
    }
}

export default OuputView