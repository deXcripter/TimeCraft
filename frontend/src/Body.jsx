/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";

export function Body() {
  return (
    <div className="m-auto py-20 ">
      <Box>
        <Login />
      </Box>
    </div>
  );
}

function Box({ children }) {
  return <div className="bg-[#88afc9] h-48 w-3/5 m-auto p-5">{children}</div>;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  async function handleFormSubmission(e) {
    e.preventDefault();
    console.log("ran");

    try {
      const stats = await axios.post(
        "http://localhost:2525/api/v1/users/signup",
        {
          password,
          passwordConfirm,
          email,
          name: "hi",
        }
      );
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function onChangePasswordConfirm(e) {
    setPasswordConfirm(e.target.value);
  }

  return (
    <form onSubmit={(e) => handleFormSubmission(e)} className="grid gap-1.5">
      <p>
        Your email{" "}
        <input
          type="email"
          required
          placeholder=" john@gmail.com"
          className="rounded-sm"
          value={email}
          onChange={(e) => onChangeEmail(e)}
        />
      </p>
      <p>
        Password{" "}
        <input
          type="password"
          placeholder=" ********"
          required
          className="rounded-sm"
          onChange={onChangePassword}
          value={password}
        />
      </p>
      <p>
        Confirm password{" "}
        <input
          type="password"
          placeholder=" ********"
          className="rounded-sm"
          required
          onChange={(e) => onChangePasswordConfirm(e)}
          value={passwordConfirm}
        />
      </p>
      <button
        className="bg-blue-500 w-3/5 mt-5 m-auto rounded-sm"
        onClick={handleFormSubmission}
      >
        Signup
      </button>
    </form>
  );
}
