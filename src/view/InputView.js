import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from '../contants/Message.js'

const InputView = {

    async userInputCoachName() {
        return await Console.readLineAsync(INPUT_MESSAGE.INPUT_COACH_NAME);
    },

    async userInputCannotMenu(coachName) {
        const COACH_CANNOT_MENU = [];
        for(const name of coachName){
            const CANNOT_MENU = await Console.readLineAsync(INPUT_MESSAGE.INPUT_CANNOT_EAT_MENU(name));
            COACH_CANNOT_MENU.push(CANNOT_MENU);
        }
        return COACH_CANNOT_MENU;
    }

}

export default InputView