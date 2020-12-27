import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox, //할 일이 완료 되었을 때, 체크된 상태를 보여 주기 위해 사용
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classname'; // CSS 클래스를 조건부로 설정할 때 매우 유용한 라이브러리
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
