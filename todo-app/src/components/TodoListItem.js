import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox, //할 일이 완료 되었을 때, 체크된 상태를 보여 주기 위해 사용
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = () => {
  return (
    <div className="TodoListItem">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">할 일</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
