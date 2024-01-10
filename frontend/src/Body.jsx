/* eslint-disable react/prop-types */
import axios from "axios";

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
  return (
    <div className="bg-[#88afc9] h-48 max-w-2xl m-auto p-5">{children}</div>
  );
}

function Login() {
  async function handleFormSubmission(e) {
    e.preventDefault();
    // const stats = await axios.post()
  }

  return (
    <form onSubmit={(e) => handleFormSubmission(e)}>
      <p>
        Your email <input type="email" placeholder="john@gmail.com" />
      </p>
      <p>
        Password <input type="password" placeholder="********" />
      </p>
      <p>
        Confirm password <input type="password" placeholder="********" />
      </p>
    </form>
  );
}
