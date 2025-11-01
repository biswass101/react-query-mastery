import { useQuery } from "@tanstack/react-query"
import { fetchTodoList } from "../lib/api/todos"

export const useTodosQuery = () => {
    return useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodoList,
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
}