# :school: 우아한테크코스 대비 연습 - 점심 메뉴 추천

## :clipboard: 구현할 기능 목록

### 1. 사용자 입력
- [x] 코치 이름 입력 (숫자)
- [x] 못 먹는 메뉴 입력

### 2. 이름
- [x] 

### 3. 메뉴
- [x] 각 코치들이 못 먹는 메뉴를 저장하는 기능

### 4. 카테고리
- [x] 요일별로 랜덤함수를 돌려 카테고리를 정하는 기능

### 5. 추천
- [x] 요일별 카테고리의 메뉴를 저장하는 기능

### 5. 예외처리
#### 12월 식당 예상 방문 날짜 입력
- [x] 사용자의 입력값이 1 이상 31 이하일 경우 ERROR 기능
- [x] 사용자의 입력값이 공백일 경우 ERROR 기능
- [x] 사용자의 입력값이 0일 경우 ERROR 기능
- [x] 사용자의 입력값이 숫자가 아닐 경우 ERROR 기능

#### 메뉴와 개수 입력
- [x] 사용자의 입력값이 메뉴판에 없는 메뉴일 경우 ERROR 기능
- [x] 사용자의 입력값이 중복된 메뉴일 경우 ERROR 기능
- [x] 사용자의 입력값이 공백일 경우 ERROR 기능
- [x] 사용자의 입력값이 음료만 주문일 경우 ERROR 기능
- [x] 사용자의 입력값이 개수가 20개가 넘을 경우 ERROR 기능

## :file_folder: 패키지 구조 및 파일명
```
- src
  - constants
  - - constants.js
  - - message.js
  - controller
  - - ChristmasController.js
  - model
  - - Discount.js
  - - Event.js
  - - Order.js
  - - VisitDate.js
  - util
  - - validation.js
  - App.js
  - index.js
  - InputView.js
  - OutputView.js
```
### Constants
- constants.js
- == 크리스마스 프로모션의 메뉴, 가격 등 객체를 관리하는 파일
- message.js
- == output에 출력되는 객체를 관리하는
### Controller
- ChristmasController.js
- == 크리스마스 프로모션의 전반적인 로직을 관리하는 파일
### Model
- Discount.js
- == 크리스마스 디데이할인, 평일&주말 할인 등 할인관련의 생성자 및 함수를 관리하는 파일
- Event.js
- == 증정품, 뱃지 등 이벤트관련의 생성자 및 함수를 관리하는 파일
- Order.js
- == 사용자가 입력한 주문 메뉴&수량에 관한 생성자, 총금액 및 유효성체크를 관리하는 파일
### Util
- VisitDate.js
- == 사용자가 입력한 방문일자에 관한 생성자 및 유효성체크를 관리하는 파일
### View
- InputView.js
- == 사용자의 입력을 위한 함수를 관리하는 파일
- OutputView.js
- == 사용자가 보이는 출력값을 위한 함수를 관리하는 파일

## :computer: 커밋 메세지 컨벤션
```
- Allowed <type>
- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, …)
- refactor
- test (when adding missing tests)
- chore (maintain)
```

## 테스트 결과
<div style="display: flex">
    <img src="https://github.com/ParkHanSeo/javascript-christmas-6-ParkJeeHoon/blob/main/docs/christmas_result.png" style="width: 50%;">
    <img src="https://github.com/ParkHanSeo/javascript-christmas-6-ParkJeeHoon/blob/main/docs/christmas_jest.png" style="width: 50%;">
</div>


## :high_brightness: 기능 구조
- 고객들이 식당에 방문할 날짜와 메뉴를 미리 선택하면 이벤트 플래너가 주문 메뉴, 할인 전 총주문 금액, 증정 메뉴, 혜택 내역, 총혜택 금액, 할인 후 예상 결제 금액, 12월 이벤트 배지 내용을 보여주기를 기대합니다.
- 12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)
  - 방문할 날짜는 1 이상 31 이하의 숫자로만 입력받아 주세요.
  - 1 이상 31 이하의 숫자가 아닌 경우, "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요."라는 에러 메시지를 보여 주세요.
  - 모든 에러 메시지는 "[ERROR]"로 시작하도록 작성해 주세요.
- 주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)
  - 고객이 메뉴판에 없는 메뉴를 입력하는 경우, "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지를 보여 주세요.
  - 메뉴의 개수는 1 이상의 숫자만 입력되도록 해주세요. 이외의 입력값은 "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지를 보여 주세요.
  - 메뉴 형식이 예시와 다른 경우, "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지를 보여 주세요.
  - 중복 메뉴를 입력한 경우(e.g. 시저샐러드-1,시저샐러드-1), "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지를 보여 주세요.
  - 모든 에러 메시지는 "[ERROR]"로 시작하도록 작성해 주세요.
- 주문 메뉴의 출력 순서는 자유롭게 출력해 주세요.
- 총혜택 금액에 따라 이벤트 배지의 이름을 다르게 보여 주세요.
- 총혜택 금액 = 할인 금액의 합계 + 증정 메뉴의 가격
- 할인 후 예상 결제 금액 = 할인 전 총주문 금액 - 할인 금액
- 증정 메뉴
  - 증정 이벤트에 해당하지 않는 경우, 증정 메뉴 "없음"으로 보여 주세요.
- 혜택 내역
  - 고객에게 적용된 이벤트 내역만 보여 주세요.
  - 적용된 이벤트가 하나도 없다면 혜택 내역 "없음"으로 보여 주세요.
  - 혜택 내역에 여러 개의 이벤트가 적용된 경우, 출력 순서는 자유롭게 출력해주세요.
- 이벤트 배지
  - 이벤트 배지가 부여되지 않는 경우, "없음"으로 보여 주세요.
- 적용된 이벤트가 하나도 없는 경우는 아래 예시를 참고해 주세요.

## :key: 추가된 요구 사항
- 아래에 제공되는 `InputView`, `OutputView` 객체를 활용해 구현한다.
  - 입력과 출력을 담당하는 객체를 별도로 구현한다.
  - `InputView`, `OutputView`의 파일 경로는 변경할 수 있다.
  - `InputView`, `OutputView`의 메서드의 이름과 인자는 필요에 따라 추가하거나 변경할 수 있다.
  - 값 출력을 위해 필요한 메서드를 추가할 수 있다.
  ```javascript
  export default InputView = {
    async readDate() {
      const input = await Console.readLineAsync("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)");
      // ...
    },
    // ...
  };
  ```
  ```javascript
  export default OutputView = {
    printMenu() {
      Console.print("<주문 메뉴>");
      // ...
    },
    // ...
  };
  ```