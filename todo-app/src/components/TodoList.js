import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  // react-virtualized의 List 컴포넌트에서 각 TodoItem을 렌더링할 때 사용
  // 이 함수를 List 컴포넌트의 props로 설정해야 한다.
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );
  return (
    <List
      className="TodoList"
      width={512} // 전체 크기
      height={513} // 전체 높이
      rowCount={todos.length} // 항목 개수
      rowHeight={57} // 항목 높이
      rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
      list={todos} // 배열
      style={{ outline: 'none' }} // List에 기본 적용되는 outline 스타일 제거
    />
  );
};

// 리스트에 관련된 컴포넌트를 최적화할 때는 리스트 내부에서 사용하는 컴포넌트(여기서는 TodoListItem) 뿐만 아니라,
// 리스트로 사용되는 컴포넌트 자체도 최적화 해주는 것이 좋다.
// 현재 부모 컴포넌트(App 컴포넌트)에서 todos라는 State가 업데이트 될 때만 리렌더링 되기 때문에 이 작업이 지금은 유효하지 않지만,
// 나중에 State가 추가되어 해당 값들이 업데이트될 때 TodoList가 불필요한 리렌더링을 할 수도 있기 때문에 미리 최적화 했다.
export default React.memo(TodoList);
