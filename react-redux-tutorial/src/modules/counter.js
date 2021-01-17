import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
// 문자열 내용: 모듈 이름/액션 이름
// 문자열 안에 모듈 이름을 넣어서 액션의 이름이 충돌되지 않도록 한다.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 정의
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태 정의
const initialState = {
  number: 0,
};

// 리듀서 함수 정의
/*
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}
*/

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;

// export: 여러 개를 내보낼 수 있음
// export default: 단 한 개만 내보낼 수 있음
