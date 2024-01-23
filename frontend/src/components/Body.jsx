import Signup from './Signup';
import Login from './Login';
import { CreateTask } from './CreateTask';
import { Tasks } from './Tasks';
import { Controller } from './Controller';
import { useState } from 'react';

export default function Body() {
  const [loggedInStatus, setLoggedInStatus] = useState(false);

  const triggerLoggedStatus = (bool) => setLoggedInStatus(bool);

  return (
    <section className=" w-full bg-gray-100 overflow-scroll">
      {!loggedInStatus && <Login triggerLoggedStatus={triggerLoggedStatus} />}
      {loggedInStatus && (
        <h1 className="flex font-bold m-auto text-xl p-40">
          User is logged in
        </h1>
      )}
    </section>
  );
}
