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
          className="rounded-sm h-9 outline-none outline-blue-200 outline-1 focus:bg-slate-200"
          required
        />

        <input
          placeholder=" Enter your password"
          type="password"
          className="rounded-sm h-9 outline-none outline-blue-200 outline-1 focus:bg-slate-200"
          required
        />

        <button className="bg-blue-500 rounded-sm px-2 w-full text-slate-100 h-9 focus:bg-blue-400">
          Login
        </button>
      </div>
      <p className="pb-2">
        Not a member? <a href="#">Sign up</a>
      </p>
    </form>
  );
}

export default Login;
