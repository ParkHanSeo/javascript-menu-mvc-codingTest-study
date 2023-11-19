export const OUTPUT_MESSAGE = {
    LUNCH_MENU_RECOMMEND: '점심 메뉴 추천을 시작합니다.',
    MENU_RECOMMEND_RESULT: '메뉴 추천 결과입니다.',
    MENU_RECOMMEND_FINISH: '추천을 완료했습니다.',
    MENU_WEEKDAY: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]'
}

export const INPUT_MESSAGE = {
    INPUT_COACH_NAME: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
    INPUT_CANNOT_EAT_MENU: (name) => {
        return `${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`;
    }
}

export const ERROR_MESSAGE = {
    COACH_NAME_ERROR: '[ERROR] 잘못된 코치이름 입력값'
}

