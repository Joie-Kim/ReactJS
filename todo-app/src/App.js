import React, { useState, useRef, useCallback, useReducer } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

// 랙(lag)을 경험할 수 있도록 많은 데이터를 랜더링 할 에정
// 거기에 쓰일 데이터 2500개를 자동으로 생성하는 함수
function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

// useReducer 사용해서 onInsert, onRemove, onToggle 함수가 계속 만들어지는 상황 방지
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // useState의 기본값에 createBulkTodos 함수를 넣어줬음
  // useState(createBulkTodos())라고 하면 리렌더링될 때마다 createBulkTodos 함수가 호출되지만,
  // useState(createBulkTodos)처럼 파라미터를 함수 형태로 넣어주면 컴포넌트가 처음 렌더링될 때만 함수가 실행된다.
  //const [todos, setTodos] = useState(createBulkTodos);

  // useReducer 사용
  // 컴포넌트가 맨 처음 렌더링될 때만 createBulkTodos 함수가 호출되도록
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고유값으로 사용될 id
  // ref 사용하여 변수 담기
  // useRef를 사용하는 이유: id 값을 렌더링 되는 정보가 아니기 때문 (이 값이 바뀐다고 해서 컴포넌트가 리렌더링 될 필요가 없음. 따라서 useState 사용 안 함)
  const nextId = useRef(2501);

  // useCallback으로 감싸준 이유: 컴포넌트의 성능을 아낄 수 있도록 하기 위해서
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // setTodos에 새로운 상태 값을 파라미터로 넣는 대신, 상태 업데이트를 어떻게 할지 정의해 주는 업데이트 함수를 넣었다.
      // 이를 함수형 업데이트라고 한다.
      //setTodos((todos) => todos.concat(todo));

      // useReducer 사용
      dispatch({ type: 'INSERT', todo });
      nextId.current += 1;
    },
    [], // 두번째 배열의 값에 todos를 넣지 않아도 된다.
  );

  // todos 배열이 업데이트 되면 onRemove, onToggle 함수가 새롭게 만들어진다.
  // 함수가 게속 만들어지는 상황을 방지하는 방법 2가지
  // (1) useState의 함수형 업데이트 기능을 사용
  // (2) useReducer를 사용
  const onRemove = useCallback((id) => {
    //setTodos((todos) => todos.filter((todo) => todo.id !== id));
    // useReducer 사용
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    /*
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
    */
    // useReducer 사용
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
