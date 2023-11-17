import { Console, Random } from "@woowacourse/mission-utils";
import { RANDOM_NUM, FOOD_MENU } from '../contants/Contants.js'

class Recommend {

    recommendProcess(menu) {
        const test = []
        for(let i = 1; i <= 5; i++){
            const weekDayMenu = this.#getWeekDayMenuResult(menu);
            test.push(weekDayMenu);
        }
        const testData = [];
        Object.keys(menu).forEach((data, idx) => {
            testData.push(test.map(item => item[idx]).join(' | '))
        });
        console.log(testData);
    }

    #getWeekDayMenuResult(menu) {
        const coachListMenu = [];
        const categoryNum = this.#getRandomCategory();
        Object.values(menu).forEach((data) => {
            const foodMenu = this.#getRandomFoodMenu(data, categoryNum); 
            coachListMenu.push(foodMenu);
        });
        return coachListMenu;
    }

    #getRandomCategory() {
        return Random.pickNumberInRange(RANDOM_NUM.START_NUM, RANDOM_NUM.END_NUM);
    }

    #getRandomFoodMenu(passMenu, categoryNum) {
        const menu = FOOD_MENU[categoryNum];
        const menuRamdomNum = Random.shuffle(Array.from({ length: 9 }, (_, index) => index + 1));
        const checkMenu = menu.split(', ')[Number(menuRamdomNum[0])-1]
        if(passMenu.filter((data) => data === checkMenu).length == 1){
            return this.#getRandomFoodMenu(passMenu, categoryNum);
        }
        return checkMenu;
    }
    
}

export default Recommend