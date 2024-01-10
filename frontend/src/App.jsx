import { useState } from "react";
import { Body } from "./Body";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="bg-[#F6F4EB] h-screen text-slate-900 grid grid-rows-[auto_1fr_.08fr] ">
      <Header setLogin={setLogin} />
      <main className="overflow-scroll">
        <Body />
      </main>
      <Footer />
    </div>
  );
}
