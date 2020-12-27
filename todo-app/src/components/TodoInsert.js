import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  // 컴포넌트가 리렌더링될 때마다 함수를 새로 만드는 것이 아니라, 한 번 함수를 만들고 재사용할 수 있도록 useCallback Hook 사용
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value); // App에서 받은 onInsert 함수에 useState로 관리하고 있는 value 값을 파라미터로 넣어서 호출
      setValue(''); // value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킴
      // 이를 방지하기 위해 이 함수를 호출
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    // onSubmit이 아닌 onClick으로도 처리 가능
    // onSubmit을 사용한 이유는 Enter 키를 사용하기 위해
    // 만약 onClick을 사용 했다면 onKeyPress 이벤트를 통해 따로 로직을 작성 해야 함
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
