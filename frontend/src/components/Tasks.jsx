/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Body.module.css';
import Header from './Header';
import Footer from './Footer';
import CreateTask from './CreateTask';

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
        // console.log(res.data.data.at(0)._id);
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchTasks();
  }, []);

  return (
    <>
      <Header />
      <main className="grid grid-cols-[1fr_4fr]">
        <CreateTask />
        <div className={styles.tasks}>
          {tasks.length > 0 ? (
            <ul className="space-y-3 rounded-lg bg-blue-400 overflow-scroll">
              {tasks.map((task) => (
                <ListTasks task={task} key={crypto.randomUUID()} />
              ))}
            </ul>
          ) : (
            <h1 className=" ">Please add tasks</h1>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

async function deleteTask(id) {
  try {
    const res = await axios.request(
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        method: 'DELETE',
        url: `http://localhost:2525/api/v1/tasks/${id}`,
      },
      {
        authorization: localStorage.getItem('token'),
      },
    );
  } catch (err) {
    console.log(err.message);
  }
}

function ListTasks({ task }) {
  const newDate = new Date(task.date);
  const day = newDate.getDay();
  const month = newDate.getUTCMonth();
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

  function convertMonth(enteredMonth) {
    if (enteredMonth + 1 === 1) return 'Jan';
    if (enteredMonth + 1 === 2) return 'Feb';
    if (enteredMonth + 1 === 3) return 'Mar';
    if (enteredMonth + 1 === 4) return 'Apr';
    if (enteredMonth + 1 === 5) return 'May';
    if (enteredMonth + 1 === 6) return 'Jun';
    if (enteredMonth + 1 === 7) return 'Jul';
    if (enteredMonth + 1 === 8) return 'Aug';
    if (enteredMonth + 1 === 9) return 'Sep';
    if (enteredMonth + 1 === 10) return 'Oct';
    if (enteredMonth + 1 === 11) return 'Nov';
    if (enteredMonth + 1 === 12) return 'Dec';
  }

  return (
    <li className="overflow-scroll rounded-md px-5 h-auto bg-blue-50 text-left grid grid-cols-[50px_auto_100px] items-center">
      <div className="text-center h-auto">
        <div>{convertDay(day)}</div>
        <div className="text-xl">
          {convertMonth(month)} {date}
        </div>
      </div>
      <div className="px-7 flex align-top h-auto">
        <p className="text-lg">{task.description}</p>
      </div>
      {task.completed && <div className="">Completed</div>}
      <button
        onClick={() => deleteTask(task._id)}
        className="bg-red-400 rounded-md uppercase"
      >
        Delete
      </button>
    </li>
  );
}
