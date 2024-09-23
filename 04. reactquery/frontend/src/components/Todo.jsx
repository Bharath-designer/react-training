import { useDelete, useEdit } from "../api/react-query";

export const Todo = ({ todo,refetch}) => {
  const {mutate:editToto,isPending:isediting}=useEdit();
  const {mutate:deleteToto,isPending:isdeleting}=useDelete();
    return (
    <div className="flex items-center">
      <input
        checked={todo.done}
        type="checkbox"
        onChange={(e) => editToto({ ...todo, done: e.target.checked })}
      />
      <span className="flex-grow">{todo.task}</span>
      <button
      disabled={isdeleting}
        onClick={() => deleteToto(todo.id)}
        className="color-danger"
      >
        {isdeleting ?"Deleting":"Delete"}
      </button>
     
    </div>
  );
};
