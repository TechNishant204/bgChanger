import "./App.css";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("white");
  return (
    <>
      <div className="flex">
        <span
          className="text-4xl m-auto text-center py-5 bg-black w-5/12 top-12 fixed inset-x-40 rounded-lg shadow-lg"
          style={{ color: color !== "white" ? color : "black" }}
        >
          <h1>Hii! Welcome to BgChanger</h1>
        </span>
        <div
          className="w-full h-screen duration-100"
          style={{ backgroundColor: color }}
        ></div>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-8">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-2 py-2 rounded-xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-2xl text-black shadow-lg "
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-2xl text-black shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("orangered")}
              className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "orangered" }}
            >
              orange
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-2xl text-black shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              purple
            </button>
            <button
              onClick={() => setColor("cyan")}
              className="outline-none px-4 py-1 rounded-2xl text-black shadow-lg"
              style={{ backgroundColor: "cyan" }}
            >
              cyan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
