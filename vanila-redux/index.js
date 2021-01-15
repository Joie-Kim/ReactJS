import { createStore } from "redux";

// UI를 관리할 때 별도의 라이브러리를 사용하지 않기 때문에 DOM을 직접 수정해 주어야 한다.
// 따라서 수정할 DOM 노드를 가리키는 값을 미리 선언해 준다.
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 이름 정의
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 이름을 사용하여 액션 객체를 만드는 액션 생성 함수
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초기값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수 정의
function reducer(state = initialState, action) {
  // action.type에 따라 다른 작업을 처리
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성 유지
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// 스토어 생성
const store = createStore(reducer);

// render 함수 생성
// 상태가 업데이트될 때마다 호출되며, 리액트의 render 함수와는 다르게 이미 html을 사용하여 만들어진 UI의 속성을 상태에 따라 변경한다.
const render = () => {
  const state = store.getState();

  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  counter.innerText = state.counter;
};

render();

// 구독
// 스토어의 상태가 바뀔 때마다 render 함수가 호출되도록 한다.
// 리액트에서는 subscribe 함수를 직접 사용하지 않는다. react-redux 라이브러리가 이 작업을 대신 해 주기 때문이다.
store.subscribe(render);

// 액션 발생시키기
// 파라미터는 액션 객체
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
  console.log("toggle");
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
  console.log("+1");
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
  console.log("-1");
};
