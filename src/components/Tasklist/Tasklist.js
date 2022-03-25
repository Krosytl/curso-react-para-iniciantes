import "./tasklist.css";
import propTypes from "prop-types";
import plusIcon from "../../img/plus-icon.svg";

import Taskitem from "../Taskitem/Taskitem";

export default function Tasklist({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <Taskitem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista Fazia</div>}
        <button onClick={addTask} className="btn">
          <img src={plusIcon} alt="plus" />
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

Tasklist.propTypes = {
  title: propTypes.string.isRequired,
  onAddTask: propTypes.func.isRequired,
  tasks: propTypes.array.isRequired
};
