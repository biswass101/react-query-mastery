'use client';

import { useTodosQuery } from "../hooks/useTodosQuery";

export default function Todospage() {
    const { data, isPending, error } = useTodosQuery();

    if(isPending) return <div className="grid place-items-center h-screen 
    text-5xl font-bold">Loading...</div>
    if(error) return <div>Error: {error.message}</div>

    return (
        <div className="bg-slate-700/5 flex flex-col
         justify-center gap-3 max-w-4xl mx-auto py-2">
            {
                data?.map((todo: {title: string, completed: boolean}, idx: number) => (
                    <div key={idx} className="bg-gray-800 text-white font-bold p-2 rounded-xl shadow-lg">
                        <div className="flex gap-2">
                            <h3 className="">{idx + 1} - {todo.title}</h3>
                            <p className={`${todo.completed ? 'text-green-600' : 'text-red-500'}`}>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}