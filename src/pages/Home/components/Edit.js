import { useState, useRef } from "react";
import { v4 } from "uuid";
import { setAdd } from "../../../redux/reducers/todo";
import { useDispatch } from "react-redux";


const Edit = () => {
  // 使用state func
  const dispatch = useDispatch();
  const contentRef = useRef()
  const handleAdd = () => {
    const contentValue = contentRef.current.value
    if (contentValue === '') return
    dispatch(setAdd({
      id: v4(),
      content: contentValue,
      isDone: false
    }))
    contentRef.current.value = ''
  }

  return (
    <div>
      <div className="add-task">
        <input type="text" autoComplete="off" placeholder="輸入待辦事項" ref={contentRef} className="task-input" />
        <input type="submit" value="" className="submit-task" title="Add Task" onClick={handleAdd} />
      </div>
    </div>
  );
};

export default Edit;
