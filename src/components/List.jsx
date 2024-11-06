import ListItem from "./ListItem";

const List = ({ tasks, deleteTask, toggleComplete }) => {
  // Filter tasks into incomplete and completed arrays
  const incompleteTasks = tasks.filter((task) => task.completed === false);
  const completedTasks = tasks.filter((task) => task.completed === true);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-header-color my-4">Incomplete Tasks</h2>
      <ul className="space-y-2">
        {incompleteTasks.map((task) => (
          <ListItem deleteTask={deleteTask} toggleComplete={toggleComplete} key={task.id} task={task} />
        ))}
      </ul>

      <h2 className="text-lg font-semibold text-header-color my-4">Completed Tasks</h2>
      <ul className="space-y-2">
        {completedTasks.map((task) => (
          <ListItem deleteTask={deleteTask} toggleComplete={toggleComplete} key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default List;
