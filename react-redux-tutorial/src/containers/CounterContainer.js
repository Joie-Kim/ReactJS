import React, { useCallback } from 'react';
//import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

/*
const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// state: 현재 스토어가 지니고 있는 상태
const mapStateToProps = (state) => ({
  number: state.counter.number,
});
// dispatch: 스토어의 내장 함수
const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
*/

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number); // mapStateToProps
  const dispatch = useDispatch(); // mapDispatchToProps
  // 성능 최적화
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
