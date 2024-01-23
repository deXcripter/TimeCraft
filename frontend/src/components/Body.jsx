import Signup from './Signup';
import Login from './Login';
import { CreateTask } from './CreateTask';
import { Tasks } from './Tasks';
import { Controller } from './Controller';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Body() {
  const [loggedInStatus, setLoggedInStatus] = useState(false);

  const triggerLoggedStatus = (bool) => setLoggedInStatus(bool);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" elememt={<Login />} />
        <Route path="tasks" elememt={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
  //   <section className=" w-full bg-gray-100 overflow-scroll">
  //     {!loggedInStatus && <Login triggerLoggedStatus={triggerLoggedStatus} />}
  //     {loggedInStatus && (
  //       <h1 className="flex font-bold m-auto text-xl p-40">
  //         User is logged in
  //       </h1>
  //     )}
  //   </section>
}
