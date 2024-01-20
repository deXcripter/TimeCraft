import Signup from './Signup';
import Login from './Login';
import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './Body.module.css';

/* eslint-disable react/prop-types */
export default function Body() {
  return (
    <section className=" w-full bg-gray-100 overflow-scroll">
      <Tasks />
      {/* <Signup /> */}
    </section>
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

const CreateTask = () => {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:2525/api/v1/tasks/', {
        description,
        date,
        priority,
      });
    } catch (err) {
      console.log(err.message);
    }

    console.log('Task Created:', { description, date, priority });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Create Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-600"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 p-2 w-full border rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-600"
          >
            Priority
          </label>
          <select
            id="priority"
            className="mt-1 p-2 w-full border rounded-md"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="" disabled>
              Select priority
            </option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};
function Tasks() {
  // fetch the actual tasks here
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const res = await axios.request(
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            method: 'GET',
            url: `http://localhost:2525/api/v1/tasks/`,
          },
          {
            authorization: localStorage.getItem('token'),
          },
        );
        setTasks(res.data.data);
        console.log('done');
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchTasks();
  }, []);

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
  // const [radio, setradio] = useState(true);

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
