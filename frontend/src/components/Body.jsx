import { Signup } from './Signup';
import Login from './Login';
import { useState } from 'react';

const initialState = [
  {
    title: 'Cooking',
    description: 'Boil the rice',
    due: '20 January 2024',
    priority: 'high',
    tags: 'Food',
    completed: false,
  },
];

import styles from './Body.module.css';

/* eslint-disable react/prop-types */
export default function Body() {
  return (
    <section className=" w-full overflow-scroll">
      {/* <AuthBox>
        <Signup />
      </AuthBox> */}
      <Controller />
      <Tasks />
    </section>
  );
}

function AuthBox({ children }) {
  return (
    <div className="bg-slate-50 block h-fit w-min px-5 py-2 my-32 mx-auto text-center rounded-md shadow-lg drop-shadow-lg shadow-slate-600 border-blue-30">
      {children}
    </div>
  );
}

function Controller() {
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

function Tasks() {
  // fetch the actual tasks here
  const [tasks, setTasks] = useState(initialState);

  return (
    <div className={styles.tasks}>
      <ul className="space-y-3 rounded-lg  bg-blue-300 overflow-scroll">
        {tasks.map((task) => (
          <ListTasks task={task} key={crypto.randomUUID()} />
        ))}
      </ul>
    </div>
  );
}

function ListTasks({ task }) {
  return (
    <li className="overflow-scroll rounded-md px-5 h-20 bg-blue-100 flex items-center">
      <p>
        {task.completed} {task.description}
      </p>
      <hr className="mt-2"></hr>
    </li>
  );
}
