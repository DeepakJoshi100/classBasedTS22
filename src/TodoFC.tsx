import { FC } from "react";

type TodoProps = {
  name: string;
};
const TodoFC: FC<TodoProps> = ({ name }) => {
  return <>{name}</>;
};
TodoFC.defaultProps = {};
export default TodoFC;
// its a functional based example
