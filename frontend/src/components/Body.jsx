import { Signup } from './Signup';
import Login from './Login';

/* eslint-disable react/prop-types */
export default function Body() {
  return (
    <section className=" w-full overflow-scroll">
      {/* <AuthBox>
        <Signup />
      </AuthBox> */}
      <TaskBody>
        <CreateTask />
      </TaskBody>
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

function TaskBody({ children }) {
  return <div className="h-full bg-slate-300">{children}</div>;
}

function CreateTask() {
  return (
    <div className="flex justify-evenly">
      <button className="bg-blue-400 px-3 py-1 rounded-xl shadow-md shadow-neutral-600 hover:drop-shadow-xl">
        Create new task
      </button>
      <select>
        <option>Hi</option>
      </select>
    </div>
  );
}
