export default function App() {
  return (
    <div className="bg-[#EAD196] h-screen text-[#F3EDC8]">
      <Header />
    </div>
  );
}

function Header() {
  return (
    <div>
      <Logo />
    </div>
  );
}

function Logo() {
  return (
    <div className="f items-center flex text-xl py-3 bg-[#BF3131]">
      <h1 className="font-semibold ml-1 ">TimeCraft💡</h1>
    </div>
  );
}
