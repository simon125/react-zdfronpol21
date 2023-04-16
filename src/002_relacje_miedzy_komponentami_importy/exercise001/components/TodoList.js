import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  return (
    <ul style={{ margin: 20, background: "red" }}>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </ul>
  );
};
