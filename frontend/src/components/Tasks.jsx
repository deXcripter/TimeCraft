import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Body.module.css';

export function Tasks() {
  const [tasks, setTasks] = useState([]);

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
