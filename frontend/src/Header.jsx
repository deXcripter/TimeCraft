export function Header({ setLogin }) {
  return (
    <div className="flex bg-[#4682A9] justify-between text-xl text-[#fdfdfc]">
      <Logo />
      <Login setLogin={setLogin} />
    </div>
  );
}

function Logo() {
  return (
    <div className="f items-center  py-3 ">
      <h1 className="font-semibold ml-1 tracking-widest h-4">TimeCraft💡</h1>
    </div>
  );
}

function Login({ setLogin }) {
  function clickSetLogin() {
    setLogin(true);
  }

  return (
    <div className="flex text-lg">
      <button className="px-4 py-2">Login</button>
      <button className="px-4 py-2" onClick={clickSetLogin}>
        Signup
      </button>
    </div>
  );
}
