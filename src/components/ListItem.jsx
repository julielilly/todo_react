const ListItem = ({ task, deleteTask, toggleComplete }) => {
  const { text, id, completed } = task;

  return (
    <li className={`flex items-center justify-between p-3 border-b border-gray-300 `}>
      <div className="flex items-center gap-2">
        <label className="relative inline-block cursor-pointer">
          <input type="checkbox" checked={completed} onChange={() => toggleComplete(id)} className="sr-only peer" />
          <div className={`w-5 h-5 border-2 border-gray-400 rounded-full transition-colors peer-checked:bg-primary-color peer-checked:border-transparent peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 hover:bg-primary-color/50`}></div>
        </label>

        <p className={`flex-grow ${completed ? "line-through text-finished-text-color" : ""}`}>{text}</p>
      </div>

      <button onClick={() => deleteTask(id)} className="text-delete-btn-color hover:text-red-700 transition-colors text-2xl">
        &#215;
      </button>
    </li>
  );
};

export default ListItem;
