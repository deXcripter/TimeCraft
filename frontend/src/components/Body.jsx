/* eslint-disable react/prop-types */
export default function Body() {
  return (
    <section className="bg-slate-200 w-full">
      <AuthBox>
        <Signup />
      </AuthBox>

      {/* <Signup/> */}
    </section>
  );
}

function Login() {
  return (
    <form className="space-y-6 ">
      <div>
        <h1 className="text-xl font-bold">Welcome back!</h1>
        <p>Log in to access your account</p>
      </div>
      <div className="space-y-3">
        <input
          placeholder=" Enter your email"
          type="email"
          className="rounded-sm h-9 outline-none outline-blue-200 outline-1"
          required
        />

        <input
          placeholder=" Enter your password"
          type="password"
          className="rounded-sm h-9 outline-none outline-blue-200 outline-1"
          required
        />

        <button className="bg-blue-500 rounded-sm px-2 w-full text-slate-100 h-9">
          Login
        </button>
      </div>
      <p className="pb-2">
        Not a member? <a href="#">Sign up</a>
      </p>
    </form>
  );
}

function AuthBox({ children }) {
  return (
    <div className="bg-slate-50 block h-fit w-min px-5 py-2 my-32 mx-auto text-center rounded-md shadow-lg drop-shadow-lg shadow-slate-600 border-blue-30">
      {children}
    </div>
  );
}

function Signup() {
  return (
    <form className="space-y-6">
      <div>
        <h1 className="text-xl font-bold">Join us today! </h1>
        <p>Sign up now to become a member</p>
      </div>
      <div className="space-y-3">
        <input
          type="text"
          placeholder=" Enter your name"
          className="rounded-sm h-9 outline-none outline-blue-200 outline-1"
          required
        />
        <input
          type="email"
          placeholder=" Enter your email"
          className="rounded-sm h-9 outline-none outline-blue-200 outline-1"
          required
        />
        <input
          type="password"
          placeholder=" Enter your password"
          className="rounded-sm h-9 outline-none outline-blue-200 outline-1"
          required
        />
        <input
          type="password"
          placeholder=" Confirm your password"
          className="rounded-sm h-9 outline-none outline-blue-200 outline-1"
          required
        />
        <button className="bg-blue-500 rounded-sm px-2 w-full text-slate-100 h-9 ">
          Signup
        </button>
      </div>
      <p className="pb-2">
        Already a member? <a href="#">Login</a>
      </p>
    </form>
  );
}
