"use client";

import { useSingleTodoQuery } from "../hooks/usesingleTodoQuery";

export default function Todospage() {
  const {
    data: todo,
    isPending,
    error,
  } = useSingleTodoQuery("690655b8b646671d42ef1f43");

  if (isPending)
    return (
      <div
        className="grid place-items-center h-screen 
    text-5xl font-bold"
      >
        Loading...
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div
      className="bg-slate-700/5 flex flex-col
         justify-center gap-3 max-w-4xl mx-auto py-2"
    >
      <div className="bg-gray-800 text-white font-bold p-2 rounded-xl shadow-lg">
        <div className="flex gap-2">
          <h3 className="">{todo.title}</h3>
          <p
            className={`${todo.completed ? "text-green-600" : "text-red-500"}`}
          >
            Status: {todo.completed ? "Completed" : "Pending"}
          </p>
        </div>
      </div>
    </div>
  );
}
