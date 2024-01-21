export function Controller() {
  return (
    <div className="flex justify-center p-4 space-x-4">
      <button className="bg-blue-400 px-3 py-1 rounded-xl shadow-md shadow-neutral-600 hover:drop-shadow-xl">
        Create new task
      </button>
      <select className="px-3 py-1 rounded-xl shadow-md shadow-neutral-600 hover:drop-shadow-xl">
        <option>Sort by</option>
        <option>Priorty</option>
        <option>Date added</option>
      </select>
    </div>
  );
}
