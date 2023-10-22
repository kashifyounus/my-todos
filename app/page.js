"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (todo) {
      setMainTask([...mainTask, { todo }]);
      setTodo("");
    } else {
      alert("Please enter a task");
    }
  };

  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return <li key={Math.random(Math.round(123))}>{t.todo}</li>;
    });
  }
  return (
    <>
      <div>
        <div>
          <h1 className="bg-black text-white text-3xl font-bold p-5 text-center">
            My Todo List
          </h1>
        </div>
        <div className="p-10 mt-5">
          <form onSubmit={submitHandler}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Todo
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="write todo here"
                          value={todo}
                          onChange={(e) => setTodo(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="p-10 mt-4">
          <div>
            <div className="flex">
              <ul>{renderTask}</ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
