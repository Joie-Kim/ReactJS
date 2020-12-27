import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할 일 목록 1',
      checked: true,
    },
    {
      id: 2,
      text: '할 일 목록 2',
      checked: true,
    },
    {
      id: 3,
      text: '할 일 목록 3',
      checked: false,
    },
  ]);

  // 고유값으로 사용될 id
  // ref 사용하여 변수 담기
  // useRef를 사용하는 이유: id 값을 렌더링 되는 정보가 아니기 때문 (이 값이 바뀐다고 해서 컴포넌트가 리렌더링 될 필요가 없음. 따라서 useState 사용 안 함)
  const nextId = useRef(4);

  // useCallback으로 감싸준 이유: 컴포넌트의 성능을 아낄 수 있도록 하기 위해서
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
