// import { Signup } from './Signup';
// import Login from './Login';
import { useEffect, useState } from 'react';
import axios from 'axios';

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

  // useEffect(() => {
  //   async function fetchTasks() {
  //     const userId = '659bf61557bf80a9f0fb7536';
  //     try {
  //       const res = await axios.get(`http://localhost:2525/api/v1/tasks/`);
  //       setTasks(res.data.data);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   }

  //   fetchTasks();
  // }, []);

  return (
    <div className={styles.tasks}>
      <ul className="space-y-3 rounded-lg bg-blue-300 overflow-scroll">
        {tasks.map((task) => (
          <ListTasks task={task} key={crypto.randomUUID()} />
        ))}
      </ul>
    </div>
  );
}

// manual state
const initialState = [
  {
    title: 'Cooking',
    description: 'Boil the rice',
    date: '2024-04-23',
    priority: 'high',
    tags: 'Food',
    completed: false,
  },
  {
    title: 'Cooking',
    description: 'Cook the beans',
    date: '2024-04-24',
    priority: 'medium',
    tags: 'Food',
    completed: true,
  },
  {
    title: 'Washing',
    description:
      'After school,empty the waste bin, clean the floors, clear the cobwebs. Prepare food for siblings, code a little, then code some more after that',
    priority: 'low',
    date: '2024-04-2',
    tags: 'Food',
    completed: true,
  },
  {
    title: 'Cooking',
    description: 'Cook the beans',
    date: '2024-04-24',
    priority: 'medium',
    tags: 'Food',
    completed: false,
  },
  {
    title: 'Washing',
    description: 'Wash the plates',
    date: '2024-04-28',
    priority: 'low',
    tags: 'Food',
    completed: true,
  },
  {
    title: 'Cooking',
    description: 'Cook the beans',
    date: '2024-04-24',
    priority: 'medium',
    tags: 'Food',
    completed: false,
  },
  {
    title: 'Washing',
    description: 'Wash the plates',
    date: '2024-04-28',
    priority: 'low',
    tags: 'Food',
    completed: false,
  },
];

function ListTasks({ task }) {
  const [radio, setradio] = useState(true);

  const newDate = new Date(task.date);
  const day = newDate.getDay();
  const date = newDate.getDate();

  function convertDay(enteredDate) {
    if (enteredDate > 6) return 'invalid date';
    if (enteredDate === 6) return 'Sat';
    if (enteredDate === 5) return 'Fri';
    if (enteredDate === 4) return 'Thu';
    if (enteredDate === 3) return 'Wed';
    if (enteredDate === 2) return 'Tue';
    if (enteredDate === 1) return 'Mon';
    if (enteredDate === 0) return 'Sun';
    else return 'Invald date';
  }

  return (
    <li className="overflow-scroll rounded-md px-5 h-auto bg-blue-50 text-left grid grid-cols-[50px_auto_100px] items-center">
      <div className="text-center h-auto">
        <div>{convertDay(day)}</div>
        <div className="text-xl">{date}</div>
      </div>
      <div className="px-7 flex align-top h-auto">
        <p className="text-lg">{task.description}</p>
      </div>
      {task.completed && <div className="">Completed</div>}
    </li>
  );
}
