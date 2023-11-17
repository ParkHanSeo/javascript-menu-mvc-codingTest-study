import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../contants/Message.js";

const InputView = {

    async userinputCoachName() {
        const COACH_NAME = await Console.readLineAsync(MESSAGE.INPUT_COACH_NAME_MSG);
        return COACH_NAME.split(',');
    },

    async userinputPassMenu(coachName) {
        let passMenu = [];
        for (const name of coachName){
            passMenu.push(await Console.readLineAsync(MESSAGE.COACH_PASS_MENU_MSG(name)));
        }
        return passMenu;
    }

}

export default InputView