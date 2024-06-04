import { useState } from "react";
import "./styles.css";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["TODO1", "TODO2"]);
  const [completeTodos, setCompleteTodos] = useState(["TODO3", "TODO4"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    console.log("クリック");
    const newTodos = [...incompleteTodos, todoText];
    console.log(newTodos);
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <div className="input-area">
        <input value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => (
            // ループする時は一意のkeyを設定しないとレンダリングがミスる可能性がある
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>戻る</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
