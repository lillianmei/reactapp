import { useSelector } from "react-redux";

import Edit from "./components/Edit";
import List from "./components/List";

import "./index.scss";


const Home = () => {
  //呼叫state
  const state = useSelector((state) => state.todo)
  const listLength = state.data.length

  return (
    <div className="home">
      <h1 className="app-header">TO DO LIST</h1>
      <div className="app-container" id="taskList">
        <p style={{ color: 'white' }}>共有 {listLength} 項</p>
        <Edit />
        <List />
      </div>
    </div>
  );
};

export default Home;
