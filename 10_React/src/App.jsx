import { Note } from "./10_reactNote/Note";
import { Todo } from "./20_reactTodo/Todo";

export const App = () => {
  return (
    <>
      <div className="reactTodo">
        <Todo />
      </div>
      <div className="reactNote">
        <Note />
      </div>
    </>
  );
};
