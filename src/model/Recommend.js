import { Console, Random } from "@woowacourse/mission-utils";
import { RANDOM_NUM, FOOD_MENU, FOOD_CATEGORY, WEEK_DAY } from '../contants/Contants.js'

class Recommend {

    recommendProcess(menu) {
        const coachMenu = this.#getCoachMenu(menu);
        const outputCategory = this.#getOutputCategory(coachMenu.category);
        const outputMenu = this.#getOutputMenu(menu, coachMenu.coachMenu);
        return { outputCategory, outputMenu }
    }

    #getCoachMenu(menu) {
        const coachMenu = [];
        const category = [];
        for(let i = 0; i < WEEK_DAY.length; i++){
            const weekDayMenu = this.#getWeekDayMenuResult(menu);
            coachMenu.push(weekDayMenu.coachListMenu);
            category.push(FOOD_CATEGORY[weekDayMenu.categoryNum]);
            if(category.filter((data) => data === FOOD_CATEGORY[weekDayMenu.categoryNum]).length == 3 ||
               coachMenu.filter((data) => data === weekDayMenu.coachListMenu).length == 2){
                category.pop();
                coachMenu.pop();
                i = i-1;
            }
        }
        return { coachMenu, category }
    }

    #getOutputMenu(menu, coachMenu) {
        const outputMenu = [];
        Object.keys(menu).forEach((data, idx) => {
            outputMenu.push(coachMenu.map(item => item[idx]).join(' | '));
            outputMenu[idx] = `[ ${data} | ${outputMenu[idx]} ]`
        });
        return outputMenu;
    }

    #getOutputCategory(category) {
        let outputCategory = [];
        outputCategory.push(category.map(item => item).join(' | '));
        outputCategory = `[ 카테고리 | ${outputCategory} ]`;
        return outputCategory;
    }

    #getWeekDayMenuResult(menu) {
        const coachListMenu = [];
        const categoryNum = this.#getRandomCategory();
        Object.values(menu).forEach((data) => {
            const foodMenu = this.#getRandomFoodMenu(data, categoryNum); 
            coachListMenu.push(foodMenu);
        });
        return { coachListMenu, categoryNum };
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