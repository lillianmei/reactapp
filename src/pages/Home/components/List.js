import { deleteList, changeListStatus } from "../../../redux/reducers/todo";
import { useSelector, useDispatch } from "react-redux";


const List = () => {
  const state = useSelector((state) => state.todo)
  const dispatch = useDispatch();
  console.log(state, 'List')
  const todoData = state.data

  const handleDelete = (id) => {
    console.log('delete')
    dispatch(deleteList(id))
  }

  const handleChange = (id) => {
    console.log(todoData, 'todo')
    dispatch(changeListStatus(id))
  }

  return (
    <ul className="task-list mt-4">
      {todoData?.map((item) => {
        const { id, content, isDone } = item
        return (
          <li className="task-list-item">
            <label className="task-list-item-label">
              <input type="checkbox" value={content} checked={isDone} onChange={() => handleChange(id)} />
              <span>{content}</span>
            </label>
            <span className="delete-btn" title="Delete" onClick={() => handleDelete(id)}>
            </span>
          </li>
        )
      })}
    </ul>
  );
};

export default List;
