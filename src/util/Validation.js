import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from '../contants/Message.js'

const Validation = {

    inputCoachNameValidate(coachName) {
        const COACH_NAME = coachName.split(',');
        if(COACH_NAME.length < 2 || COACH_NAME.length > 5)
            throw new Error(`${ERROR_MESSAGE.COACH_NAME_ERROR}`);
        COACH_NAME.forEach((name) => {
            if(name.length < 2 || name.length > 4)
                throw new Error(`${ERROR_MESSAGE.COACH_NAME_ERROR}`);
        });
    },

    inputCannotMenuValidate(cannotMenu) {
        
    }

}

export default Validation