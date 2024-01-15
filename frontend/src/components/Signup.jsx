export function Signup() {
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
          className="rounded-sm h-9 outline-none outline-blue-200 outline-1 focus:bg-slate-200"
          required
        />
        <input
          type="email"
          placeholder=" Enter your email"
          className="rounded-sm h-9 outline-none outline-blue-200 outline-1 focus:bg-slate-200"
          required
        />
        <input
          type="password"
          placeholder=" Enter your password"
          className="rounded-sm h-9 outline-none outline-blue-200 outline-1 focus:bg-slate-200"
          required
        />
        <input
          type="password"
          placeholder=" Confirm your password"
          className="rounded-sm h-9 outline-none outline-blue-200 outline-1 focus:bg-slate-200"
          required
        />
        <button className="bg-blue-500 rounded-sm px-2 w-full text-slate-100 h-9  focus:bg-blue-400">
          Signup
        </button>
      </div>
      <p className="pb-2">
        Already a member? <a href="#">Login</a>
      </p>
    </form>
  );
}
